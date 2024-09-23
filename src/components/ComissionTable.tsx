import React from "react";
import { CommissionEntry } from "../Types";

interface CommissionTableProps {
  commissions: CommissionEntry[];
}

const CommissionTable: React.FC<CommissionTableProps> = ({ commissions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-left ">
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
          {commissions.map((record, index) => (
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
  );
};

export default CommissionTable;
