import { Copyright } from "lucide-react";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <section className=" px-3 text-lg md:px-5 flex flex-col md:flex-row md:justify-between py-5">
            <div className="flex">
                <p className="flex gap-1 text-gray-500 dark:text-gray-300">CodeCraft - <Copyright className="relative top-0.75" size={18} /> {date}</p>
            </div>
            <div className="md:flex md:gap-5">
                <p><a href="#" className="hover:border-b-2 hover:border-white">Home</a></p>
                <p><a href="#" className="hover:border-b-2 hover:border-white">Project</a></p>
                <p><a href="#" className="hover:border-b-2 hover:border-white">FAQ</a></p>
            </div>
        </section>
    )
}

export default Footer;