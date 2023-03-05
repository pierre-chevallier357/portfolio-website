'use client';
import './Header.scss';
import Image from 'next/image';
import logo from '/public/header/logo.png';
import Link from 'next/link';
import { useState } from 'react';

interface NavLink {
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { href: '/', text: 'Accueil' },
  { href: '/', text: 'À propos' },
  { href: '/', text: 'Compétences' },
  { href: '/', text: 'Expériences' },
  { href: '/', text: 'Projets' },
  { href: '/', text: 'Études' },
  { href: '/', text: 'Contact' },
];

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function toggleMenu(): void {
    setIsMenuOpened((isMenuOpened) => !isMenuOpened);
  }

  function closeMenu(): void {
    setIsMenuOpened(false);
  }

  return (
    <header>
      <nav className="navbar">
        <Link href="/" className="logo-link">
          <Image src={logo} alt="Dessin simplifié de Pierre" className="logo" width={48} height={48} priority={true} />
        </Link>
        <div className={isMenuOpened ? 'links-wrapper active' : 'links-wrapper'}>
          {navLinks.map((link, index) => {
            return (
              <Link
                href={link.href}
                onClick={closeMenu}
                className="link"
                key={index}
                style={{ animationDelay: (index + 1) / 4 + 's' }}>
                {link.text}
              </Link>
            );
          })}
        </div>
        <button className={isMenuOpened ? 'hamburger-button opened' : 'hamburger-button'} onClick={toggleMenu}>
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
      </nav>
    </header>
  );
}
