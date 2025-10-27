import React, { useState } from "react";

const initialInvoices = [
  {
    id: 1,
    number: "INV-001",
    client: "John Doe",
    amount: 500,
    status: "Paid",
    dueDate: "2025-10-01",
  },
  {
    id: 2,
    number: "INV-002",
    client: "Alice Brown",
    amount: 1200,
    status: "Pending",
    dueDate: "2025-10-10",
  },
  {
    id: 3,
    number: "INV-003",
    client: "Bob Lee",
    amount: 750,
    status: "Overdue",
    dueDate: "2025-09-20",
  },
  {
    id: 4,
    number: "INV-004",
    client: "Jane Smith",
    amount: 950,
    status: "Paid",
    dueDate: "2025-09-25",
  },
];

const ReportPage = () => {
  const [invoices] = useState(initialInvoices);
  const [filterStatus, setFilterStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredInvoices = invoices.filter((inv) => {
    const invDate = new Date(inv.dueDate);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    const statusMatch = filterStatus ? inv.status === filterStatus : true;
    const dateMatch = (!start || invDate >= start) && (!end || invDate <= end);
    return statusMatch && dateMatch;
  });

  const totalInvoices = invoices.length;
  const totalPaid = invoices.filter((i) => i.status === "Paid").length;
  const totalPending = invoices.filter((i) => i.status === "Pending").length;
  const totalOverdue = invoices.filter((i) => i.status === "Overdue").length;
  const totalAmount = invoices.reduce((sum, i) => sum + i.amount, 0);

  const statusColors = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Overdue: "bg-red-100 text-red-700",
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Reports</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <div className="text-gray-500">Total Invoices</div>
          <div className="text-xl font-bold">{totalInvoices}</div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <div className="text-gray-500">Paid</div>
          <div className="text-xl font-bold">{totalPaid}</div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <div className="text-gray-500">Pending</div>
          <div className="text-xl font-bold">{totalPending}</div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <div className="text-gray-500">Overdue</div>
          <div className="text-xl font-bold">{totalOverdue}</div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white shadow rounded-lg p-4 mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div>
          <label className="text-sm font-medium">Status</label>
          <select
            className="ml-2 border rounded-md p-2"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Start Date</label>
          <input
            type="date"
            className="ml-2 border rounded-md p-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium">End Date</label>
          <input
            type="date"
            className="ml-2 border rounded-md p-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Export Report
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Invoice #</th>
              <th className="p-3">Client</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((inv) => (
              <tr key={inv.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3 font-medium">{inv.number}</td>
                <td className="p-3">{inv.client}</td>
                <td className="p-3">${inv.amount}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[inv.status]
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="p-3">{inv.dueDate}</td>
              </tr>
            ))}

            {filteredInvoices.length === 0 && (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Total Amount */}
      <div className="mt-4 text-right text-lg font-semibold">
        Total Amount: ${filteredInvoices.reduce((sum, i) => sum + i.amount, 0)}
      </div>
    </div>
  );
};

export default ReportPage;
