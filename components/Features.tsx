import { BrainCog, Globe, Lightbulb, Package2, Palette, Rocket } from "lucide-react";
import { Card, CardDescription, CardHeader } from "./ui/card";

const Features = () => {
    return (
        <section>
            {/* Heading */}
            <div className="flex flex-col items-center text-center py-10 gap-3 md:gap-5 md:py-16 px-4">
                <h2 className="text-3xl font-bold md:text-4xl">Why CodeCraft?</h2>
                <p className="text-gray-500 dark:text-gray-300 max-w-2xl md:text-xl">
                    CodeCraft gives you the resources, inspiration, and structure to grow as a frontend developer.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map(({ Icon, title, description }, idx) => (
                        <Card key={idx} className="flex p-4">
                            <CardHeader className="flex items-center gap-3 p-0">
                                <Icon size={32} aria-hidden="true" focusable="false" />
                                <h3 className="text-lg font-semibold">{title}</h3>
                            </CardHeader>
                            <CardDescription className="text-start px-0 pt-2 text-sm text-gray-600 dark:text-gray-300">
                                {description}
                            </CardDescription>
                        </Card>
                    ))}
                </div>
            </div>

            <p className="text-gray-500 dark:text-gray-300 text-balance text-center mt-15 px-4 md:text-xl max-w-3xl mx-auto">
                Whether you're prepping for job interviews, portfolio reviews, or just want to get better, this is the place to start building with purpose.
            </p>
        </section>
    );
};

// Feature list
const features = [
    {
        Icon: Globe,
        title: "Real World Projects",
        description: "Build real-world inspired interfaces, from landing pages to dashboards and e-commerce UIs.",
    },
    {
        Icon: BrainCog,
        title: "Progressive Challenges",
        description: "Tackle progressively harder challenges to develop problem-solving confidence.",
    },
    {
        Icon: Palette,
        title: "Design Assets",
        description: "Use ready-made color palettes and font pairings to stay focused on structure and code.",
    },
    {
        Icon: Lightbulb,
        title: "Helpful Resources",
        description: "Get access to curated learning materials to help with accessibility, responsiveness, and performance.",
    },
    {
        Icon: Package2,
        title: "Modern Workflows",
        description: "Practice working with reusable components and modern workflows (Tailwind, React, etc.).",
    },
    {
        Icon: Rocket,
        title: "Build a Portfolio",
        description: "Build a portfolio with projects that showcase both your design eye and coding chops.",
    },
];

export default Features;
