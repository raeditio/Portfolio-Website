import { useEffect, useRef, useState } from 'react';

export default function ProjectCards(projectsVisible) {
    const [positions, setPositions] = useState(['left', 'center', 'right']);
    
      const projectStyles = {
        left: {
            transform: 'translateX(90px) skewY(-3deg)',
            zIndex: 1,
        },
        center: {
            transform: 'translateY(-30px)',
            zIndex: 10,
            perspective: '1000px',
        },
        right: {
            transform: 'translateX(-90px) skewY(3deg)',
            zIndex: 1,
        },
      };
    
      const filterStyles = {
        left: {
          filter: 'blur(3px)',
        },
        center: {
          filter: 'none',
        },
        right: {
          filter: 'blur(3px)',
        },
      }; 

    return (
        <div
            className="flex justify-center relative mt-20 mb-96 gap-8"
            >
            {['Project 1', 'TorchVision', 'Project 3'].map((title, index) => (
                <div
                key={index}
                className={`flex justify-start backdrop-blur-lg rounded-xl shadow-md shadow-zinc-700 border
                    border-white/20 w-128 h-128 my-8 transition-left duration-700 ease-out
                    ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
                style={{
                    ...projectStyles[positions[index]],
                    background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1.0), rgba(0, 0, 0, 0.1))",
                }}
                >
                <div
                    key={index}
                    className={`w-9/10 h-auto ${projectsVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                    ...filterStyles[positions[index]],
                    }}>
                    <h1 className="text-zinc-100 text-2xl border-b-2 w-full h-10 m-4">{title}</h1>
                </div>
                </div>
            ))}
        </div>
    );
}