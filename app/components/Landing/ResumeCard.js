import { forwardRef } from 'react';

const ResumeCard = forwardRef(({ company, title, duration, responsibilities, isVisible }, ref) => {
    return (
        <div
            ref={ref}
            className={`flex w-96 h-56 justify-center items-center bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 p-6 my-2 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
        >
            <div className="z-10 text-white">
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

// Assign a display name for debugging
ResumeCard.displayName = 'ResumeCard';

export default ResumeCard;