import { useState } from "react";
import test from "../assets/LOGO_NO_BGROUND.png";
import placeholderLogo from "../assets/LOGO_CIRCLE.png";

const services = [
  {
    id: 1,
    name: "Category 1",
    description:
      "M&C Financial Services will only advise on and provide leads for products in Category 1 namely; 1. Long-Term Insurance Subcategory A.",
    logo: test,
  },
  {
    id: 2,
    name: "Coming Soon...",
    description:
      "We are working on new products to better serve you. Check back soon!",
    logo: placeholderLogo,
  },
  {
    id: 3,
    name: "Coming soon...",
    description:
      "We are working on new products to better serve you. Check back soon!",
    logo: placeholderLogo,
  },
  {
    id: 4,
    name: "Coming soon...",
    description:
      "We are working on new products to better serve you. Check back soon!",
    logo: placeholderLogo,
  },
];

const ServicesCard = ({ services }: { services: any }) => {
  const [expanded, setExpanded] = useState(false);
  const shortDescription = services.description.split(".")[0] + ".";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
      <div className="flex-grow">
        <img
          src={services.logo}
          alt={`${services.name} logo`}
          className="w-20 h-14 object-contain mb-4"
        />
        <h2 className="text-xl font-bold mb-2 text-darkGreen">
          {services.name}
        </h2>
        <p className="text-gray-600 text-sm mb-2">
          {expanded ? services.description : shortDescription}
        </p>
      </div>
      {services.description !== shortDescription && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-darkGreen text-sm font-semibold mt-2 hover:underline focus:outline-none self-start"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section className="flex-grow flex flex-col  bg-slate-100">
      <div className="container mx-auto py-8">
        <h1 className="text-darkGreen mb-4 text-3xl font-bold">Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {services.map((services) => (
            <ServicesCard key={services.id} services={services} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
