// // useIframeNavigation.tsx
// import { useEffect } from "react";
// import { useNavigate } from "react-router";

// export function useIframeNavigation() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const onMessage = (e: MessageEvent) => {
//       if (!e.data || e.data.type !== "QUMRA_NAVIGATE") return;

//       const path = String(e.data.path || "");
//       if (!path.startsWith("/")) return;

//       navigate(path);
//     };

//     window.addEventListener("message", onMessage);

//     return () => window.removeEventListener("message", onMessage);
//   }, [navigate]);
// }

// useIframeNavigation.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function useIframeNavigation() {
  const navigate = useNavigate();

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!e.data || e.data.type !== "QUMRA_NAVIGATE") return;

      const rawPath = String(e.data.path || "");
      console.log({ rawPath }, "@@ path from iframe");

      if (!rawPath.startsWith("/")) return;

      // ✅ فك pathname و search params بشكل صحيح
      let pathname = rawPath;
      let search = "";

      try {
        const url = new URL(rawPath, window.location.origin);
        pathname = url.pathname;
        search = url.search; // ?a=1&b=2...
      } catch {
        // fallback آمن
        pathname = rawPath.split("?")[0];
        search = rawPath.includes("?") ? `?${rawPath.split("?")[1]}` : "";
      }

      navigate({
        pathname,
        search,
      });
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate]);
}
