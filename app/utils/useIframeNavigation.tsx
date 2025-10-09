// useIframeNavigation.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function useIframeNavigation() {
  const navigate = useNavigate();
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!e.data || e.data.type !== "QUMRA_NAVIGATE") return;
      const path = String(e.data.path || "");
      if (!path.startsWith("/")) return;
      navigate(path);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate]);
}