'use client';
import Script from 'next/script';
import './Home.scss';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <>
      <h1 className="title">
        Hey !
        <br />
        Je suis Pierre Chevallier,
        <br />
        Je suis{' '}
        <Typewriter
          words={['développeur web.', 'étudiant en M2 MIAGE.']}
          cursor
          cursorColor="#56dcfc"
          loop={true}
          delaySpeed={2000}
        />
      </h1>
      <div id="particles-js" className="particles" />
      <Script src="home/particles/particles.min.js" />
    </>
  );
}
