import React from "react";
// import imageSrc from "../assets/about-us-image.png"; // Replace with your actual image path
import logo from "../assets/LOGO_BLACK.png";
import image1 from "../assets/AdobeStock_330780507.jpeg";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-slate-100 text-black py-16 px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Executive Summary Section */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
            <img
              src={logo}
              alt="Executive Summary"
              className="rounded-xl shadow-xl p-2 "
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl font-bold mb-4 text-darkGreen">
              Executive Summary
            </h2>
            <p className="mb-4">
              M&C Financial Services (PTY) LTD led by Perry Fagan, encompasses
              extensive knowledge and experience in the financial services
              industry that is be extremely valuable in the business model.
            </p>
            <p>
              Perry John Fagan is the Director and Key Individual of the FSP, in
              support of his staff and management team guide the recruitment,
              appointment, training, and development of all representatives
              consulting on M&C Financial Services (PTY) LTD.
            </p>
          </div>
        </div>

        {/* Description of Business Section */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-16">
            <h2 className="text-3xl font-bold mb-4 text-darkGreen">
              Description of Business
            </h2>
            <p className="mb-4">
              M&C Financial Service's principal mission is to become the premier
              broker services management consulting agency that provides
              high-class advisory service to every client.
            </p>
            <p>
              By offering the highest level of advisory and consulting services,
              M&C Financial Services will have a positive impact on client base
              to ensure a long-term retention rate.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={image1}
              alt="Business Description"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Rationale Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-darkGreen">Rationale</h2>
          <p>
            In our experience of 30+ years in distribution, we have found that
            trust is the single most important element in dealing with
            intermediaries who are active in the traditional and transitional
            market segments.
          </p>
          <p>
            As we are a known and trusted entity, we are able to easily interact
            with these intermediaries and establish the trust relationship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
