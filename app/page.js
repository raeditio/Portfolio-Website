'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const languageRefs = useRef([]); // to store references to each language icon
  const [isVisible, setIsVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = languageRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = true;
              return newVisibility;
            });
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    languageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="flex justify-center gap-96">
        <div className="text-center mt-52 text-white">
          <h1 className="text-8xl inline-block text-transparent bg-clip-text bg-gradient-to-b from-60% from-gray-200">Ryan Jung</h1>
          <div className="text-lg text-zinc-400">
            <p className="text-zinc-300 mb-2">📍Vancouver, BC | Software Engineer</p>
            <p>AI, Embedded Systems, Web Dev</p>
            <p>Home IoT integration</p>
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
                <Image src="/linkedin_white.png" alt="LinkedIn" width={23} height={23} className="saturate-200" />
                <span className='text-white'>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact */}
        
      </div>

      {/* Computer Languages Section */}
      <div className='flex justify-center mt-32'>
        {/* Encasing */}
        <div className="flex flex-col items-center justify-center w-384 h-96 p-2 rounded-2xl bg-radial-gradient overflow-hidden">
          <div className="flex flex-row items-center justify-center border-b-2 border-neutral-800 -translate-x-5">
            {/* HTML Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 transform ${
                isVisible[0] ? '-translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : 'translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-orange-500/10
                  to-70% to-neutral-900/40 shadow-xl shadow-orange-400/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/html5.webp" alt="HTML5" width={50} height={50} />
              </div>
              <span className="text-zinc-200 text-sm mt-1">HTML</span>
            </div>
            {/* JavaScript Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-75 transform ${
                isVisible[0] ? '-translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : 'translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-yellow-400/10
                to-70% to-neutral-900/40 shadow-xl shadow-yellow-500/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/javascript.png" alt="JavaScript" width={50} height={50} className="saturate-200" />
              </div>
              <span className="text-zinc-200 text-sm mt-1">JavaScript</span>
            </div>
            {/* TypeScript Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-100 transform ${
                isVisible[0] ? '-translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : 'translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-blue-600/10
                to-70% to-neutral-900/40 shadow-xl shadow-blue-500/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/ts.svg" alt="TypeScript" width={50} height={50} className="saturate-200" />
              </div>
              <span className="text-zinc-200 text-sm mt-1">TypeScript</span>
            </div>
            {/* CSS Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-150 transform ${
                isVisible[0] ? '-translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : 'translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-blue-700/10
                  to-70% to-neutral-900/40 shadow-xl shadow-blue-600/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/css.svg" alt="CSS3" width={40} height={40} />
              </div>
              <span className="text-zinc-200 text-sm mt-1">CSS</span>
            </div>
            {/* React Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-200 transform ${
                isVisible[0] ? '-translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : 'translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-blue-500/10
                  to-70% to-neutral-900/40 shadow-xl shadow-blue-500/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/react.svg" alt="React" width={50} height={50} />
              </div>
              <span className="text-zinc-200 text-sm mt-1">React</span>
            </div>
            {/* Next.js Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-300 transform ${
                isVisible[0] ? '-translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : 'translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-gray-500/10
                  to-70% to-neutral-900/40 shadow-xl shadow-gray-500/30 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/nextjs.svg" alt="Next.js" width={50} height={50} />
              </div>
              <span className="text-zinc-200 text-sm mt-1">Next.js</span>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-row border-b-2 border-neutral-900 translate-x-5">
            {/* C Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-300 transform ${
                isVisible[0] ? 'translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : '-translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-blue-500/10
                  to-70% to-neutral-900/40 shadow-xl shadow-blue-300/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/c.svg" alt="C" width={50} height={50} />
              </div>
              <span className="text-zinc-200 text-sm mt-1">C</span>
            </div>
            {/* C++ Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-200 transform ${
                isVisible[0] ? 'translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : '-translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-blue-400/10
                  to-70% to-neutral-900/40 shadow-xl shadow-blue-300/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/c++.svg" alt="C++" width={50} height={50} />
              </div>
              <span className="text-zinc-200 text-sm mt-1">C++</span>
            </div>
            {/* Python Icon */}
            <div className="flex flex-col">
              <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-150 transform ${
                isVisible[0] ? 'translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : '-translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
                <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-yellow-400/10
                  via-blue-950/30 to-70% to-neutral-900/40 shadow-xl shadow-yellow-500/20 aspect-square justify-center items-center flex w-24 h-24">
                  <Image src="/python.png" alt="Python3" width={50} height={50} className="saturate-150" />
                </div>
                <span className="text-zinc-200 text-sm mt-1">Python</span>
              </div>
            </div>
            {/* PyTorch Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-100 transform ${
                isVisible[0] ? 'translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : '-translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-red-400/10
                  to-70% to-neutral-900/40 shadow-xl shadow-red-500/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/pytorch.png" alt="PyTorch" width={50} height={50} />
              </div>
              <span className="text-zinc-200 text-sm mt-1">PyTorch</span>
            </div>
            {/* TensorFlow Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 delay-75 transform ${
                isVisible[0] ? 'translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : '-translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-orange-400/10
                  to-70% to-neutral-900/40 shadow-xl shadow-orange-500/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/tf.webp" alt="TensorFlow" width={40} height={40} />
              </div>
              <span className="text-zinc-200 text-sm mt-1">TensorFlow</span>
            </div>
            {/* OpenCV Icon */}
            <div ref={(el) => (languageRefs.current[0] = el)}
              className={`transition-transform duration-700 transform ${
                isVisible[0] ? 'translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : '-translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
              }`}>
              <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-cyan-400/10
                  to-70% to-neutral-900/40 shadow-xl shadow-teal-500/20 aspect-square justify-center items-center flex w-24 h-24">
                <Image src="/opencv.webp" alt="OpenCV" width={45} height={45} />
              </div>
              <span className="text-zinc-200 text-sm mt-1">OpenCV</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resume Box */}
      <div className="flex justify-center mt-12 text-zinc-300 my-48">
        <section className="flex flex-col justify-start w-1/2 h-full">
        {/* Experience Section */}
          <h1 className="border-b-2 text-3xl text-center">Experience</h1>
          <div className="flex items-center mt-2">
            <span className="font-bold text-xl">Electrical Calibration and Software Engineer</span>
            <span className="flex ml-auto">Pylon Electronics | October 2023 - September 2024</span>
          </div>
          <ul className="list-disc ml-8">
            <li>Developed a machine vision software with GUI for inputting and outputting digital screen readouts</li>
            <li>Implemented a calibration algorithm for a digital multimeter</li>
            <li>Designed a PCB for a digital multimeter</li>
          </ul>
          
          <div className="flex items-center mt-2">
            <span className="font-bold text-xl">Instructor</span>
            <span className="flex ml-auto">LABS | June 2020 - September 2021</span>
          </div>
          <ul className="list-disc ml-8">
            <li>Tutored secondary and Bachelor level students for IB, SAT, TOEFL, and Engineering courses</li>
            <li>Achieved 95% student pass rate by developing a comprehensive IB lesson curriculum</li>
            <li>Collaborated with parents to provide updates and strategies for continued learning</li>
          </ul>

          <div className="flex items-center mt-2">
            <span className="font-bold text-xl">Researcher</span>
              <span className="flex ml-auto">Sungkyunkwan University | October 2018 - January 2019</span>
            </div>
            <ul className="list-disc ml-8">
              <li>Cultivated microorganism within microbiology lab</li>
              <li>Discusssed project progress and shared insights with research team by participating in weekly meetings</li>
              <li>Collaborated with senior researchers for data analysis and result interpretation</li>
            </ul>

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
  </>
  );
}