import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome sssccscto React Router!" },
  ];
}

export default function Test() {
  return <div>testtest set set sqqqqqqdsdsdsdsdet</div>;
}
