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
        <Link href="/">
          <Image src={pierreDrawing} alt="Dessin simplifié de Pierre" className="pierre-drawing" />
        </Link>
        <div className="links-wrapper">
          <Link href="/" onClick={closeMenu}>
            Accueil
          </Link>
          <Link href="" onClick={closeMenu}>
            À propos
          </Link>
          <Link href="" onClick={closeMenu}>
            Compétences
          </Link>
          <Link href="" onClick={closeMenu}>
            Expériences
          </Link>
          <Link href="" onClick={closeMenu}>
            Projets
          </Link>
          <Link href="" onClick={closeMenu}>
            Études
          </Link>
          <Link href="" onClick={closeMenu}>
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
