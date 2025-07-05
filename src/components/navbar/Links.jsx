const Links = () => {
    return (
        <>
        <div>
            <ul className=" gap-[4vw] hidden space-x-6 md:flex">
              <li className="text-gray-700 hover:text-[#0BE58A] font-medium transition cursor-pointer">Home</li>
              <li className="text-gray-700 hover:text-[#0BE58A] font-medium transition cursor-pointer">Recipes</li>
              <li className="text-gray-700 hover:text-[#0BE58A] font-medium transition cursor-pointer">About</li>
              <li className="text-gray-700 hover:text-[#0BE58A] font-medium transition cursor-pointer">Search</li>
            </ul>
          </div>
        </>
    )
}

export default Links;