import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Header.scss';

export default function Header() {
  return (
    <header className="navbar">
      <div className="social-icons">
        <SocialIcon url="https://www.linkedin.com/in/pierre-chevallier/" fgColor="white" bgColor="transparent" />
        <SocialIcon url="https://github.com/pierre-chevallier357" fgColor="white" bgColor="transparent" />
      </div>
      <div className="contact-me">
        <SocialIcon url="mailto: contact@pierre-chevallier.com" fgColor="white" bgColor="transparent" />
        <p className="get-in-touch">GET IN TOUCH</p>
      </div>
    </header>
  );
}
