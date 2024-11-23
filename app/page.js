'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import ResumeCard from './components/Landing/ResumeCard';
import TimelineWrapper from './components/Landing/TimelineWrapper';
import LanguageBox from './components/Landing/LanguageBox';

export default function Home() {
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  const index = cardsRef.current.indexOf(entry.target);
                  if (entry.isIntersecting) {
                      setVisibleCards((prev) => {
                          const newVisibleCards = [...prev];
                          newVisibleCards[index] = true;
                          return newVisibleCards;
                      });
                  }
              });
          },
          { threshold: 0.1 }
      );

      // Observe each card
      cardsRef.current.forEach((ref) => {
          if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="min-w-512">
        <div className="flex justify-center gap-96 whitespace-nowrap">
          <div className="text-center mt-72 text-white">
            <h1 className="text-8xl inline-block text-transparent bg-clip-text bg-gradient-to-b from-60% from-gray-200">Ryan Jung</h1>
            <div className="text-lg text-zinc-400">
              <p className="text-zinc-300 mb-2">📍Vancouver, BC | Software Engineer</p>
              <p>AI, Embedded Systems, Web, IoT</p>
              <div className="flex justify-center gap-6 mt-12">
                <Link href="https://github.com/raeditio" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg w-32 h-12 bg-gradient-to-t from-neutral-300 via-30% via-indigo-600 to-90% to-purple-500 brightness-90
                  hover:brightness-100 hover:saturate-200 hover:transition-all hover:ease-in-out">
                  <Image src="/github.svg" alt="GitHub" width={24} height={24} className="grayscale brightness-150" />
                  <span className='text-white'>GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/ryanjung0/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg w-32 h-12 bg-gradient-to-t from-neutral-300 via-30% via-indigo-600 to-90% to-purple-500 brightness-90
                  hover:brightness-100 hover:saturate-200 hover:transition-all hover:ease-in-out">
                  <Image src="/linkedin_white.svg" alt="LinkedIn" width={23} height={23} className="saturate-200" />
                  <span className='text-white'>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Computer Language Box */}
        <LanguageBox />
        
        {/* Resume Box */}
        <div className="flex justify-center mt-52 text-zinc-300 my-48 whitespace-nowrap w-full">
          <section className="flex flex-col w-512 h-full">
            {/* Experience Section */}
            <div className="flex flex-col items-center rounded-2xl" style={{ background: "linear-gradient(120deg, #232526, #414345)" }}>
              <h1 className="underline text-3xl text-center mb-4">&nbsp;Experience&nbsp;</h1>
              <TimelineWrapper>
                {[{
                    company: "Pylon",
                    title: "Software Engineer",
                    duration: "October 2023 - September 2024",
                    responsibilities: [
                        "CNN CV Data Collection Algorithm",
                        "Automation Algorithms",
                        "Distribution and Management of Programs",
                    ]
                }, {
                    company: "Labs Co.",
                    title: "Instructor",
                    duration: "June 2020 - September 2021",
                    responsibilities: [
                        "IB, SAT, TOEFL, and Engineering courses",
                        "95% student pass rate",
                    ]
                }, {
                    company: "SKKU",
                    title: "Researcher",
                    duration: "October 2018 - January 2019",
                    responsibilities: [
                        "Microorganism Cultivation",
                        "Data Analysis and Interpretation",
                    ]
                }].map((job, index) => (
                    <ResumeCard
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        isVisible={!!visibleCards[index]}
                        {...job}
                    />
                ))}
            </TimelineWrapper>
            </div>

            {/* Projects Section */}
            <h1 className="border-b-2 text-3xl mt-2 text-center">Projects</h1>
            <div className="flex items-center mt-2">
              <span className="font-bold text-xl">Computer Vision Data Extractor</span>
              <span className="flex ml-auto">Pylon Electronics | August 2024 - September 2024</span>
            </div>
            <ul className="list-disc ml-8">
              <li>Achieved 40% reduction in manual data entry by designing a computer vision data extractor over OpenCV</li>
              <li>Improved data extraction precision by 25 % using machine learning algorithms with Tensorflow</li>
              <li>Enabled extensibility with LLM API for reliable data comprehension</li>
            </ul>
            
            <div className="flex items-center mt-2">
              <span className="font-bold text-xl">Matter-Enabled Smart Desk</span>
              <span className="flex ml-auto">April 2024 - August 2024</span>
            </div>
            <ul className="list-disc ml-8">
              <li>Developed IoT control hardware on ESP32 for a motorized standing desk</li>
              <li>Improved user accessibility by 40% by integrating Matter protocol for cross-platform interoperability</li>
              <li>Integrated with Apple HomeKit for Siri control</li>
            </ul>
            
            <div className="flex items-center mt-2">
              <span className="font-bold text-xl">Unreal Engine 4 Steam Community Mods</span>
              <span className="flex ml-auto">
                <Link href="https://steamcommunity.com/workshop/filedetails/?id=3036797917" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">
                  Mod Link
                </Link>
                  &nbsp;| August 2023 - Present
              </span>            
            </div>
            <ul className="list-disc ml-8">
              <li>Generated over 25,000 downloads with positive user ratings for a suite of Unreal Engine 4 mods published Steam</li>
              <li>Regularly published improvements and feature updates based on user feedback</li>
              <li>Enhanced compatibility for broader environments and integration with other mods</li>
            </ul>
          </section>
        </div>
      </main>
  </>
  );
}