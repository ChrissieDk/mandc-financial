import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const HealthCoachPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Health Coach</h1>

      <section className="mb-8">
        <p className="mb-4">
          Our health coach takes a holistic approach to transforming your
          habits. With daily check-ins, you can enhance your routine,
          incorporating regular exercise and increased water intake, making
          healthier choices overall.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
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
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
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
    </div>
  );
};

export default HealthCoachPage;
