import { Mountain } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between  px-2 py-3 fixed top-0 left-0 right-0 z-50 bg-white/70 text dark:bg-black/70 backdrop-blur-lg dark:text-white">
            <div className="flex gap-1 md:gap-2 items-center font-bold">
                <Mountain />
                <h2 className="text-xl"><Link href="/">CodeCraft</Link></h2>
            </div>
            <div className="flex gap-3 md:gap-5 transition items-center">
                <p className="hover:border-b-1 hover:border-white cursor-pointer">Home</p>
                <p className="hover:border-b-1 hover:border-white cursor-pointer">Project</p>
                <p className="hover:border-b-1 hover:border-white cursor-pointer">FAQ</p>
                <ModeToggle />
            </div>
        </nav>
    );
}
export default Navbar;