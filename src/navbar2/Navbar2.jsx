import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="shadow-md px-6 py-2.5 flex justify-between items-center mx-auto" id="nav">
        {/* Logo */}
        <div className="flex flex-1 ml-3 justify-start items-center">
          <img src="./../images/project-logo-3.png" alt="" className="h-14 w-auto" />
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex items-center gap-7 text-xl mr-50">
          <a href="#nav" className="text-gray-700 hover:text-[#2463eb] font-medium transition">Home</a>
          <a href="#about-us" className="text-gray-700 hover:text-[#2463eb] font-medium transition">About Us</a>
          <a href="#services" className="text-gray-700 hover:text-[#2463eb] font-medium transition">Services</a>
          <a href="#footer" className="text-gray-700 hover:text-[#2463eb] font-medium transition">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="hidden md:block text-xl font-semibold text-[#00A3D1] ml-6">
          <p>Phone: +393446603111</p>
          <p>Mail: iqballavoro@gmail.com</p>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-3 text-center shadow-md">
          <a href="#nav" className="block text-gray-700 hover:text-[#2463eb] text-lg font-medium">Home</a>
          <a href="#about-us" className="block text-gray-700 hover:text-[#2463eb] text-lg font-medium">About Us</a>
          <a href="#services" className="block text-gray-700 hover:text-[#2463eb] text-lg font-medium">Services</a>
          <a href="#footer" className="block text-gray-700 hover:text-[#2463eb] text-lg font-medium">Contact</a>
          <div className="pt-2 border-t text-[#00A3D1] text-sm">
            <p>Phone: +393275933303</p>
            <p>Mail: ahammediqbal7@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar2;
