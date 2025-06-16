import { Button } from "./ui/button";

const Hero = () => {
    return (


        <div className="flex flex-col text-center gap-3 px-4 z-20 mt-20 md:mt-50 mb-10">
            <h1 className="text-4xl font-bold md:text-6xl pb-4">
                Become a better frontend developer.
            </h1>
            <p className="text-gray-500 dark:text-gray-300 md:text-xl text-balance">
                Take your frontend skills to the next level by recreating real websites from real companies.
            </p>
            <p className="text-gray-500 dark:text-gray-300 md:text-xl text-balance pt-2">
                The perfect type of practice for developers of all skill levels. Are you up for the challenge?
            </p>
            <div className="flex gap-3 place-content-center my-5 md:pt-3 md:gap-10">
                <Button className="md:text-xl py-5">View Projects</Button>
                <Button className="md:text-xl py-5" variant="secondary">Learn More</Button>
            </div>
        </div>
    );
};

export default Hero;
