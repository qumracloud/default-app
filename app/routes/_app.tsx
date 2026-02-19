import { Outlet } from "react-router";
import { useEffect } from "react";
import { QumraAppBridgeProvider, useNavigationMenu } from "@qumra/jisr";
import { authenticate } from "~/qumra.server";

export async function loader({ request }: { request: Request }) {
  const authResponse = await authenticate.admin(request);

  if (authResponse instanceof Response) {
    return authResponse;
  }

  return { apiKey: process.env.QUMRA_API_KEY || "" };
}

function AppShell() {
  const navigation = useNavigationMenu();

  useEffect(() => {
    navigation.set([
      { label: "الرئيسية", url: "/", icon: "home" },
      { label: "الإعدادات", url: "/settings", icon: "settings" },
    ]);
  }, [navigation]);

  return <Outlet />;
}

export default function AppLayout({
  loaderData,
}: {
  loaderData: { apiKey: string };
}) {
  return (
    <QumraAppBridgeProvider config={{ apiKey: loaderData.apiKey }}>
      <AppShell />
    </QumraAppBridgeProvider>
  );
}
