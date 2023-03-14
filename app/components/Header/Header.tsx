'use client';
import './Header.scss';
import Image from 'next/image';
import logo from '/public/images/header/logo.png';
import Link from 'next/link';
import { useState } from 'react';

interface NavLink {
  id: number;
  href: string;
  text: string;
}

const navLinks: NavLink[] = [
  { id: 1, href: '/', text: 'Accueil' },
  { id: 2, href: '/', text: 'À propos' },
  { id: 3, href: '/', text: 'Compétences' },
  { id: 4, href: '/', text: 'Expériences' },
  { id: 5, href: '/', text: 'Projets' },
  { id: 6, href: '/', text: 'Études' },
  { id: 7, href: '/', text: 'Contact' },
];

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function toggleMenu(): void {
    setIsMenuOpened((isMenuOpened) => !isMenuOpened);
    document.body.classList.toggle('lock-scroll');
  }

  function closeMenu(): void {
    setIsMenuOpened(false);
    document.body.classList.remove('lock-scroll');
  }

  return (
    <header>
      <nav className="navbar">
        <Link href="/" className="logo-link">
          <Image
            src={logo}
            alt="Dessin simplifié de Pierre"
            className="logo"
            width={48}
            height={48}
            priority={true}
            placeholder="blur"
          />
        </Link>
        <div className={isMenuOpened ? 'links-wrapper active' : 'links-wrapper'}>
          {navLinks.map((link) => {
            return (
              <Link
                href={link.href}
                onClick={closeMenu}
                className="link"
                key={link.id}
                style={{ animationDelay: link.id / 4 + 's' }}>
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
