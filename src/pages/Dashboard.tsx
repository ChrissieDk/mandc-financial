import React, { useState, useEffect } from "react";
import { CommissionEntry } from "../Types";
import CommissionTable from "../components/ComissionTable";
import { PDFViewer } from "@react-pdf/renderer";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import PdfDocGenerate from "../components/PdfDocGenerate";

// Create styles for PDF

const Dashboard: React.FC = () => {
  const [commissions, setCommissions] = useState<CommissionEntry[]>([]);
  const [showPdfModal, setShowPdfModal] = useState(false);

  useEffect(() => {
    // Fetch mock data
    const fetchCommissionData = () => {
      const mockData: CommissionEntry[] = [
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
        {
          REGION: "LIBCO-PE",
          BROKERAGE: "Randmore Investments CC",
          POLICY_NUMBER: "1151982573",
          PH_SURNAME: "MHLONGO",
          LOAD_DATE: "2013/03/04",
          ORIGINAL_PAYMOD: "G - Stop Order",
          POLICY_STATUS: "ACTIVE",
          PREMIUM: 150,
          SETTLEMENT_DATE: "2013/03/10",
          COMISSION_DESCRIPTION: "First Year Commission",
          AMOUNT_DUE: 120,
          COMM_TYPE: "First Year",
        },
      ];

      setCommissions(mockData);
    };

    fetchCommissionData();
  }, []);

  const totalCommission = commissions.reduce(
    (sum, commission) => sum + commission.AMOUNT_DUE,
    0
  );
  const uniqueBrokerages = [...new Set(commissions.map((c) => c.BROKERAGE))];

  // PDF Document component

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Commission Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="text-3xl font-bold text-green-600">
          R {totalCommission.toFixed(2)}
        </p>
        <p className="text-gray-600">Total Commission</p>
        <p className="mt-2">Number of Brokerages: {uniqueBrokerages.length}</p>
        <button
          onClick={() => setShowPdfModal(true)}
          className="mt-4 bg-darkGreen text-white px-4 py-2 rounded hover:bg-green-600 hover:text-black transition-colors"
        >
          View PDF Report
        </button>
      </div>
      <CommissionTable commissions={commissions} />

      {showPdfModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full h-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Commission Report PDF</h2>
              <button
                onClick={() => setShowPdfModal(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex-grow">
              <PDFViewer width="100%" height="100%">
                <PdfDocGenerate
                  commissions={commissions}
                  totalCommission={totalCommission}
                  uniqueBrokerages={uniqueBrokerages}
                />
              </PDFViewer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
