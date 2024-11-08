export default function About() {
    const sectionHeader = "text-xl underline mt-8 mb-3";
    
    return(
    <div>
        <div className="flex bg-gradient-to-b from-stone-100 to-gray-400 p-6 flex-col mt-16 w-full justify-center">
            <div className="ml-16">
                <h1 className="text-xs underline">Home  /   About</h1>
                <h4 className="text-xl">About</h4>
                <h3 className="mt-1">Introduction</h3>
            </div>
        </div>

        <div className="flex flex-col mx-24 font-sans text-white">
            <section className="text-xl border-b border-solid mt-8 mb-3">I am...</section>
                <div className="text-xl">
                    <p>A 6th year Electrical Engineering Student at University of British Columbia. I value the convenience</p>
                    <p>and effciency brought by engineering. I am specialized in machine learning, IoT and Home Integration.</p>
                </div>
            <section className="text-xl border-b border-solid mt-8 mb-3">Goal</section>
                <div className="text-xl">
                    <p>My goal is to make people's lives easier by making them able to live their lives by doing less things</p>
                    <p>by harnessing the power of automation. More technology are coming out everyday, at an</p>
                    <p>unbelievable pace in this day and age and each one of them add endless possibilities to do tasks in</p>
                    <p>more efficient ways.</p>
                </div>
            <section className="text-xl border-b border-solid mt-8 mb-3">FAQ</section>
                <div className="text-xl ml-5">
                    <p className="my-3 italic">Q: What do you do when you are stuck at a problem?</p>
                    <p className="mt-3 ml-7">I often go head in at the problem, and I do extensive research to resolve any issue I face in the way.</p>
                    <p className="ml-7">Even when it takes a longer time, I try to conquer the problem and fully understand the solution so</p>
                    <p className="mb-3 ml-7">that I can learn valuable skills that I can leverage in the future. This personally, is the best way to learn.</p>
                    <p className="mt-14 italic">Q: What inspires you?</p>
                    <p className="my-3 ml-7">A: As an engineer's nature, I always think about efficiency in the back of my head. "Can this be more</p>
                    <p className="my-3 ml-7">optimized?" The questions of how to make things faster and require less maintenance inspires my creativity.</p>
                    <p className="mt-14 italic">Q: What is your favorite color?</p>
                    <p className="my-3 ml-7">A: Red</p>
                    <p className="mt-14 italic">Q: What is your favorite food?</p>
                    <p className="my-3 ml-7">A: Shawarma</p>
                    <p className="mt-14 italic">Q: What is your favorite hobby?</p>
                    <p className="mt-3 mb-32 ml-7">A: Realizing my ideas</p>
                </div>
        </div>
    </div>
    )
}