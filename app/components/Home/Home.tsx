'use client';
import Script from 'next/script';
import './Home.scss';
import { Typewriter } from 'react-simple-typewriter';
import profilePicture from '/public/images/home/profile-picture.png';
import Image from 'next/image';
import NavigationLinks from './NavigationLinks/NavigationLinks';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div>
          <h1 className="title">
            Hey !
            <br />
            Je m'appelle <span className="name">Pierre Chevallier</span>,
            <br />
            Je suis{' '}
            <span className="job">
              <Typewriter words={['développeur web', 'étudiant en M2 MIAGE']} cursor loop={true} delaySpeed={2000} />
            </span>
          </h1>
          <NavigationLinks />
        </div>
        <Image
          src={profilePicture}
          alt="Photo de Pierre"
          className="profile-picture"
          width={450}
          height={450}
          priority={true}
          placeholder="blur"
        />
      </div>
      <div id="particles-js" className="particles" />
      <Script src="particles/particles.min.js" />
    </>
  );
}
