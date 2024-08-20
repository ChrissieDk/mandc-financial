import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/AdobeStock_330780507.jpeg";
import image2 from "../assets/AdobeStock_479298638.jpeg";
import image3 from "../assets/AdobeStock_583765649.jpeg";
import image4 from "../assets/AdobeStock_654692114.jpeg";
import backgroundSvg from "../assets/opaque green.png";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-darkGreen text-white flex items-center relative min-h-screen"
      style={{
        backgroundImage: `url(${backgroundSvg})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-8  lg:py-0">
        {/* Left Section: 2/3 of the space on large screens, full width on small screens */}
        <div className="w-full lg:w-2/3 lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Premier Financial Consulting and Advisory Services
          </h1>

          <p className="mb-8">
            At M&C Financial Services, we leverage over 30 years of expertise to
            empower businesses across South Africa with tailored financial
            consulting and broker management solutions.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* <button className="border-2 border-brightGreen text-brightGreen font-bold py-2 px-4 rounded hover:bg-brightGreen hover:text-black">
              Talk to us
            </button> */}
            {/* change the button up top to link via Link to the contact us page  */}
            <Link
              to="/contact-us"
              className="border-2 border-brightGreen text-brightGreen font-bold py-2 px-4 rounded hover:bg-brightGreen hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Section: Masonry Layout on large screens, stacked on small screens */}
        <div className="w-full lg:w-1/3 grid grid-cols-12 grid-rows-6 gap-4">
          <div className="col-span-8 row-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={image1}
              alt="Main image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={image2}
              alt="Second image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={image3}
              alt="Third image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-8 row-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={image4}
              alt="Fourth image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
