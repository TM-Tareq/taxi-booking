import { Link2 } from "lucide-react";

const Navbar2 = () => {
    return (
        <>
        <nav className="shadow-md px-6 py-2.5 mb-0 flex justify-between items-center mx-auto" id="nav">
            <div className="flex flex-1 justify-center md:justify-start items-center">
                <img src="./../images/project-logo.png" alt="" className="h-16 w-auto" />
            </div>
            <div className="hidden md:flex gap-7 space-x-4 ml-6">
                <a href="#nav" className="text-gray-700 hover:text-[#2463eb] font-medium transition">Home</a>
                <a href="#about-us" className="text-gray-700 hover:text-[#2463eb] font-medium transition">About Us</a>
                <a href="#services" className="text-gray-700 hover:text-[#2463eb] font-medium transition">Services</a>
                <a href="#footer" className="text-gray-700 hover:text-[#2463eb] font-medium transition">Contact</a>
        </div>
            {/* <Link2 /> */}

        </nav>
        </>
    )
}

export default Navbar2;

