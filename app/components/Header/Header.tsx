import './Header.scss';
import HamburgerButton from './HamburgerButton/HamburgerButton';
import Image from 'next/image';
import pierreDrawing from '/public/header/pierre-drawing.png';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <a href="">
          <Image src={pierreDrawing} alt="Dessin simplifié de Pierre" className="pierre-drawing" />
        </a>
        <div className="links-wrapper">
          <a href="">Accueil</a>
          <a href="">À propos</a>
          <a href="">Compétences</a>
          <a href="">Expériences</a>
          <a href="">Projets</a>
          <a href="">Études</a>
          <a href="">Contact</a>
        </div>
        <HamburgerButton />
      </nav>
    </header>
  );
}
