import { Redirect } from 'react-router-dom';
export default function Home() {
  console.log('Redirecting to /doc/docs/intro.md');
  return <Redirect to="/doc/docs/intro" />;
}
