import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectCardContainer() {
    const [currentIndex, setCurrentIndex] = useState(1); // Index of the centered card
    const projects = [
        { id: 1,
                title: "Ark Mod",
                description: `A series of mods for the game ARK: Survival Evolved developed on Unreal Engine 4.<br /><br />
                    The mods have generated over 20,000 total downloads on Steam Community Workshop.<br /><br />
                    ARK Dev Kit, a modified version of the Unreal Engine 4 
                    editor that is specifically designed for creating mods for ARK: Survival Evolved, was used for production.`,
                images: ["/ArkMod1.png"],
                link: "https://github.com/raeditio/ARK-Mods"
        },
        { id: 2,
            title: "TorchVision",
            description: "This utilizes the ability of PyTorch to identify 7-segment displays and extract the digits from them.",
            images: ["/21.84.png"],
            link: "https://github.com/raeditio/TorchVision"
        },
        { id: 3,
            title: "SmartDesk",
            description: `This project uses an ESP32 to add a smart home usability to my standing desk.<br /><br />
                Matter-SDK was used to connect the desk to the Home ecosystem.<br /><br />
                For simplicity, an ESP32 devkit was used, connected to the inside panel of the desk using a PH2.0 connector.`,
            images: [],
        },
        { id: 4,
            title: "Transit App",
            description: "Currently developing an app that integrates and enhances the functionality of various transit APIs, including Uber and Lyft.",
            images: [],
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative flex flex-col items-center">
            <div className="relative flex justify-center w-full h-512">
                {projects.map((project, index) => {
                    // Calculate position classes based on the current index
                    const isCenter = index === currentIndex;
                    const position =
                        isCenter
                            ? "z-10 scale-125"
                            : index === (currentIndex - 1 + projects.length) % projects.length
                            ? "-translate-x-56 z-5 scale-100"
                            : index === (currentIndex + 1) % projects.length
                            ? "translate-x-56 z-5 scale-100"
                            : "translate-x-0 -translate-y-12 z-0 scale-75 opacity-50";

                    return (
                        <div
                            key={project.id}
                            className={`absolute transition-transform duration-700 ease-in-out transform ${position} ${
                                !isCenter ? "blur-sm" : "blur-none"
                                }`
                            }
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                images={project.images}
                                link={project.link}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center gap-256 mt-8 z-20 -translate-y-96">
                <button
                    onClick={handlePrev}
                    className="flex justify-center items-center -translate-y-80 backdrop-blur-lg
                        p-4 w-12 h-10 rounded-xl shadow-md shadow-zinc-700 bg-zinc-400 text-gray-100 text-3xl"
                    aria-label="Previous project"
                >
                    {"<"}
                </button>
                <button
                    onClick={handleNext}
                    className="flex justify-center items-center -translate-y-80 backdrop-blur-lg
                        p-4 w-12 h-10 rounded-xl shadow-md shadow-zinc-700 bg-zinc-400 text-gray-100 text-3xl"
                    aria-label="Next project"
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}
