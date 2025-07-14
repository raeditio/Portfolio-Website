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
            <a href="/Ryan Jung_Resume.pdf" download="Ryan Jung_Resume.pdf" className="resume-download-button">Download Resume</a>

            <div className="resume-container">
                <header className="resume-header">
                    <h1>Ryan Jung</h1>
                    <div className="resume-contact-container flex flex-row justify-center items-center text-lg gap-2 border-b-2 border-b-white print:border-b-gray-500">
                        <p>Vancouver, BC, Canada | {' '}</p>
                        <Link href="https://ryankwjung.com" className="text-sky-300 underline">ryankwjung.com</Link> | {' '}
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
                    <h2>Summary</h2>
                    <p>
                        Software Engineer with hands-on experience in computer vision, embedded systems, and autonomous robotics. 
                        Built full-stack web apps and custom tools using React, Node.js, and Python, alongside ROS-based navigation systems and machine learning pipelines. 
                        Adept at rapid prototyping, cross-disciplinary problem solving, and translating complex requirements into efficient, working systems.
                    </p>
                </section>

                <section className="resume-section">
                    <h2>Technical Skills</h2>
                    <p><strong>Languages:</strong> Python, C++, TypeScript, JavaScript, SQL, C</p>
                    <p><strong>Frameworks & Libraries:</strong> React, Node.js, Express, OpenCV, TensorFlow, PyTorch</p>
                    <p><strong>Tools & Systems:</strong> ROS, PX4, MAVROS, Git, Docker, Linux, SolidWorks</p>
                    <p><strong>Concepts:</strong> SLAM, RGB-D Vision, Embedded Systems, REST APIs, CI/CD, Computer Vision</p>
                </section>

                <section className="resume-section">
                    <h2>Experience</h2>
                    <div className="resume-experience">
                        <div className="resume-experience-header">
                            <h3>Software Engineer</h3>
                            <p>Pylon Electronics | October 2023 - September 2024</p>
                        </div>
                        <ul>
                            <li>Built a Python-based machine vision GUI, reducing manual screen reading time by 70%</li>
                            <li>Automated calibration procedures using VBA, eliminating repetitive tasks and lowering technician workload by 95%</li>
                            <li>Boosted torque calibration speed by 40% by deploying Bluetooth-enabled automation over the Serial Port Protocol</li>
                            <li>Designed a SolidWorks-based tensiometer calibrator, cutting cost by 60% and increasing accuracy</li>
                        </ul>
                    </div>

                    {/* <div className="resume-experience">
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
                    </div> */}
                </section>

                <section className="resume-section">
                    <h2>Projects</h2>

                    <div className="resume-project">
                        <div className="resume-project-header">
                            <h3>Autonomous RGB-D Drone (Icon Drone)</h3>
                            <p><Link href="https://github.com/raeditio/ELEC491_TL101" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">Link</Link> | UBC & Icon Lab | January 2025 - Present</p>
                        </div>
                        <ul>
                            <li>Led a team of 4 as project organizer to develop a 6" drone with SLAM-based navigation for HVAC inspection</li>
                            <li>Designed a custom PCB for sensor fusion and control, improving flight stability by 30% and streamlining data acquisition</li>
                            <li>Streamlined real-time video and depth streaming over WiFi to ground station</li>
                            <li>Integrated ORB-SLAM3 with Depth Anything V2 to generate RGB-D data, improving power efficiency by 40%</li>
                            <li>Enabled autonomous navigation via MAVROS + FUEL with &lt;0.5m positional error</li>
                        </ul>
                    </div>

                    <div className="resume-project">
                        <div className="resume-project-header">
                            <h3>TensorOCR – Intelligent Screen Data Extractor</h3>
                            <p>Pylon Electronics | August 2024 - September 2024</p>
                        </div>
                        <ul>
                            <li>Reduced manual data entry workload by 40% by designing a computer vision OCR system using OpenCV and Python</li>
                            <li>Enhanced data extraction accuracy by 25% through a custom-trained TensorFlow model optimized for numeric display patterns</li>
                            <li>Integrated a LLM API to parse and contextualize extracted values, boosting data reliability and enabling modular deployment</li>
                        </ul>
                    </div>

                    {/* <div className="resume-project">
                        <div className="resume-project-header">
                            <h3>Matter-Enabled Smart Desk</h3>
                            <p>April 2024 - August 2024</p>
                        </div>
                        <ul>
                            <li>Developed IoT control hardware on ESP32 for a motorized standing desk</li>
                            <li>Improved user accessibility by 40% by integrating Matter protocol for cross-platform interoperability</li>
                            <li>Integrated with Apple HomeKit for Siri control</li>
                        </ul>
                    </div> */}

                    <div className="resume-project">
                        <div className="resume-project-header">
                            <h3>Unreal Engine 4 – Steam Workshop Mods</h3>
                            <p><Link href="https://steamcommunity.com/workshop/filedetails/?id=3036797917" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">Link</Link> | August 2023 - Present</p>
                        </div>
                        <ul>
                            <li>Created and maintained a suite of Unreal Engine 4 mods, achieving 53,000+ downloads and with a 4.8/5 average user rating.</li>
                            <li>Released regular feature updates and patches based on community feedback, improving user retention and engagement by 50%</li>
                            <li>Enhanced mod compatibility across different environments and engines, reducing user-reported conflicts by 85%</li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>Education</h2>
                    <div className="resume-bullets flex flex-row justify-between items-center">
                        <h3>Bachelor of Applied Science in Electrical Engineering</h3>
                        <p>University of British Columbia, Vancouver | Expected Graduation - 2025</p>
                    </div>
                        <ul>
                            <li>Relevant Coursework: Data Structures & Algorithms, Embedded Systems, Machine Learning, Deep Learning, Computer Vision, Control Systems</li>
                        </ul>
                </section>

                <section className="resume-section">
                    <h2>Certifications & Memberships</h2>
                    <div className="resume-bullets flex flex-row justify-between items-center">
                        <li>UBC Engineering Co-op Program</li>
                        <p>September 2023 - Present</p>
                    </div>
                    <div className="resume-bullets flex flex-row justify-between items-center">
                        <li>Engineers and Geoscientists British Columbia</li>
                        <p>September 2021 - Present</p>
                    </div>
                </section>
            </div>
        </>
    );
}