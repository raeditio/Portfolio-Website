'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import './Navbar.css';

const brand = "Ryan Jung";

export default function Navbar() {
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [Opacity, setOpacity] = useState(1);

  function setHoverOff() {
    setIsProjectHovered(false);
    setIsContactHovered(false);
  }

  const isHovered = isProjectHovered || isContactHovered;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =80; // Adjust the value to control when the navbar fades out completely
      const newOpacity = Math.max(1 - scrollY / maxScroll, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={isHovered ? 
        "flex bg-gray-200 align-center p-5 fixed top-0 w-full z-10 pb-12 transition-all duration-300" : 
        "flex bg-gray-200 align-center p-5 fixed top-0 w-full z-10"}
      onMouseLeave={setHoverOff}
      style={{ Opacity }}
    >
      <Link href="/" className="whitespace-nowrap font-bold font-orbitron text-red-700 text-lg">
          {brand}
      </Link>
      
      <div className="nav-links flex gap-5 fixed justify-center left-1/2 -translate-x-1/2 text-sm">
        <Link
          href="/projects"
          className="project p-1 rounded hover:bg-gray-300"
          onMouseEnter={() => { setIsProjectHovered(true); setIsContactHovered(false); }}
        >Projects</Link>
        <div className={isProjectHovered ? "dropdown-project" : "fold-project"} style={ {opacity: isProjectHovered ?  1 : 0 } }>
          <Link href="/project/ai-vision">AI Vision</Link>
          <Link href="/project/smart-desk">Smart Desk</Link>
          <Link href="/project/ifr6000">IFR 6000</Link>
        </div>
        <Link
          href="/contact"
          className="contact p-1 rounded hover:bg-gray-300"
          style={{ cursor: "pointer" }}
          onMouseEnter={() => { setIsContactHovered(true); setIsProjectHovered(false); }}
        >Contact</Link>
        <div className={isContactHovered ? "dropdown-contact" : "fold-contact"} style={ {opacity: isContactHovered ?  1 : 0 } }>
          <Link href="mailto:ryankwjung@gmail.com">ryankwjung@gmail.com</Link>
          <Link href="tel:604-726-1758">(604) 726-1758</Link>
          <Link href="/contact">Contact Form</Link>
        </div>
        <Link href="/resume" onMouseEnter={setHoverOff} className="p-1 rounded hover:bg-gray-300">Resume</Link>
        <Link href="/about" onMouseEnter={setHoverOff} className="p-1 rounded hover:bg-gray-300">About</Link>
        <Link href="https://www.linkedin.com/in/ryanjung0/" target="_blank" rel="noopener noreferrer" className="nav-linkedin">
          <Image src="/linkedin.png" alt="LinkedIn" width="20" height="20" className="linkedin-icon" />
        </Link>
      </div>
    </nav>
  );
}