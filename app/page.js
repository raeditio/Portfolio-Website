'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import ResumeCard from './components/Landing/ResumeCard';
import TimelineWrapper from './components/Landing/TimelineWrapper';
import LanguageBox from './components/Landing/LanguageBox';
import ProjectCardContainer from './components/Landing/ProjectCardContainer';

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
      <main className="min-w-full max-h-screen scroll-smooth snap-y snap-mandatory overflow-y-scroll">
        {/* Intro Section */}
        <section className="snap-center flex flex-col justify-center items-center text-center whitespace-nowrap px-4">
          <div className="mt-36 sm:mt-52 text-white">
            <h1 className="text-5xl sm:text-8xl inline-block text-transparent bg-clip-text bg-gradient-to-b from-60% from-gray-200">
              Ryan Jung
            </h1>
            <div className="text-lg text-zinc-400 mt-4">
              <p className="text-zinc-300 mb-2">📍Vancouver, BC | Software Engineer</p>
              <p>AI, Embedded Systems, Web, IoT</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link href="https://github.com/raeditio" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 sm:p-4 rounded-lg w-36 sm:w-32 sm:h-12 bg-gradient-to-t from-neutral-300 via-30% via-indigo-600 to-90% to-purple-500 brightness-90
                  hover:brightness-100 hover:saturate-200 hover:transition-all hover:ease-in-out">
                  <Image src="/github.svg" alt="GitHub" width={24} height={24} className="grayscale brightness-150" />
                  <span className='text-white'>GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/ryanjung0/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 sm:p-4 rounded-lg w-36 sm:w-32 sm:h-12 bg-gradient-to-t from-neutral-300 via-30% via-indigo-600 to-90% to-purple-500 brightness-90
                  hover:brightness-100 hover:saturate-200 hover:transition-all hover:ease-in-out">
                  <Image src="/linkedin_white.svg" alt="LinkedIn" width={23} height={23} className="saturate-200" />
                  <span className='text-white'>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Computer Language Box */}
          <LanguageBox />
        </section>
        
        {/* Experience Section */}
        <section className="snap-center flex justify-center mt-20 sm:mt-52 text-zinc-300 my-24 sm:my-48 whitespace-nowrap w-full px-4">
          <div className="flex flex-col w-full sm:w-512 h-full">
            <div className="flex flex-col items-center rounded-2xl">
              <h1 className="underline text-xl sm:text-3xl text-center mb-4">&nbsp;Experience&nbsp;</h1>
              <TimelineWrapper className="snap-center">
                {[{
                    company: "SKKU",
                    title: "Researcher",
                    duration: "October 2018 - January 2019",
                    responsibilities: [
                      "Microorganism Cultivation",
                      "Data Analysis and Interpretation",
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
                    company: "Pylon",
                    title: "Software Engineer",
                    duration: "October 2023 - September 2024",
                    responsibilities: [
                      "CNN CV Data Collection Algorithm",
                      "Automation Algorithms",
                      "Software Development and Maintenance",
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
            <div className="flex justify-center mt-4">
              <Link href="/resume" className="flex justify-center p-3 w-full sm:w-48 rounded bg-neutral-400 text-black text-lg sm:text-2xl">
                Go to Resume
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="snap-center flex flex-col justify-center px-4">
          <h1 className="flex justify-center underline text-xl sm:text-3xl text-zinc-100 mt-24 sm:mt-44">&nbsp;Projects&nbsp;</h1>
          <div className="flex flex-col">
            <h1 className="flex justify-center text-zinc-100 mt-4 text-sm sm:text-base">
              Click on Project Name to Navigate to Project Link.
            </h1>
          </div>
          <ProjectCardContainer />
        </section>
      </main>
    </>
  );
}
