import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <>
        <div className="flex gap-2 bg-white border border-gray-300 rounded px-4 py-2 max-w-md shadow-sm">
            <Search className="text-gray-500" size={22} />
            <input 
            type="text" 
            placeholder="search" 
            className="flex-1 outline-none text-sm"
            />
        </div>
        </>
    )
}

export default SearchBar;