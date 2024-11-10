'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const brand = "Ryan Jung";

export default function Navbar() {
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  function setHoverOff() {
    setIsProjectHovered(false);
    setIsContactHovered(false);
  }

  const isHovered = isProjectHovered || isContactHovered;

  return (
    <nav
      className={isHovered ? 
        "flex bg-neutral-800 justify-center align-center p-5 fixed top-0 w-full z-10 pb-12 transition-all duration-300" : 
        "flex bg-neutral-900 justify-center align-center p-5 fixed top-0 w-full z-10"}
      onMouseLeave={setHoverOff}
    >
        <Link href="/" className="-translate-x-96 font-bold font-orbitron text-red-600 text-lg print:hidden">
            {brand}
        </Link>
        <div className="flex items-center gap-5 text-sm text-neutral-300 translate-x-96">
          {/* project */}
          <div className="flex flex-col">
            <Link
              href="/projects"
              className="project p-1 rounded hover:bg-gray-800"
              onMouseEnter={() => { setIsProjectHovered(true); setIsContactHovered(false); }}
            >
              Projects
            </Link>
            <div className={isProjectHovered ? "flex absolute gap-24 justify-center items-center top-1/2 mt-2 -left-full -translate-x-1/4 whitespace-nowrap p-2" : "hidden opacity-0"}>
              <Link href="/project/ai-vision"
                className="hover:underline hover:decoration-neutral-700 hover:transition-all hover:duration-300">AI Vision</Link>
              <Link href="/project/smart-desk"
                className="hover:underline hover:decoration-neutral-700 hover:transition-all hover:duration-300">Smart Desk</Link>
              <Link href="/project/ifr6000"
                className="hover:underline hover:decoration-neutral-700 hover:transition-all hover:duration-300">IFR 6000</Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="contact p-1 rounded hover:bg-gray-800"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => { setIsContactHovered(true); setIsProjectHovered(false); }}
          >Contact</Link>
          <div className={isContactHovered ? "flex absolute gap-24 justify-center top-1/2 mt-2 -left-full -translate-x-1/4 whitespace-nowrap p-2" : "hidden opacity-0"}>
            <Link href="mailto:ryankwjung@gmail.com"
              className="hover:underline hover:decoration-neutral-400 hover:transition-all hover:duration-300">ryankwjung@gmail.com</Link>
            <Link href="tel:604-726-1758"
              className="hover:underline hover:decoration-neutral-400 hover:transition-all hover:duration-300">(604) 726-1758</Link>
            <Link href="/contact"
              className="hover:underline hover:decoration-neutral-400 hover:transition-all hover:duration-300">Contact Form</Link>
          </div>
          <Link href="/resume" onMouseEnter={setHoverOff} className="p-1 rounded hover:text-indigo-400 transition-all duration-200">Resume</Link>
          <Link href="/about" onMouseEnter={setHoverOff} className="p-1 rounded hover:text-indigo-400 transition-all duration-200">About</Link>
          <Link href="https://github.com/raeditio" target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" alt="GitHub" width="20" height="20"
              className="grayscale brightness-80 self-center hover:brightness-100" />
          </Link>
          <Link href="https://www.linkedin.com/in/ryanjung0/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" width="20" height="20"
              className="grayscale brightness-150 align-middle hover:brightness-200" />
          </Link>
        </div>
    </nav>
  );
}