import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function LanguageBox() {
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
            {/* Computer Languages Section */}
            <div className='flex justify-center mt-32'>
                {/* Encasing */}
                <div className="flex flex-col items-center justify-center w-full sm:w-384 h-96 p-2 rounded-2xl bg-gradient-to-b from-gray-900 to-black overflow-hidden">
                    <div className="flex flex-row items-center justify-center border-b-2 border-neutral-800 -translate-x-5">
                        {/* HTML Icon */}
                        <div ref={(el) => (languageRefs.current[0] = el)}
                            className={`transition-transform duration-700 transform ${
                            isVisible[0] ? '-translate-x-1/8 opacity-100 flex flex-col items-center justify-center p-2 hover:-translate-y-4 hover:ease-out hover:delay-0 hover:duration-150' : 'translate-x-96 scale-75 opacity-0 flex flex-col items-center justify-center p-2'
                            }`}>
                            <div className="border-2 border-stone-700 p-5 rounded-xl bg-gradient-to-t from-orange-500/10
                                to-70% to-neutral-900/40 shadow-xl shadow-orange-400/20 aspect-square justify-center items-center flex w-24 h-24">
                            <Image src="/html5.svg" alt="HTML5" width={50} height={50} />
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
        </>
    )
}