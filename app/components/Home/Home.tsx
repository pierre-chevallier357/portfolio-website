import Script from 'next/script';
import Hero from './Hero/Hero';
import './Home.scss';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="particles-js" className="particles" />
      <Script src="particles/particles.min.js" />
    </>
  );
}
