import './Header.scss';
import Image from 'next/image';
import logo from '/public/images/header/logo.png';
import Link from 'next/link';
import HeaderNavLinks from './HeaderNavLinks/HeaderNavLinks';

export default function Header() {
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
        <HeaderNavLinks />
      </nav>
    </header>
  );
}
