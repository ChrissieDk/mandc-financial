import React from "react";
import { FaExclamationCircle, FaCheckCircle, FaGlobe } from "react-icons/fa";

const SymptomCheckerPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-darkGreen text-3xl font-bold mb-6 text-center">
        Symptom Checker
      </h1>

      <section className="mb-8">
        <p className="mb-4">
          Your AI-powered health bot. We have included a smart digital assistant
          to enhance personalised healthcare. Our bot provides quick and
          reliable symptom assessments, potential causes and recommended
          solutions. It helps you take control of your health and well-being
          with just a few clicks, available to you 24 hours a day.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-darkGreen text-2xl font-semibold mb-4">
          How to Use
        </h2>
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
          <li>
            Answer the questions that follow, allowing Symptom Check to find a
            suitable solution to your symptoms.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-darkGreen text-2xl font-semibold mb-4">
          Key Features
        </h2>
        <ul className="list-none">
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>AI-powered health assistant</span>
          </li>
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Quick and reliable symptom assessments</span>
          </li>
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Potential causes and recommended solutions</span>
          </li>
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Available 24 hours a day</span>
          </li>
        </ul>
      </section>

      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8">
        <p className="font-bold flex items-center">
          <FaExclamationCircle className="mr-2" /> Important:
        </p>
        <p>
          While our Symptom Checker provides valuable insights, it's not a
          substitute for professional medical advice. Always consult with a
          healthcare provider for serious or persistent health concerns.
        </p>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-600">
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
        </div>
      </footer>
    </div>
  );
};

export default SymptomCheckerPage;
