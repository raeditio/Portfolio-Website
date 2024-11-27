import Image from 'next/image';

export default function ProjectCard({ title, description, image, link }) {
    return (
        <div className="flex justify-center relative mt-20 mb-96 gap-8">
            <div className="flex justify-start backdrop-blur-lg rounded-xl shadow-md shadow-zinc-700 border
                    border-white/20 w-128 h-128 my-8 transition-left duration-700 ease-out"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1.0), rgba(0, 0, 0, 0.1))",
                }}>
                <div className="w-9/10 h-auto">
                    <div className="z-10 text-white pointer-events-none">
                        <div className="flex flex-row justify-center items-end">
                            <span className="font-bold text-2xl">{title} |&nbsp;</span>
                            <span className="text-lg">{description}</span>
                        </div>
                        <div className="mt-4">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <Image src={image} alt={title} width={300} height={300} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}