'use client';
import chevronDownIcon from '/public/images/home/chevron-down-solid.svg';
import arrowDownIcon from '/public/images/home/arrow-down-solid.svg';
import gitHubIcon from '/public/images/home/github.svg';
import linkedInIcon from '/public/images/home/linkedin.svg';
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
          src={isAboutHovered ? arrowDownIcon : chevronDownIcon}
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
        <Image src={linkedInIcon} alt="Icône LinkedIn" className="social-icon hovered" width={24} priority={true} />
        {isLinkedInHovered && 'LinkedIn'}
      </Link>
      <Link
        href="https://github.com/pierre-chevallier357"
        target="_blank"
        className="external-link"
        onMouseEnter={() => setIsGitHubHovered(true)}
        onMouseLeave={() => setIsGitHubHovered(false)}>
        <Image src={gitHubIcon} alt="Icône GitHub" className="social-icon" width={24} priority={true} />
        {isGitHubHovered && 'GitHub'}
      </Link>
    </div>
  );
}
