const Hero2 = () => {
  return (
    <>
      <section className="bg-[#FCFDFE] border-none mt-0 px-6 md:px-8">
        <div className="flex mt-16 w-full">
          {/* text */}
          <div>
            <div className="md:w-1/2 text-center md:text-left w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"><span className="color-[#2463EB]">Elegance </span> And Comfort in Motion</h1>
              <p className="mt-6 text-lg text-gray-600">
                Car rental with driver for comfortable, safe and luxury travel. choone excellence for every trip!
              </p>
            </div>
            <div className="mt-6 md:w-1/2">
  <div className="flex flex-col md:flex-row gap-4">
    <a
      href="#services"
      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition text-center"
    >
      Discover Our Services
    </a>
    <a
      href="#services"
      className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-blue-300 transition text-center"
    >
      Contact Us
    </a>
  </div>
</div>
          </div>

            {/* image */}
            <div className="md:w-full">
                <img src="./../images/header.jpeg" 
                alt="" 
                className="w-full h-auto rounded-xl object-cover shadow-lg"
                />
            </div>

        </div>
      </section>
    </>
  );
};

export default Hero2;
