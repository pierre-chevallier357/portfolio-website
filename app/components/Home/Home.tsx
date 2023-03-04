import Script from 'next/script';
import './Home.scss';

export default function Home() {
  return (
    <>
      <h1>Hello world!</h1>
      <div id="particles-js" className="particles" />
      <Script src="home/particles/particles.min.js" />
    </>
  );
}
