import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, description, images = [], link }) {
    return (
        <div className="flex justify-center relative mt-28 mb-96 gap-8">
            <div
                className="flex flex-col justify-start backdrop-blur-lg rounded-xl shadow-lg shadow-gray-800 border
                    border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-128 h-192 p-6 transition-transform duration-700 ease-out"
            >
                <div className="text-white">
                    {/* Title */}
                    <div className="flex flex-col justify-start mb-4">
                        {link ? (
                            <Link
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-2xl text-blue-300 hover:text-blue-400 underline transition-colors duration-300"
                            >
                                {title}
                            </Link>
                        ) : (
                            <span className="font-bold text-2xl text-blue-300">{title}</span>
                        )}
                    </div>
                    {/* Description */}
                    <div className="text-md text-gray-300 leading-relaxed mb-6">
                        <span
                            dangerouslySetInnerHTML={{ __html: description }}
                        ></span>
                    </div>
                    {/* Images */}
                    {Array.isArray(images) && images.length > 0 && (
                        <div className="flex flex-wrap gap-4">
                            {images.map((imgSrc, index) => (
                                <Image
                                    key={index}
                                    src={imgSrc}
                                    alt={`${title} - image ${index + 1}`}
                                    width={300}
                                    height={300}
                                    className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
