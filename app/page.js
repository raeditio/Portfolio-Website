import Image from 'next/image'

export default function Home() {
  let intro="mx-96 text-lg text-white";

  return (
    <>
      <div className="bg-sky-950 flex flex-row items-center">
        <h1 className="text-left ml-96 mt-16 text-7xl text-white">Welcome to my website!</h1>
        <Image src="/landingPage.png" alt="landing page" width={1920/2} height={1080/2} className="mt-16 flex ml-auto rounded-bl-3xl"/>
      </div>
      <div className="bg-gradient-to-b from-sky-950 to-gray-700 h-72">
        <p className={ intro }>I am a 6th year Electrical Engineering student at University of British Columbia Vancouver.</p>
        <p className={ intro }>I am a software enthusiast with a growing passion in AI, embedded systems and home IoT integration</p>
        <p className={ intro }>I am currently seeking a full-time position in software development</p>
        <p className={ intro }>Feel free to check out my projects and contact me for any inquiries</p>
        <p className={ intro }>Thank you for visiting!</p>
        <p className={ intro }>- Ryan Jung</p>
      </div>
    </>
  );
}