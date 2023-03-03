'use client';
import React from 'react';
import './HamburgerButton.scss';
import { MouseEvent } from 'react';

export default function HamburgerButton() {
  function toggleMenuButton(e: MouseEvent): void {
    const menuButton = e.currentTarget as HTMLElement;
    if (!menuButton.classList.contains('opened')) {
      menuButton.classList.add('opened');
    } else {
      menuButton.classList.remove('opened');
    }
  }

  return (
    <button className="hamburger-button" onClick={(e) => toggleMenuButton(e)}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
}
