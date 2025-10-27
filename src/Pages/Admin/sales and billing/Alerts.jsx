import React, { useEffect, useState } from "react";
import { Bell, ArrowLeft } from "lucide-react"; // <-- Import ArrowLeft

const challans = [
  { id: 1, company: "ABC Pvt Ltd", tdsDueDate: "2025-10-05", filingDeadline: "2025-10-10", challanStatus: "Unpaid" },
  { id: 2, company: "XYZ Ltd", tdsDueDate: "2025-09-28", filingDeadline: "2025-10-05", challanStatus: "Paid" },
  { id: 3, company: "TechNova Systems", tdsDueDate: "2025-10-08", filingDeadline: "2025-10-15", challanStatus: "Unpaid" },
  { id: 4, company: "Green Valley Farms", tdsDueDate: "2025-09-25", filingDeadline: "2025-10-02", challanStatus: "Paid" },
  { id: 5, company: "FutureTech Labs", tdsDueDate: "2025-10-18", filingDeadline: "2025-10-25", challanStatus: "Unpaid" },
  { id: 6, company: "NextGen Corp", tdsDueDate: "2025-09-20", filingDeadline: "2025-09-27", challanStatus: "Paid" },
  { id: 7, company: "Sunrise Traders", tdsDueDate: "2025-10-03", filingDeadline: "2025-10-10", challanStatus: "Unpaid" },
  { id: 8, company: "OceanBlue Logistics", tdsDueDate: "2025-10-01", filingDeadline: "2025-10-08", challanStatus: "Unpaid" },
  { id: 9, company: "Prime Builders", tdsDueDate: "2025-10-22", filingDeadline: "2025-10-29", challanStatus: "Paid" },
  { id: 10, company: "Digital Works Ltd", tdsDueDate: "2025-10-15", filingDeadline: "2025-10-22", challanStatus: "Unpaid" },
  { id: 11, company: "EcoEnergy Pvt Ltd", tdsDueDate: "2025-09-30", filingDeadline: "2025-10-07", challanStatus: "Paid" },
  { id: 12, company: "Skyline Industries", tdsDueDate: "2025-10-20", filingDeadline: "2025-10-27", challanStatus: "Unpaid" },
  { id: 13, company: "BlueChip Finance", tdsDueDate: "2025-09-18", filingDeadline: "2025-09-25", challanStatus: "Paid" },
  { id: 14, company: "Nova Retailers", tdsDueDate: "2025-10-25", filingDeadline: "2025-11-01", challanStatus: "Unpaid" },
  { id: 15, company: "QuickMart", tdsDueDate: "2025-09-15", filingDeadline: "2025-09-22", challanStatus: "Paid" },
  { id: 16, company: "Global Textiles", tdsDueDate: "2025-10-28", filingDeadline: "2025-11-04", challanStatus: "Unpaid" },
  { id: 17, company: "Infinity Motors", tdsDueDate: "2025-09-22", filingDeadline: "2025-09-29", challanStatus: "Paid" },
  { id: 18, company: "Delta Developers", tdsDueDate: "2025-10-12", filingDeadline: "2025-10-19", challanStatus: "Unpaid" },
  { id: 19, company: "UrbanSpaces Interiors", tdsDueDate: "2025-10-06", filingDeadline: "2025-10-13", challanStatus: "Paid" },
  { id: 20, company: "Vertex Analytics", tdsDueDate: "2025-10-16", filingDeadline: "2025-10-23", challanStatus: "Unpaid" },
  { id: 21, company: "Crystal Technologies", tdsDueDate: "2025-09-27", filingDeadline: "2025-10-04", challanStatus: "Paid" },
  { id: 22, company: "Apex Logistics", tdsDueDate: "2025-10-09", filingDeadline: "2025-10-16", challanStatus: "Unpaid" },
];

export default function Alert() {
  const [challanData, setChallanData] = useState(challans);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  // Function to handle the back navigation
  const handleGoBack = () => {
    window.history.back();
  };

  function handleSendAlert(companyName, status) {
    alert("Alert sent for " + companyName + " - Status: " + status);
  }

  function isOverdue(dueDate) {
    // Current time is 2025-10-13
    const today = new Date("2025-10-13"); // Using a static current time for consistent overdue calculation
    const due = new Date(dueDate);
    return due < today;
  }

  let unpaidCount = 0;
  let overdueCount = 0;
  for (let i = 0; i < challanData.length; i++) {
    if (challanData[i].challanStatus === "Unpaid") {
      unpaidCount++;
      if (isOverdue(challanData[i].tdsDueDate)) {
        overdueCount++;
      }
    }
  }

  return (
    <div className="h-100% bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button Added Here */}
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 mb-8 text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Go Back</span>
        </button>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            TDS Challan Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Manage your tax deductions at source efficiently</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
            <div className="text-gray-500 text-sm font-semibold uppercase mb-2">Total Challans</div>
            <div className="text-3xl font-bold text-gray-900">{challanData.length}</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600 hover:shadow-lg transition-shadow">
            <div className="text-gray-500 text-sm font-semibold uppercase mb-2">Unpaid Challans</div>
            <div className="text-3xl font-bold text-red-600">{unpaidCount}</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600 hover:shadow-lg transition-shadow">
            <div className="text-gray-500 text-sm font-semibold uppercase mb-2">Overdue Challans</div>
            <div className="text-3xl font-bold text-orange-600">{overdueCount}</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white sticky top-0 z-10">
                  <th className="p-4 text-left text-sm font-bold uppercase">Company</th>
                  <th className="p-4 text-left text-sm font-bold uppercase">TDS Due Date</th>
                  <th className="p-4 text-left text-sm font-bold uppercase">Filing Deadline</th>
                  <th className="p-4 text-left text-sm font-bold uppercase">Status</th>
                  <th className="p-4 text-left text-sm font-bold uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
                {challanData.map((item, index) => {
                  const overdue = item.challanStatus === "Unpaid" && isOverdue(item.tdsDueDate);
                  return (
                  <tr 
                    key={item.id} 
                    className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${overdue ? 'bg-red-50' : ''}`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                          {item.company.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-800">{item.company}</span>
                        {overdue && (
                          <span className="px-2 py-1 rounded-md bg-orange-100 text-orange-800 font-bold text-xs border border-orange-300">
                            OVERDUE
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{item.tdsDueDate}</td>
                    <td className="p-4 text-gray-700">{item.filingDeadline}</td>
                    <td className="p-4">
                      {item.challanStatus === "Unpaid" ? (
                        <span className="px-3 py-1 rounded-md bg-red-100 text-red-800 font-semibold text-sm border border-red-200">
                          Unpaid
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-md bg-green-100 text-green-800 font-semibold text-sm border border-green-200">
                          Paid
                        </span>
                      )}
                    </td>
                    <td className="p-4">
                      {overdue && (
                        <button
                          onClick={() => handleSendAlert(item.company, item.challanStatus)}
                          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold text-sm shadow-sm hover:shadow-md transition-all"
                        >
                          <Bell size={16} />
                          Send Alert
                        </button>
                      )}
                  </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-600">
          <p className="text-base">
            Displaying all <span className="font-bold text-blue-600">{challanData.length}</span> challans
            {unpaidCount > 0 && (
              <span className="ml-4 text-red-600 font-bold">
                🚨 {unpaidCount} alerts pending
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}