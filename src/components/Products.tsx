import { useState } from "react";
import test from "../assets/CrownFuneral_Logo_100mm.jpg";
import placeholderLogo from "../assets/LOGO_CIRCLE.png";
import Services from "./Services";

const products = [
  {
    id: 1,
    name: "Crown Funeral",
    description:
      "Crown Funeral offers dignified and compassionate funeral services to the South African community. We provide accessible, comprehensive funeral and financial solutions, ensuring peace of mind during life's toughest moments. Our holistic care extends to health and mental support for the grieving, delivered with respect, integrity, and a focus on affordability. At Crown Funeral, we stand as a pillar of strength, committed to your well-being through every challenge.",
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

const ProductCard = ({ product }: { product: any }) => {
  const [expanded, setExpanded] = useState(false);
  const shortDescription = product.description.split(".")[0] + ".";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 hover:z-0 flex flex-col h-full">
      <div className="flex-grow">
        <img
          src={product.logo}
          alt={`${product.name} logo`}
          className="w-20 h-14 object-contain mb-4"
        />
        <h2 className="text-xl font-bold mb-2 text-darkGreen">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm mb-2">
          {expanded ? product.description : shortDescription}
        </p>
      </div>
      {product.description !== shortDescription && (
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

const Products = () => {
  return (
    <>
      <section className="flex-grow flex flex-col  bg-slate-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-darkGreen mb-4 text-3xl font-bold">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Services />
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Products;
