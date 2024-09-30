import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const RepatriationPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-darkGreen text-3xl font-bold mb-6 text-center">
        Repatriation
      </h1>

      <section className="mb-8">
        <p className="mb-4">
          Repatriation takes care of all the logistics and associated costs
          involved in returning your loved one to their final resting place
          within South Africa. From transportation to documentation, we ensure a
          smooth process, offering peace of mind during a difficult time.
        </p>
        <p className="mb-4">
          This benefit covers the repatriation of mortal remains of a Life
          Assured to the funeral home or parlour chosen by the claimant, closest
          to the place of burial.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p className="font-bold flex items-center">
            <FaExclamationCircle className="mr-2" /> Important:
          </p>
          <p>
            This benefit is for use within the Republic of South Africa. The
            place of death and burial must both be in South Africa.
          </p>
        </div>
      </section>

      {/* <section className="mb-8">
        <h2 className="text-darkGreen text-2xl font-semibold mb-4">
          Claiming Your Benefit: A Simple Guide
        </h2>
        <p className="mb-2">To claim, simply:</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            Contact us at{" "}
            <a href="tel:0873721094" className="text-blue-600 hover:underline">
              087 372 1094
            </a>{" "}
            or email{" "}
            <a
              href="mailto:claims@crownfuneral.co.za"
              className="text-blue-600 hover:underline"
            >
              claims@crownfuneral.co.za
            </a>
          </li>
          <li>Our team will send you a claim form to complete</li>
        </ol>
      </section> */}

      <section className="mb-8">
        <h2 className="text-darkGreen text-2xl font-semibold mb-4">
          Required Documents
        </h2>
        <ul className="list-disc list-inside">
          <li>Certified copies of the claimant or beneficiary's ID</li>
          <li>Death certificate</li>
          <li>Completed BI-1663/BI-1680 or DHA-1663/DHA-1680 form</li>
          <li>Proof of beneficiary's bank account details</li>
          <li>Police report (in case of accidental death)</li>
        </ul>
      </section>

      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
        <p className="font-bold flex items-center">
          <FaExclamationCircle className="mr-2" /> Important:
        </p>
        <p>
          Ensure you have nominated an eligible beneficiary to facilitate a
          smooth claims process. If no beneficiary is allocated, proceeds will
          be paid to the member's estate.
        </p>
      </div>

      {/* <footer className="mt-8 text-center text-sm text-gray-600">
        <p>For any inquiries, please contact us:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="tel:0873721094"
            className="flex items-center hover:text-blue-600"
          >
            <FaPhone className="mr-1" /> 087 372 1094
          </a>
          <a
            href="mailto:claims@crownfuneral.co.za"
            className="flex items-center hover:text-blue-600"
          >
            <FaEnvelope className="mr-1" /> claims@crownfuneral.co.za
          </a>
        </div>
      </footer> */}
    </div>
  );
};

export default RepatriationPage;
