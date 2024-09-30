import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const HealthCoachPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-darkGreen text-3xl font-bold mb-6 text-center">
        Health Coach
      </h1>

      <section className="mb-8">
        <p className="mb-4">
          Our health coach takes a holistic approach to transforming your
          habits. With daily check-ins, you can enhance your routine,
          incorporating regular exercise and increased water intake, making
          healthier choices overall.
        </p>
      </section>

      {/* <section className="mb-8">
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
          <li className="mb-2">Click on the Health Coach tab</li>
          <li className="mb-2">
            Set daily health goals to influence your habits and create better
            habits
          </li>
          <li>
            Select health topics of interest, consume content, and complete
            challenges based on the selected topics of interest.
          </li>
        </ol>
      </section> */}

      <section className="mb-8">
        <h2 className="text-darkGreen text-2xl font-semibold mb-4">
          Key Features
        </h2>
        <ul className="list-none">
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Daily check-ins to enhance your routine</span>
          </li>
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Personalized health goals setting</span>
          </li>
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Curated health content based on your interests</span>
          </li>
          <li className="flex items-start mb-2">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <span>Challenges to help you build better habits</span>
          </li>
        </ul>
      </section>

      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8">
        <p className="font-bold flex items-center">
          <FaExclamationCircle className="mr-2" /> Important:
        </p>
        <p>
          Consistency is key to forming new habits. Make sure to check in daily
          with your Health Coach for the best results.
        </p>
      </div>

      {/* <footer className="mt-8 text-center text-sm text-gray-600">
        <p>
          For more information or to access the Health Coach, visit our website:
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

export default HealthCoachPage;
