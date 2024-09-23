import React from "react";
import {
  FaExclamationCircle,
  FaGlobe,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";

const FeelBetterFastPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">
        FeelBetterFast Pharmacy Voucher
      </h1>

      <section className="mb-8">
        <p className="mb-4">
          A voucher redeemable at your local FeelBetterFast network pharmacy,
          this service efficiently addresses minor health concerns, as well as
          offering preventative tests and vaccinations so that you can take
          control of your health.
        </p>
      </section>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8">
        <p className="font-bold flex items-center">
          <FaExclamationCircle className="mr-2" /> Important:
        </p>
        <p>
          The voucher is generated only for Amber or Red Outcomes from the
          Symptom Checker. If the outcome is Amber or Red you will be prompted
          to contact our Call Centre. An agent can issue you with a
          FeelBetterFast voucher.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Use This Benefit</h2>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            Access your client zone from our website{" "}
            <a
              href="https://www.crownfuneral.co.za"
              className="text-blue-600 hover:underline"
            >
              www.crownfuneral.co.za
            </a>
          </li>
          <li className="mb-2">Click on the Symptom Check tab</li>
          <li className="mb-2">
            Answer the questions that follow, allowing Symptom Check to find a
            suitable solution to your symptoms.
          </li>
          <li className="mb-2">
            If the outcome is red, you'll be prompted to contact our call centre
            at{" "}
            <a href="tel:0873721094" className="text-blue-600 hover:underline">
              087 372 1094
            </a>
            . An agent will issue a FeelBetterFast Pharmacy Voucher.
          </li>
          <li>
            If the outcome is green, you'll be shown a list of active
            ingredients that address your symptoms.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-none">
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Addresses minor health concerns efficiently</span>
          </li>
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Offers preventative tests and vaccinations</span>
          </li>
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Redeemable at local FeelBetterFast network pharmacies</span>
          </li>
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Integrated with Symptom Checker for comprehensive care</span>
          </li>
        </ul>
      </section>

      {/* <footer className="mt-8 text-center text-sm text-gray-600">
        <p>
          For more information or to access the Symptom Checker, visit our
          website:
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.crownfuneral.co.za"
            className="flex items-center hover:text-blue-600"
          >
            <FaGlobe className="mr-1" /> www.crownfuneral.co.za
          </a>
          <a
            href="tel:0873721094"
            className="flex items-center hover:text-blue-600"
          >
            <FaPhone className="mr-1" /> 087 372 1094
          </a>
        </div>
      </footer> */}
    </div>
  );
};

export default FeelBetterFastPage;
