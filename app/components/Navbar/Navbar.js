'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const brand = "Ryan Jung";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  function setHoverOff() {
    setIsContactHovered(false);
    setIsResumeHovered(false);
  }

  return (
    <nav
      className={isContactHovered || isResumeHovered ? 
        "flex bg-neutral-800 justify-center align-center p-5 fixed top-0 w-full w-min-512 z-10 pb-12 transition-all duration-300" : 
        "flex bg-neutral-900 justify-center align-center p-5 fixed top-0 w-full w-min-512 z-10"}
      onMouseLeave={setHoverOff}
    >
      {/* Brand */}
      <Link href="/" className="-translate-x-96 font-bold font-orbitron text-red-600 text-lg print:hidden">
        {brand}
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-neutral-300 md:hidden absolute right-5 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Links for Desktop and Mobile */}
      <div className={`nav-links flex items-center gap-5 text-sm text-neutral-300 translate-x-96 md:flex ${isMenuOpen ? 'flex flex-col items-start mt-12 md:mt-0' : 'hidden md:flex'}`}>
        
        {/* Contact Menu */}
        <div
          className="relative"
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}
        >
          <Link
            href="/contact"
            className="p-1 rounded hover:bg-gray-800"
            style={{ cursor: "pointer" }}
          >
            Contact
          </Link>
          {isContactHovered && (
            <div className="absolute bg-neutral-800 p-3 rounded shadow-lg top-10 left-0">
              <Link
                href="mailto:ryankwjung@gmail.com"
                className="block hover:underline hover:decoration-neutral-400 hover:transition-all hover:duration-300"
              >
                Email Me
              </Link>
              <Link
                href="/contact"
                className="block hover:underline hover:decoration-neutral-400 hover:transition-all hover:duration-300 mt-2"
              >
                Contact Form
              </Link>
            </div>
          )}
        </div>

        {/* Resume Menu */}
        <div
          className="relative"
          onMouseEnter={() => setIsResumeHovered(true)}
          onMouseLeave={() => setIsResumeHovered(false)}
        >
          <Link
            href="/resume"
            className="p-1 rounded hover:bg-gray-800"
            style={{ cursor: "pointer" }}
          >
            Resume
          </Link>
          {isResumeHovered && (
            <div className="absolute bg-neutral-800 p-3 rounded shadow-lg top-10 left-0">
              <Link
                href="/resume"
                className="block hover:underline hover:decoration-neutral-400 hover:transition-all hover:duration-300"
              >
                View Resume
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="block hover:underline hover:decoration-neutral-400 hover:transition-all hover:duration-300 mt-2"
              >
                Download PDF
              </Link>
            </div>
          )}
        </div>

        {/* Social Media Links */}
        <Link href="https://github.com/raeditio" target="_blank" rel="noopener noreferrer">
          <Image src="/github.svg" alt="GitHub" width="20" height="20" className="grayscale brightness-80 self-center hover:brightness-100" />
        </Link>
        <Link href="https://www.linkedin.com/in/ryanjung0/" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="LinkedIn" width="20" height="20" className="grayscale brightness-150 align-middle hover:brightness-200" />
        </Link>
      </div>
    </nav>
  );
}
