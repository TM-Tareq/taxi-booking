import { Link2 } from "lucide-react";

const Navbar2 = () => {
    return (
        <>
        <nav className="shadow-md px-6 py-2.5 mb-0 flex justify-between items-center mx-auto" id="nav">
            <div className="flex flex-1 ml-9 justify-center md:justify-start items-center">
                <img src="./../images/project-logo-3.png" alt="" className="h-16 w-auto" />
            </div>
            
            <div className="hidden md:flex gap-7 space-x-4 ml-6 text-xl">
                <a href="#nav" className="text-gray-700 hover:text-[#2463eb] font-medium transition">Home</a>
                <a href="#about-us" className="text-gray-700 hover:text-[#2463eb] font-medium transition">About Us</a>
                <a href="#services" className="text-gray-700 hover:text-[#2463eb] font-medium transition">Services</a>
                <a href="#footer" className="text-gray-700 hover:text-[#2463eb] font-medium transition">Contact</a>
            </div>

            <div className="ml-125 text-xl font-semibold text-[#00A3D1]">
                <p>
                    Phone: +393275933303
                </p>
                <p>
                    Mail: ahammediqbal7@gmail.com
                </p>
            </div>
            {/* <Link2 /> */}

        </nav>
        </>
    )
}

export default Navbar2;

