import Image from "next/image";

export default function Profile() {
    return (
        <div className="relative rounded-full w-12 h-12 overflow-hidden bg-neutral-800">
            {/* Wrapper div with transform for position control */}
            <div className="absolute w-16 h-16 -top-12">
                <Image
                src="/profile.jpg" // Replace with your image path
                alt="Profile Picture"
                width={48} // Set fixed dimensions
                height={48}
                className="object-cover"
                />
            </div>
        </div>
    );
}