import React, { useState } from "react";
import aboutSections from "../data/AboutSections";
import ImageSlider from "./ImageSlider";

const About2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/* Top Section */}
      <div className="bg-[#FAFBFC] text-center py-12 px-6 md:px-16" id="about-us">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Iqbal luxury transfer and tour  was born from a passion for excellence and the desire to offer a tailor-made transport service to those seeking comfort, punctuality and professionalism. We operate in Rome and its surroundings, offering car rental solution with driver for transfers, events and private tours. Our team of expert and courteous drivers is ready to make every trip a unique experience, guaranteeing an impeccable service with a fleet luxury vehicles  of, always cared for in the smallest details. With Iqbal luxury transfer and tour  you will travel with discretion, professionalism and maximum comfort
        </p>
      </div>

      {/* Main Section */}
      <div className="bg-[#FAFBFC] px-6 md:px-16 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Slider */}
          <ImageSlider />

          {/* Hover Info Boxes */}
          <div className="space-y-6">
            {aboutSections.map((section, index) => (
              <div
                key={index}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </h3>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600 animate-fadeIn">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
