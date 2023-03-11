'use client';
import Script from 'next/script';
import './Home.scss';
import { Typewriter } from 'react-simple-typewriter';
import profilePicture from '/public/home/profile_picture.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="presentation">
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
        <Image
          src={profilePicture}
          alt="Photo de Pierre"
          className="profile-picture"
          width={350}
          height={350}
          priority={true}
        />
      </div>
      <div id="particles-js" className="particles" />
      <Script src="home/particles/particles.min.js" />
    </>
  );
}
