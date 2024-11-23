export default function TimelineWrapper({ children }) {
    return (
        <div className="relative flex flex-col items-start pl-16 -translate-x-8">
            {/* Timeline Bar */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-orange-500"></div>

            {/* Cards */}
            <div className="flex flex-col gap-8">{children}</div>
        </div>
    );
}
