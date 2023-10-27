"use client";
import "../styles/header.scss";
import { useEffect, useState } from "react"; // Import useEffect to handle page activation
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import logo from "/public/HerrmannChiroLogo.svg";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  preload: false,
});

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header" className={`header ${isMenuOpen ? "open" : ""}`}>
      <div className="wrapper">
        <nav className="navbar">
          <div className="logo-container">
            <Link href="#/">
              <Image src={logo} alt="herrmann chiropractic logo" />
            </Link>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`flex-row ${isMenuOpen ? "open" : ""}`}>
            <li className="list-item">
              <a href="#about-us" className="nav-link" onClick={closeMenu}>
                about us
              </a>
            </li>
            <li className="list-item">
              <a href="#new-patient" className="nav-link" onClick={closeMenu}>
                new patient
              </a>
            </li>
            <li className="list-item">
              <a href="#expect" className="nav-link" onClick={closeMenu}>
                what to expect
              </a>
            </li>
            <li className="list-item">
              <a href="#location" className="nav-link" onClick={closeMenu}>
                location
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
