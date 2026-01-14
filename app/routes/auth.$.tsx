import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { authenticate, query } from "~/qumra.server";
import { prisma } from "prisma/lib/prisma";

export async function loader({ request }: { request: Request }) {
  const authResponse = await authenticate.admin(request);

  if (authResponse instanceof Response) {
    return authResponse; 
  }

  const allUsers = await prisma.session.findMany();
  return Response.json({ success: true, allUsers });
}


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome sccscto React Router!" },
  ];
}

// export default function Home() {
//   return <Welcome />;
// }
