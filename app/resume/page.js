'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Resume() {
    function printWithFilename(filename) {
        // Save the original title
        const originalTitle = document.title;
        
        // Set the document title to the desired filename
        document.title = filename;
        
        // Trigger the print dialog
        window.print();
        
        // Restore the original title after a short delay
        setTimeout(() => {
          document.title = originalTitle;
        }, 1000);
      }

    return (
        <>
            {/* <button
                className="flex justify-center items-center fixed right-5 top-24 w-[170px] mx-auto p-2.5 bg-[#0073b1] text-white text-center no-underline whitespace-nowrap rounded-full hover:bg-[#005f8b]"
                onClick={() => printWithFilename("Ryan Jung_Resume")}>
                Download as PDF
            </button> */}
            <a href="/Ryan Jung_Resume.pdf" download="Ryan Jung_Resume.pdf" className="flex justify-center items-center fixed right-5 top-24 w-[170px] mx-auto p-2.5 bg-[#0073b1] text-white text-center no-underline whitespace-nowrap rounded-full hover:bg-[#005f8b] print:hidden">Download Resume</a>

            <div className="w-[70%] min-w-[1080px] my-[100px] mx-auto font-pretendard text-white leading-relaxed print:m-[30px] print:mx-6 print:font-serif">
                <header className="text-center mb-5 print:mb-0">
                    <h1 className="text-[28px] text-white/85 mb-1 print:text-[36px] print:text-[#04206d]">Ryan (Kyungwon) Jung</h1>
                    <div className="flex flex-row justify-center items-center text-lg gap-2 border-b-2 border-b-white print:border-b-gray-500 print:font-size-[20px] print:text-[#555] print:mr-[72px]">
                        {/* <p>경기도 고양시 덕양구 | {' '}</p> */}
                        {/* <Link href="https://ryankwjung.com" target="_blank" rel="noopener noreferrer" className="text-[#719af1] hover:underline">ryankwjung.com</Link> | {' '} */}
                        {/* <Link href="mailto:ryankwjung@gmail.com" className="text-[#719af1] hover:underline">ryankwjung@gmail.com</Link> | {' '} */}
                        {/* <Link href="tel:010-9082-1758" className="text-[#719af1] hover:underline">010.9082.1758</Link> | {' '} */}
                        <Link href="https://github.com/raeditio" className="flex flex-row gap-x-1 text-[#719af1] hover:underline">
                            <Image src="/github.svg" alt="GitHub" width="16" height="16" className="mb-1 print:invert" />
                            /raeditio 
                        </Link>
                        <p>|</p>
                        <span className="flex items-center gap-x-1">
                            <Image src="/linkedin.png" alt="LinkedIn" width="20" height="20" className="mb-1" />
                            <Link href="https://www.linkedin.com/in/ryanjung0" target="_blank" rel="noopener noreferrer" className="text-[#719af1] hover:underline">
                                in/ryanjung0
                            </Link>
                        </span>
                    </div>
                    <div className="flex flex-row gap-x-2 invisible absolute top-4 right-12 print:visible">
                        <span className="print:text-black mt-12">Website:</span>
                        <Image src="/portfolio.png" alt="Portfolio" width="64" height="64" />
                    </div>
                </header>

                <section className="print:mr-[72px]">
                    <h2 className="text-[22px] mb-2.5 text-[#719af1] border-b border-white/85 pb-1 font-bold print:text-[26px] print:print:border-b-gray-700">
                        Summary
                    </h2>
                    <p className="print:text-gray-900 print:text-[20px]">
                        Software Engineer with hands-on experience in computer vision, embedded systems, and autonomous robotics. Built full-stack web
                        apps and custom tools using React, Node.js, and Python, alongside ROS-based navigation systems and machine learning pipelines.
                        Adept at rapid prototyping, cross-disciplinary problem solving, and translating complex requirements into efficient, working systems.
                    </p>
                </section>

                <section className="print:mr-[72px]">
                    <h2 className="text-[22px] mb-2.5 text-[#719af1] border-b border-white/85 pb-1 font-bold print:text-[26px] print:print:border-b-gray-700">
                        Skills
                    </h2>
                    <div className="items-center print:text-gray-900 print:text-[20px]">
                        <p><strong>Languages:</strong> Python, C++, TypeScript, JavaScript, SQL, C, VBA</p>
                        <p><strong>Frameworks & Libraries:</strong> PyTorch, Tensorflow, OpenCV, Pandas, numpy, Roboflow, React, Node.js, Express</p>
                        <p><strong>Tools & Systems:</strong> Git, Docker, Linux, ROS, PX4, MAVROS</p>
                        <p><strong>Concepts:</strong> Computer Vision, Embedded Systems, SLAM, RGB-D Vision, REST APIs, CI/CD</p>
                    </div>
                </section>

                <section className="print:mr-[72px]">
                    <h2 className="text-[22px] mb-2.5 text-[#719af1] border-b border-white/85 pb-1 font-bold print:text-[26px] print:print:border-b-gray-700">
                        Work Experience
                    </h2>
                    <div>
                        <div className="flex flex-row justify-between items-center print:text-black">
                            <h3 className="text-[18px] font-bold print:text-[22px]">
                                Software Engineer
                            </h3>
                            <div className="flex flex-row items-center gap-x-1">
                                <Link href="https://pylonelectronics.com/wescancal" target="_blank" rel="noopener noreferrer" className="text-[#719af1] hover:underline print:text-[18px] print:italic">
                                    Pylon Electronics
                                </Link>
                                <p>| 2023.10 - 2024.09</p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-y-1 ml-2 gap-y-1 list-disc list-inside print:text-gray-900 print:text-[20px]">
                            <li>Developed automated maintenance software for aviation equipment, reducing turnover time by 98%</li>
                            <li>Developed a Deep Learning OCR system to process data from devices without communication ports</li>
                            <li>Developed custom models using TensorFlow to improve data extraction accuracy by 25%</li>
                            <li>Integrated Google Cloud LLM API to parse and contextualize extracted values for data reliability</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex flex-row justify-between items-center print:text-black">
                            <h3 className="text-[18px] font-bold print:text-[22px]">
                                Software Engineer
                            </h3>
                            <div className="flex flex-row items-center gap-x-1">
                                <Link href="https://skydweller.ca" target="_blank" rel="noopener noreferrer" className="text-[#719af1] hover:underline print:text-[18px] print:italic">
                                    Skydweller Technologies
                                </Link>
                                <p>| 2025.09 - 2025.10</p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-y-1 ml-2 gap-y-1 list-disc list-inside print:text-gray-900 print:text-[20px]">
                            <li>Developed software for autonomous drones used to clean ships and military vessels</li>
                            <li>Developed pipeline for integrating autonomous navigation software with 3D simulation software</li>
                        </ul>
                    </div>
                </section>

                <section className="print:mr-[72px]">
                    <h2 className="text-[22px] mb-2.5 text-[#719af1] border-b border-white/85 pb-1 font-bold print:text-[26px] print:print:border-b-gray-700">
                        Projects
                    </h2>
                    <div>
                        <div className="flex flex-row justify-between items-center print:text-black">
                            <h3 className="text-[18px] font-bold print:text-[22px]">
                                7-Segment Screen Data Extraction System
                            </h3>
                            <div className="flex flex-row items-center gap-x-1">
                                <Link href="https://github.com/raeditio/TorchVision" target="_blank" rel="noopener noreferrer" className="text-[#719af1] hover:underline print:text-[18px] print:italic">
                                    TorchVision
                                </Link>
                                <p>| 2024.11</p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-y-1 ml-2 gap-y-1 list-disc list-inside print:text-gray-900 print:text-[20px]">
                            <li>Developed a computer vision OCR model using PyTorch</li>
                            <li>Established dataset using Roboflow, streamlining the model development process compared to previous methods</li>
                            <li>Improved model accuracy by 15% through hyperparameter tuning and data augmentation</li>
                            <li>Reduced development time by 20% through transfer learning using Faster R-CNN</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex flex-row justify-between items-center print:text-black">
                            <h3 className="text-[18px] font-bold print:text-[22px]">
                                Edge Computing Powered Autonomous Drone
                            </h3>
                            <div className="flex flex-row items-center gap-x-1">
                                <Link href="https://ubc.ca" target="_blank" rel="noopener noreferrer" className="text-[#719af1] hover:underline print:text-[18px] print:italic">
                                    UBC
                                </Link>
                                <p> & </p>
                                <Link href="https://intelconstructlab.github.io" target="_blank" rel="noopener noreferrer" className="text-[#719af1] hover:underline print:text-[18px] print:italic">
                                    ICON Lab@Columbia
                                </Link>
                                <p> | 2025.1 - 2025.08</p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-y-1 ml-2 gap-y-1 list-disc list-inside print:text-gray-900 print:text-[20px]">
                            <li>Project Leader and Software Lead for the 6-inch SLAM-based HVAC inspection drone project</li>
                            <li>Designed custom PCB for sensor fusion and control, improving flight stability by 30%</li>
                            <li>Utilized Raspberry Pi and edge computing, reducing the existing drone size by 43% and weight by 51%</li>
                            <li>Implemented a DL RGB distance model, achieving 40% power improvement and 30% weight reduction</li>
                            <li>Implemented autonomous navigation through MAVROS + FUEL, achieving a location error of less than 0.5m</li>
                            <li>Containerized the system using Docker to enhance deployment consistency and efficiency</li>
                        </ul>
                    </div>
                </section>

                <section className="print:mr-[72px]">
                    <h2 className="text-[22px] mb-2.5 text-[#719af1] border-b border-white/85 pb-1 font-bold print:text-[26px] print:print:border-b-gray-700">
                        Education
                    </h2>
                    <div>
                        <div className="flex flex-row justify-between items-center print:text-black">
                            <h3 className="text-[18px] font-bold print:text-[22px]">
                                ECE Electrical Engineering
                            </h3>
                            <div className="flex flex-row items-center gap-x-1">
                                <Link href="https://ubc.ca" target="_blank" rel="noopener noreferrer" className="text-[#719af1] hover:underline print:text-[18px] print:italic">
                                    University of British Columbia (UBC)
                                </Link>
                                <p>| 2025</p>
                            </div>
                        </div>
                    </div>
                </section>                
            </div>
        </>
    );
}