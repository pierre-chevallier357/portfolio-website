'use client';
import { useState } from 'react';
import './HeaderNavLinks.scss';
import Link from 'next/link';

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

export default function HeaderNavLinks() {
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
    <>
      <div className={isMenuOpened ? 'header-links-wrapper active' : 'header-links-wrapper'}>
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
    </>
  );
}
