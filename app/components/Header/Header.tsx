'use client';
import './Header.scss';
import Image from 'next/image';
import pierreDrawing from '/public/header/pierre-drawing.png';
import Link from 'next/link';
import { useState } from 'react';

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
          <Image src={pierreDrawing} alt="Dessin simplifié de Pierre" className="logo" />
        </Link>
        <div className={isMenuOpened ? 'links-wrapper active' : 'links-wrapper'}>
          <Link href="/" onClick={closeMenu} className="link">
            Accueil
          </Link>
          <Link href="" onClick={closeMenu} className="link">
            À propos
          </Link>
          <Link href="" onClick={closeMenu} className="link">
            Compétences
          </Link>
          <Link href="" onClick={closeMenu} className="link">
            Expériences
          </Link>
          <Link href="" onClick={closeMenu} className="link">
            Projets
          </Link>
          <Link href="" onClick={closeMenu} className="link">
            Études
          </Link>
          <Link href="" onClick={closeMenu} className="link">
            Contact
          </Link>
        </div>
        <button className={isMenuOpened ? 'hamburger-button opened' : 'hamburger-button'} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </nav>
    </header>
  );
}
