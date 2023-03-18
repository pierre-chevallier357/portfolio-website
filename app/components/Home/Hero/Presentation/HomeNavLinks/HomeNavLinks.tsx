'use client';
import chevronDown from '/public/images/home/chevron-down-solid.svg';
import arrowDown from '/public/images/home/arrow-down-solid.svg';
import gitHub from '/public/images/home/github.svg';
import linkedIn from '/public/images/home/linkedin.svg';
import { useState } from 'react';
import Image from 'next/image';
import './HomeNavLinks.scss';
import Link from 'next/link';

export default function HomeNavLinks() {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);

  return (
    <div className="presentation-links-wrapper">
      <Link
        className="about-link"
        href="/"
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
      </Link>
      <Link
        href="https://www.linkedin.com/in/pierre-chevallier/"
        target="_blank"
        className="external-link"
        onMouseEnter={() => setIsLinkedInHovered(true)}
        onMouseLeave={() => setIsLinkedInHovered(false)}>
        <Image src={linkedIn} alt="Icône LinkedIn" className="social-icon hovered" width={24} priority={true} />
        {isLinkedInHovered && 'LinkedIn'}
      </Link>
      <Link
        href="https://github.com/pierre-chevallier357"
        target="_blank"
        className="external-link"
        onMouseEnter={() => setIsGitHubHovered(true)}
        onMouseLeave={() => setIsGitHubHovered(false)}>
        <Image src={gitHub} alt="Icône GitHub" className="social-icon" width={24} priority={true} />
        {isGitHubHovered && 'GitHub'}
      </Link>
    </div>
  );
}
