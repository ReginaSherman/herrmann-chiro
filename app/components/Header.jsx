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
    setMenuOpen(!isMenuOpen);
  };

  // Determine the active page based on the current URL within a useEffect
  useEffect(() => {
    const pathname = window.location.pathname;
    const isHomePage = pathname === "/";
    const isAboutPage = pathname === "/#about-us";
    const isNewPatientPage = pathname === "/#new-patient";
    const isExpectPage = pathname === "/#expect";
    const isLocationPage = pathname === "/#location";

    const navLinks = document.querySelectorAll(".nav-link");
    console.log(navLinks);
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (isHomePage && link.getAttribute("href") === "/") {
        link.classList.add("active");
      } else if (isAboutPage && link.getAttribute("href") === "#about-us") {
        link.classList.add("active");
      } else if (
        isNewPatientPage &&
        link.getAttribute("href") === "#new-patient"
      ) {
        link.classList.add("active");
      } else if (isExpectPage && link.getAttribute("href") === "#expect") {
        link.classList.add("active");
      } else if (isLocationPage && link.getAttribute("href") === "#location") {
        link.classList.add("active");
      }
    });
  }, []);

  return (
    <header id="header" className="header">
      <div className="wrapper">
        <nav className="navbar">
          <div className="logo-container">
            <Link href="/">
              <Image src={logo} alt="herrmann chiropractic logo" />
            </Link>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`flex-row + ${montserrat.className}`}>
            <li className="list-item">
              <a href="#about-us" className="nav-link">
                about us
              </a>
            </li>
            <li className="list-item">
              <a href="#new-patient" className="nav-link">
                new patient
              </a>
            </li>
            <li className="list-item">
              <a href="#expect" className="nav-link">
                what to expect
              </a>
            </li>
            <li className="list-item">
              <a href="#location" className="nav-link">
                location
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
