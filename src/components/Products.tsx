import { useState } from "react";
import test from "../assets/CrownFuneral_Logo_100mm.jpg";
import placeholderLogo from "../assets/LOGO_CIRCLE.png";
import Services from "./Services";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Crown Funeral",
    description:
      "Crown Funeral offers dignified and compassionate funeral services to the South African community. We provide accessible, comprehensive funeral and financial solutions, ensuring peace of mind during life's toughest moments. Our holistic care extends to health and mental support for the grieving, delivered with respect, integrity, and a focus on affordability. At Crown Funeral, we stand as a pillar of strength, committed to your well-being through every challenge.",
    logo: test,
    slug: "",
  },
  {
    id: 2,
    name: "Repatriation",
    description:
      "Repatriation takes care of all the logistics and associated costs involved in returning your loved one to their final resting place within South Africa. From transportation to documentation, we ensure a smooth process, offering peace of mind during a difficult time. This benefit covers the repatriation of mortal remains of a Life Assured to the funeral home or parlour chosen by the claimant, closest to the place of burial. Important: This benefit is for use within the Republic of South Africa. The place of death and burial must both be in South Africa.",
    logo: placeholderLogo,
    slug: "repatriation",
  },
  {
    id: 3,
    name: "Health Coach",
    description:
      "Our health coach takes a holistic approach to transforming your habits. With daily check-ins, you can enhance your routine, incorporating regular exercise and increased water intake, making healthier choices overall.",
    logo: placeholderLogo,
    slug: "health-coach",
  },
  {
    id: 4,
    name: "Symptom Check",
    description:
      "Your AI-powered health bot. We have included a smart digital assistant to enhance personalised healthcare. Our bot provides quick and reliable symptom assessments, potential causes and recommended solutions. It helps you take control of your health and well-being with just a few clicks, available to you 24 hours a day.",
    logo: placeholderLogo,
    slug: "symptom-check",
  },
  {
    id: 5,
    name: "FeelBetterFast Pharmacy Voucher",
    description:
      "A voucher redeemable at your local FeelBetterFast network pharmacy, this service efficiently addresses minor health concerns, as well as offering preventative tests and vaccinations so that you can take control of your health. Important: The voucher is generated only for Amber or Red Outcomes from the Symptom Checker. If the outcome is Amber or Red you will be prompted to contact our Call Centre. An agent can issue you with a FeelBetterFast voucher.",
    logo: placeholderLogo,
    slug: "feel-better-fast",
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
      <div className="flex justify-between items-center mt-4">
        {product.description !== shortDescription && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-darkGreen text-sm font-semibold hover:underline focus:outline-none"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
        <Link
          to={`/products/${product.slug}`}
          className="text-darkGreen text-sm font-semibold flex items-center hover:underline"
        >
          Learn More <FaArrowRight className="ml-1" />
        </Link>
      </div>
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
    </>
  );
};

export default Products;
