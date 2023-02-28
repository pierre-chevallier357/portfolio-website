import Script from 'next/script';
import './Home.scss';

export default function Home() {
  return (
    <>
      <div id="particles-js" className="particles" />
      <h1>Hello world!</h1>
      <Script src="particles.min.js" />
    </>
  );
}
