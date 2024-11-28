'use client'

import Link from 'next/link';
import Image from 'next/image';
import './page.css';

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
                className="resume-download-button"
                onClick={() => printWithFilename("Ryan Jung_Resume")}>
                Download as PDF
            </button> */}
            <a href="/Ryan Jung_Resume.pdf" download className="resume-download-button">Download Resume</a>

            <div className="resume-container">
                <header className="resume-header">
                    <h1>Ryan Jung</h1>
                    <div className="resume-contact-container flex flex-row justify-center items-center text-lg gap-2 border-b-2 border-b-white print:border-b-gray-500">
                        <p>Vancouver, British Columbia, Canada | {' '}</p>
                        <Link href="mailto:ryankwjung@gmail.com">ryankwjung@gmail.com</Link> | {' '}
                        <Link href="tel:604-726-1758">(604) 726-1758</Link> | {' '}
                        <Link href="https://github.com/raeditio" className="flex flex-row gap-x-1">
                            <Image src="/github.svg" alt="GitHub" width="16" height="16" className="print:invert" />
                            /raeditio 
                        </Link>
                        <p>|</p>
                        <span className="resume-linkedin-container">
                            <Image src="/linkedin.png" alt="LinkedIn" width="20" height="20" />
                            <Link href="https://www.linkedin.com/in/ryanjung0" target="_blank" rel="noopener noreferrer">
                                in/ryanjung0
                            </Link>
                        </span>
                    </div>
                </header>

                <section className="resume-section">
                    <h2>Experience</h2>
                    <div className="resume-experience">
                        <div className="resume-experience-header">
                            <h3>Electrical Calibration and Software Engineer</h3>
                            <p>Pylon Electronics | October 2023 - September 2024</p>
                        </div>
                        <ul>
                            <li>Developed a machine vision software with GUI for inputting and outputting digital screen readouts</li>
                            <li>Reduced overhead by 95% by creating VBA automated calibration procedures</li>
                            <li>Increased torque calibration efficiency by automating over Bluetooth using Serial Port Protocol</li>
                            <li>Designed and tested a cost-effective, automated tensiometer calibrator for precision testing through SolidWorks</li>
                        </ul>
                    </div>

                    <div className="resume-experience">
                        <div className="resume-experience-header">
                            <h3>Instructor</h3>
                            <p>LABS | June 2020 - September 2021</p>
                        </div>
                        <ul>
                            <li>Tutored secondary and Bachelor level students for IB, SAT, TOEFL, and Engineering courses</li>
                            <li>Achieved 95% student pass rate by developing a comprehensive IB lesson curriculum</li>
                            <li>Collaborated with parents to provide updates and strategies for continued learning</li>
                        </ul>
                    </div>

                    <div className="resume-experience">
                        <div className="resume-experience-header">
                            <h3>Researcher</h3>
                            <p>Sungkyunkwan University | October 2018 - January 2019</p>
                        </div>
                        <ul>
                            <li>Cultivated microorganisms within the microbiology lab</li>
                            <li>Discussed project progress and shared insights with the research team by participating in weekly meetings</li>
                            <li>Collaborated with senior researchers for data analysis and result interpretation</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>Projects</h2>
                    <div className="resume-project">
                        <div className="resume-project-header">
                            <h3>Computer Vision Data Extractor</h3>
                            <p>Pylon Electronics | August 2024 - September 2024</p>
                        </div>
                        <ul>
                            <li>Achieved 40% reduction in manual data entry by designing a computer vision data extractor over OpenCV</li>
                            <li>Improved data extraction precision by 25 % using machine learning algorithms with Tensorflow</li>
                            <li>Enabled extensibility with LLM API for reliable data comprehension</li>
                        </ul>
                    </div>

                    <div className="resume-project">
                        <div className="resume-project-header">
                            <h3>Matter-Enabled Smart Desk</h3>
                            <p>April 2024 - August 2024</p>
                        </div>
                        <ul>
                            <li>Developed IoT control hardware on ESP32 for a motorized standing desk</li>
                            <li>Improved user accessibility by 40% by integrating Matter protocol for cross-platform interoperability</li>
                            <li>Integrated with Apple HomeKit for Siri control</li>
                        </ul>
                    </div>

                    <div className="resume-project">
                        <div className="resume-project-header">
                            <h3>Unreal Engine 4 Steam Community Mods</h3>
                            <p><Link href="https://steamcommunity.com/workshop/filedetails/?id=3036797917" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">Mod Link</Link> | August 2023 - Present</p>
                        </div>
                        <ul>
                            <li>Generated over 25,000 downloads with positive user ratings for a suite of Unreal Engine 4 mods published Steam</li>
                            <li>Regularly published improvements and feature updates based on user feedback</li>
                            <li>Enhanced compatibility for broader environments and integration with other mods</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>Education</h2>
                    <div className="resume-bullets flex flex-row justify-between items-center">
                        <h3>Bachelor of Applied Science in Electrical Engineering</h3>
                        <p>University of British Columbia, Vancouver | Expected Graduation - 2025</p>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>Affiliations</h2>
                    <div className="resume-bullets flex flex-row justify-between items-center">
                        <li>UBC Engineering Co-Op Program</li>
                        <p>Seeking Summer 2025</p>
                    </div>
                    <div className="resume-bullets flex flex-row justify-between items-center">
                        <li>Engineers and Geoscientists British Columbia</li>
                        <p>September 2021 - Present</p>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>Skills & Interests</h2>
                    <p><strong>Skills:</strong> C, C++, Python, TensorFlow, PyTorch, OpenCV, Next.js, React.js, Node.js, Redux, SQL, HTML/JS/CSS, TypeScript, UI/UX, English, Korean</p>
                    <p><strong>Interests:</strong> AI Development, Software Innovation, IoT Integration, Swimming, Debate</p>
                </section>
            </div>
        </>
    );
}