import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App sdf sdf ' }, { name: 'description', content: 'Welcome sssccscto React R sdf sdf sdf outer!' }];
}

export default function Test() {
  return (
    <>
      <div>settings settings settings</div>
      <div>settings settings settings</div>
      <div>settings settings settings</div>
      <div>settings settings settings</div>
      <div>settings settings settings</div>
      <div>settings settings settings</div>
    </>
  );
}
