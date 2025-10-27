import React, { useState } from "react";
import { FaUsers, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const ClientsPage = () => {
  // Initial clients
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      company: "ABC Infra",
      phone: "+91 9876543210",
      status: "Active",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      company: "XYZ Developers",
      phone: "+91 9123456789",
      status: "Inactive",
    },
  ]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    company: "",
    phone: "",
    status: "Active",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Open Add Modal
  const handleAdd = () => {
    setFormData({
      id: null,
      name: "",
      email: "",
      company: "",
      phone: "",
      status: "Active",
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleEdit = (client) => {
    setFormData(client);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Delete Client
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter((c) => c.id !== id));
    }
  };

  // Save Client
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setClients(
        clients.map((c) => (c.id === formData.id ? { ...formData } : c))
      );
    } else {
      const newClient = { ...formData, id: Date.now() };
      setClients([...clients, newClient]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center">
          <FaUsers className="text-indigo-600 mr-4 text-4xl" />
          Clients
        </h2>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          <FaPlus />
          Add Client
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gradient-to-r from-indigo-50 to-blue-50">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Name</th>
              <th className="p-4 font-semibold text-gray-700">Email</th>
              <th className="p-4 font-semibold text-gray-700">Company</th>
              <th className="p-4 font-semibold text-gray-700">Phone</th>
              <th className="p-4 font-semibold text-gray-700">Status</th>
              <th className="p-4 font-semibold text-gray-700 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr
                key={client.id}
                className={`border-b border-gray-100 hover:bg-indigo-50 transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-4 font-medium text-gray-900">{client.name}</td>
                <td className="p-4 text-gray-700">{client.email}</td>
                <td className="p-4 text-gray-700">{client.company}</td>
                <td className="p-4 text-gray-700">{client.phone}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      client.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {client.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleEdit(client)}
                    className="text-indigo-600 hover:text-indigo-800 mr-3 p-2 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-100 transition-colors duration-200"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {clients.length === 0 && (
              <tr>
                <td colSpan="6" className="p-8 text-center text-gray-500">
                  No clients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaUsers className="text-indigo-600 mr-3" />
              {isEditing ? "Edit Client" : "Add New Client"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter client name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isEditing ? "Update Client" : "Save Client"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsPage;
