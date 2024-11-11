import { Redirect } from 'react-router-dom';
export default function Home() {
  console.log('Redirecting to /docs/intro.md');
  return <Redirect to="/docs/intro" />;
}
