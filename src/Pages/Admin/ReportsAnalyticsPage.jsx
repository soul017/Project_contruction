import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaFilePdf,
  FaUpload,
  FaBell,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

const ReportsAnalyticsPage = () => {
  const data = [
    { name: "Mon", progress: 70 },
    { name: "Tue", progress: 85 },
    { name: "Wed", progress: 60 },
    { name: "Thu", progress: 90 },
    { name: "Fri", progress: 75 },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Reports & Analytics
      </h1>

      {/* Progress Dashboard */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaChartLine /> Daily Progress Dashboard
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="progress" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Alerts and Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <FaBell /> Alerts & Notifications
          </h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>2 tasks delayed beyond schedule.</li>
            <li>Inventory running low for Project A.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3">End-of-Day Summary</h2>
          <p className="text-gray-700">
            Completed 5 tasks, 2 pending due to material delays. Site B achieved
            90% milestone progress today.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white p-6 rounded-2xl shadow grid md:grid-cols-3 gap-6">
        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          <FaFilePdf /> Generate Report (PDF)
        </button>
        <button className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
          <FaUpload /> Upload Work Image
        </button>
        <button className="flex items-center justify-center gap-2 bg-yellow-600 text-white py-3 rounded-xl hover:bg-yellow-700 transition">
          <FaTasks /> Add Next Day Instructions
        </button>
      </div>
    </div>
  );
};

export default ReportsAnalyticsPage;
