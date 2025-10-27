import React, { useState } from "react";

const Projects = () => {
  // Initial projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Highway Expansion",
      client: "ABC Infra",
      status: "On Track",
      deadline: "2025-10-30",
      budget: "$1,200,000",
    },
    {
      id: 2,
      name: "Residential Towers",
      client: "XYZ Developers",
      status: "Delayed",
      deadline: "2025-12-15",
      budget: "$850,000",
    },
  ]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    client: "",
    status: "On Track",
    deadline: "",
    budget: "",
  });

  // Get badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "On Track":
        return "bg-green-100 text-green-700";
      case "Delayed":
        return "bg-red-100 text-red-700";
      case "Ongoing":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-gray-200 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Open Add Modal
  const handleAdd = () => {
    setFormData({
      id: null,
      name: "",
      client: "",
      status: "On Track",
      deadline: "",
      budget: "",
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleEdit = (project) => {
    setFormData(project);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Delete Project
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  // Save (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update existing
      setProjects(
        projects.map((p) => (p.id === formData.id ? { ...formData } : p))
      );
    } else {
      // Add new
      const newProject = { ...formData, id: Date.now() };
      setProjects([...projects, newProject]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          + Add Project
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Project Name</th>
              <th className="p-3">Client</th>
              <th className="p-3">Status</th>
              <th className="p-3">Deadline</th>
              <th className="p-3">Budget</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium">{project.name}</td>
                <td className="p-3">{project.client}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="p-3">{project.deadline}</td>
                <td className="p-3">{project.budget}</td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => handleEdit(project)}
                    className="text-blue-600 hover:underline mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {projects.length === 0 && (
              <tr>
                <td colSpan="6" className="p-3 text-center text-gray-500">
                  No projects available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-4">
              {isEditing ? "Edit Project" : "Add New Project"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Project Name
                </label>
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
                <label className="block text-sm font-medium">Client</label>
                <input
                  type="text"
                  name="client"
                  value={formData.client}
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
                  <option>On Track</option>
                  <option>Ongoing</option>
                  <option>Delayed</option>
                  <option>Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded-md p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  placeholder="$0.00"
                  className="w-full mt-1 border rounded-md p-2 text-sm"
                />
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
                  {isEditing ? "Update Project" : "Save Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
