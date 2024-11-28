import { forwardRef } from 'react';

const ResumeCard = forwardRef(({ company, title, duration, responsibilities, isVisible }, ref) => {
    const handleMouseMove = (e) => {
        const target = e.currentTarget;
        if (!target) return;

        const { offsetWidth: width, offsetHeight: height } = target;
        const { offsetX, offsetY } = e.nativeEvent;

        // Normalize mouse position
        const rotateX = ((offsetY / height) - 0.5) * -5; // Adjust tilt intensity
        const rotateY = ((offsetX / width) - 0.5) * 5;

        // Calculate light position
        const lightX = (offsetX / width) * 100; // Percentage of width
        const lightY = (offsetY / height) * 100; // Percentage of height

        // Apply transform and gradient effect
        target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        target.style.background = `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.1))`;
    };

    const handleMouseLeave = (e) => {
        const target = e.currentTarget;
        if (!target) return;

        // Reset transform and gradient
        target.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        target.style.background = 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.1))';
    };

    return (
        <div
            ref={ref}
            className={`flex w-96 h-52 justify-center items-center backdrop-blur-lg rounded-xl shadow-lg border border-white/20 p-6 my-2 transition-transform duration-300 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-48'
            }`}
            style={{ background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.1))' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="z-10 text-white pointer-events-none">
                <div className="flex flex-row justify-center items-end">
                    <span className="font-bold text-2xl">{company} |&nbsp;</span>
                    <span className="text-lg">{title}</span>
                </div>
                <div className="text-center italic text-sm">{duration}</div>
                <div className="mt-4">
                    <ul className="list-disc pl-5 space-y-2">
                        {responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
});

ResumeCard.displayName = 'ResumeCard';

export default ResumeCard;