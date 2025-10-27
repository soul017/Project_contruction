import React, { useState } from "react";

const SuppliersPage = () => {
  // Initial suppliers
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "Raj Kumar",
      company: "RK Materials",
      email: "raj@rk.com",
      phone: "+91 9876543210",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Sharma Cement",
      email: "priya@cement.com",
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
    company: "",
    email: "",
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
      company: "",
      email: "",
      phone: "",
      status: "Active",
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleEdit = (supplier) => {
    setFormData(supplier);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Delete Supplier
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this supplier?")) {
      setSuppliers(suppliers.filter((s) => s.id !== id));
    }
  };

  // Save Supplier
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setSuppliers(
        suppliers.map((s) => (s.id === formData.id ? { ...formData } : s))
      );
    } else {
      const newSupplier = { ...formData, id: Date.now() };
      setSuppliers([...suppliers, newSupplier]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Suppliers</h2>
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          + Add Supplier
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Company</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr
                key={supplier.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium">{supplier.name}</td>
                <td className="p-3">{supplier.company}</td>
                <td className="p-3">{supplier.email}</td>
                <td className="p-3">{supplier.phone}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      supplier.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {supplier.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => handleEdit(supplier)}
                    className="text-blue-600 hover:underline mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(supplier.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {suppliers.length === 0 && (
              <tr>
                <td colSpan="6" className="p-3 text-center text-gray-500">
                  No suppliers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-4">
              {isEditing ? "Edit Supplier" : "Add New Supplier"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-md p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-md p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-md p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-md p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-md p-2 text-sm"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  {isEditing ? "Update Supplier" : "Save Supplier"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuppliersPage;
