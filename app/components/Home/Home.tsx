'use client';
import Script from 'next/script';
import './Home.scss';
import { Typewriter } from 'react-simple-typewriter';
import profilePicture from '/public/images/home/profile-picture.png';
import Image from 'next/image';
import chevronDown from '/public/images/home/chevron-down-solid.svg';
import arrowDown from '/public/images/home/arrow-down-solid.svg';
import { useState } from 'react';

export default function Home() {
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  return (
    <>
      <div className="hero">
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
          <button
            className="about-button"
            onMouseEnter={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}>
            À propos
            <Image
              src={isAboutHovered ? arrowDown : chevronDown}
              alt="Flèche pointant vers le bas"
              width={16}
              className="arrow-down"
              priority={true}
            />
          </button>
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
