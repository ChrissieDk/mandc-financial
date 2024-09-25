import React, { useState } from "react";
import { CommissionEntry } from "../Types";

interface CommissionTableProps {
  commissions: CommissionEntry[];
}

const CommissionTable: React.FC<CommissionTableProps> = ({ commissions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // You can adjust this number or make it configurable

  // Calculate the records to be displayed on the current page
  const indexOfLastRecord = currentPage * itemsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage;
  const currentRecords = commissions.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  // Calculate total pages
  const totalPages = Math.ceil(commissions.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 rounded-tl-lg">Region</th>
              <th className="px-4 py-2">Brokerage</th>
              <th className="px-4 py-2">Policy Number</th>
              <th className="px-4 py-2">Surname</th>
              <th className="px-4 py-2">Load Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Premium</th>
              <th className="px-4 py-2">Settlement Date</th>
              <th className="px-4 py-2">Commission Description</th>
              <th className="px-4 py-2">Amount Due</th>
              <th className="px-4 py-2 rounded-tr-lg">Comm Type</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((record, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2">{record.REGION}</td>
                <td className="px-4 py-2">{record.BROKERAGE}</td>
                <td className="px-4 py-2">{record.POLICY_NUMBER}</td>
                <td className="px-4 py-2">{record.PH_SURNAME}</td>
                <td className="px-4 py-2">{record.LOAD_DATE}</td>
                <td className="px-4 py-2">{record.POLICY_STATUS}</td>
                <td className="px-4 py-2">{record.PREMIUM}</td>
                <td className="px-4 py-2">{record.SETTLEMENT_DATE}</td>
                <td className="px-4 py-2">{record.COMISSION_DESCRIPTION}</td>
                <td className="px-4 py-2">{record.AMOUNT_DUE.toFixed(2)}</td>
                <td className="px-4 py-2">{record.COMM_TYPE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        <nav>
          <ul className="flex list-none">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 ${
                    currentPage === index + 1
                      ? "bg-darkGreen text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CommissionTable;
