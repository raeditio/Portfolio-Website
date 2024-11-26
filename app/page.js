'use client'

import Image from 'next/image';
import Link from 'next/link';
import { use, useEffect, useRef, useState } from 'react';

import ResumeCard from './components/Landing/ResumeCard';
import TimelineWrapper from './components/Landing/TimelineWrapper';
import LanguageBox from './components/Landing/LanguageBox';

export default function Home() {
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const centerProjectRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (projectsVisible && centerProjectRef.current) {
        centerProjectRef.current.style.transform = `translateX(-490px) skewY(-3deg)`;
        centerProjectRef.current.style.transition = `transform 0.2s ease-out`;
      } else if (centerProjectRef.current) {
        centerProjectRef.current.style.transform = `translateX(0)`;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProjectsVisible(true);
          } else {
            setProjectsVisible(false);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (centerProjectRef.current) {
      observer.observe(centerProjectRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projectsVisible]);

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
            {/* <div className="flex flex-col items-center rounded-2xl" style={{ background: "linear-gradient(120deg, #232526, #414345)" }}> */}
            <div className="flex flex-col items-center rounded-2xl">
              <h1 className="underline text-3xl text-center mb-4">&nbsp;Experience&nbsp;</h1>
              <TimelineWrapper>
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
          </section>
        </div>

        {/* Projects Section */}
        <h1 className="underline text-3xl mt-24 text-center">&nbsp;Projects&nbsp;</h1>
        <div
          className={`flex justify-center relative mt-10 mb-96 transition-transform duration-700 ease-in-out ${
            projectsVisible ? '-translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {/* Left project */}
          <div
            className="flex justify-start backdrop-blur-lg rounded-xl shadow-md shadow-zinc-700 border border-white/20 w-128 h-128 my-8 transform translate-x-6 -skew-y-3"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1.0), rgba(0, 0, 0, 0.1))" }}
          >
            <div className="w-9/10 h-auto blur-sm">
              <h1 className="text-zinc-100 text-2xl border-b-2 w-full h-10 m-4">Project 1</h1>
            </div>
          </div>
          {/* Center project */}
          <div
            ref={centerProjectRef}
            className="flex justify-start backdrop-blur-lg rounded-xl shadow-2xl shadow-zinc-700 border border-white/20 w-128 h-128 my-8 transform -translate-y-12 z-10"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1.0), rgba(0, 0, 0, 0.1))",
              perspective: "800px",
            }}
          >
            <h1 className="text-zinc-100 text-2xl border-b-2 w-full h-10 m-4">TorchVision</h1>
          </div>
          {/* Right project */}
          <div
            className="flex justify-start backdrop-blur-lg rounded-xl shadow-md shadow-zinc-700 border border-white/20 w-128 h-128 my-8 transform -translate-x-6 skew-y-3"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1.0), rgba(0, 0, 0, 0.1))" }}
          >
            <div className="w-9/10 h-auto blur-sm">
              <h1 className="text-zinc-100 text-2xl border-b-2 w-full h-10 m-4">Project 3</h1>
            </div>
          </div>
        </div>

      </main>
  </>
  );
}