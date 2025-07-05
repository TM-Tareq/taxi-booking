import { FaRegUserCircle } from "react-icons/fa";
import "./navbar.css";
import SearchBar from "./SearchBar";
import { FaUtensils } from "react-icons/fa";
import Links from "./Links";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white px-6 py-2 flex justify-between items-center w-[92%] mx-auto">
        <div className="flex items-center p-4">
          <FaUtensils className="text-[#0BE58A] text-2xl mr-2" />
          <h1 className="text-xl font-bold text-black">Recipe Calories</h1>
        </div>
        <Links />
        <SearchBar />
        <div className="bg-[#0BE58A] rounded-full inline-block p-2">
          <FaRegUserCircle className="text-4xl" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* <div className='flex'>
          <Search size={18} />
          <span>Search</span>
          <input type="text" placeholder='search' />
          <FaRegUserCircle />
        </div> */
}
