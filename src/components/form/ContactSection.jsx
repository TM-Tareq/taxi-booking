import React from "react";

const ContactUs = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg border border-gray-300 p-10 max-w-md w-full text-center relative">
        <h2 className="text-4xl font-bold text-black mb-6">Contact Us</h2>

        {/* Decorative line */}
        <div className="text-red-500 text-2xl mb-8">⌇⌇⌇</div>

        {/* Phone Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
          <p className="text-red-600 mt-1">+123 456 7890</p>
        </div>

        {/* Email Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900">Email</h3>
          <p className="text-red-600 mt-1">example@mail.com</p>
          <p className="text-red-600">support@mail.com</p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Location</h3>
          <p className="text-red-600 mt-1">
            123 Street Name, ZIP 12345, City (Country)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
