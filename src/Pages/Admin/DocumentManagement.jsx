import React, { useState } from "react";
// 1️ Document Storage
function DocumentStorage() {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "ProjectPlan.pdf",
      size: "250 KB",
      type: "application/pdf",
      version: 1,
      uploadedAt: "2025-10-10",
    },
    {
      id: 2,
      name: "DrawingA.dwg",
      size: "1.2 MB",
      type: "image/dwg",
      version: 2,
      uploadedAt: "2025-10-12",
    },
  ]);

  const handleUpload = (e) => {
    const list = Array.from(e.target.files).map((f) => ({
      id: Date.now() + Math.random(),
      name: f.name,
      size: (f.size / 1024).toFixed(2) + " KB",
      type: f.type || "unknown",
      version: 1,
      uploadedAt: new Date().toISOString().slice(0, 10),
    }));
    setFiles((prev) => [...list, ...prev]);
  };

  const addNewVersion = (id) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              version: f.version + 1,
              uploadedAt: new Date().toISOString().slice(0, 10),
            }
          : f
      )
    );
  };

  return (
    <div>
      <input type="file" multiple onChange={handleUpload} className="mb-4" />
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Size</th>
            <th className="p-2 border">Version</th>
            <th className="p-2 border">Uploaded At</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {files.length === 0 && (
            <tr>
              <td colSpan={6} className="p-4 text-center">
                No files uploaded.
              </td>
            </tr>
          )}
          {files.map((f) => (
            <tr key={f.id} className="text-center">
              <td className="p-2 border">{f.name}</td>
              <td className="p-2 border">{f.type}</td>
              <td className="p-2 border">{f.size}</td>
              <td className="p-2 border">{f.version}</td>
              <td className="p-2 border">{f.uploadedAt}</td>
              <td className="p-2 border">
                <button
                  onClick={() => addNewVersion(f.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  Add new version
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 2️⃣ File Sharing
function FileSharing() {
  const [files, setFiles] = useState([{ id: 1, name: "Report.pdf" }]);
  const [shareEmail, setShareEmail] = useState("");

  const upload = (e) => {
    const list = Array.from(e.target.files).map((f) => ({
      id: Date.now() + Math.random(),
      name: f.name,
    }));
    setFiles((prev) => [...list, ...prev]);
  };

  const share = (fileId) => {
    const file = files.find((f) => f.id === fileId);
    if (!file || !shareEmail) {
      alert("Select an email and a file");
      return;
    }
    alert(`Simulated: ${file.name} shared with ${shareEmail}`);
  };

  return (
    <div>
      <input type="file" onChange={upload} className="mb-4" />
      <div className="mb-4">
        <input
          placeholder="Enter email to share with"
          value={shareEmail}
          onChange={(e) => setShareEmail(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <span className="text-sm text-gray-500">(Simulated sharing)</span>
      </div>

      <ul className="space-y-2">
        {files.length === 0 && <li className="text-gray-500">No files</li>}
        {files.map((f) => (
          <li
            key={f.id}
            className="flex items-center justify-between bg-white p-3 border rounded"
          >
            <span>{f.name}</span>
            <button
              onClick={() => share(f.id)}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Share
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 3️⃣ Blueprint Management
function BlueprintManagement() {
  const [blueprints, setBlueprints] = useState([
    {
      id: 1,
      name: "SiteLayout.png",
      preview: "https://via.placeholder.com/150",
    },
  ]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files).map((f) => ({
      id: Date.now() + Math.random(),
      name: f.name,
      preview: URL.createObjectURL(f),
    }));
    setBlueprints((prev) => [...files, ...prev]);
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf,image/*,dwg"
        onChange={handleUpload}
        multiple
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blueprints.length === 0 && (
          <div className="text-gray-500">No blueprints uploaded.</div>
        )}
        {blueprints.map((b) => (
          <div key={b.id} className="border rounded overflow-hidden">
            <div className="p-2 text-sm font-medium">{b.name}</div>
            <div className="h-48 flex items-center justify-center bg-gray-50">
              <img
                src={b.preview}
                alt={b.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4️⃣ Document Manager
function DocumentManager() {
  const [docs, setDocs] = useState([
    {
      id: 1,
      title: "Safety Manual",
      description: "Site safety procedures",
      version: 1,
      createdAt: "2025-10-14",
    },
  ]);
  const [form, setForm] = useState({ title: "", description: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addDoc = (e) => {
    e.preventDefault();
    setDocs((prev) => [
      {
        ...form,
        id: Date.now(),
        version: 1,
        createdAt: new Date().toISOString().slice(0, 10),
      },
      ...prev,
    ]);
    setForm({ title: "", description: "" });
  };

  const deleteDoc = (id) => setDocs((prev) => prev.filter((d) => d.id !== id));
  const bumpVersion = (id) =>
    setDocs((prev) =>
      prev.map((d) => (d.id === id ? { ...d, version: d.version + 1 } : d))
    );

  return (
    <div>
      <form
        onSubmit={addDoc}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short description"
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white py-2 rounded">Create</button>
      </form>

      <ul className="space-y-3">
        {docs.length === 0 && <div className="text-gray-500">No documents</div>}
        {docs.map((d) => (
          <li
            key={d.id}
            className="bg-white p-3 border rounded flex justify-between items-center"
          >
            <div>
              <div className="font-medium">
                {d.title}{" "}
                <span className="text-sm text-gray-500">v{d.version}</span>
              </div>
              <div className="text-sm text-gray-500">{d.description}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => bumpVersion(d.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                New Version
              </button>
              <button
                onClick={() => deleteDoc(d.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 5️⃣ TTPL Format Management
function TTPLFormats() {
  const FORMATS = [
    "RFI",
    "JMS",
    "DC",
    "MIR",
    "Checklist",
    "RFQ",
    "DPR",
    "DLR",
    "Other",
  ];
  const [entries, setEntries] = useState([
    { id: 1, format: "RFI", title: "RFI - 23", fileName: "RFI_23.pdf" },
  ]);
  const [form, setForm] = useState({
    format: FORMATS[0],
    title: "",
    fileName: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addEntry = (e) => {
    e.preventDefault();
    setEntries((prev) => [{ ...form, id: Date.now() }, ...prev]);
    setForm({ format: FORMATS[0], title: "", fileName: "" });
  };

  return (
    <div>
      <form
        onSubmit={addEntry}
        className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6"
      >
        <select
          name="format"
          value={form.format}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          {FORMATS.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <input
          name="fileName"
          value={form.fileName}
          onChange={handleChange}
          placeholder="File name (for demo)"
          className="border p-2 rounded"
        />
        <button className="col-span-1 md:col-span-4 bg-blue-600 text-white py-2 rounded">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {entries.length === 0 && (
          <div className="text-gray-500">No TTPL entries</div>
        )}
        {entries.map((e) => (
          <li
            key={e.id}
            className="bg-white p-3 border rounded flex justify-between"
          >
            <div>
              <div className="font-medium">
                {e.format} — {e.title}
              </div>
              <div className="text-sm text-gray-500">{e.fileName}</div>
            </div>
            <div className="text-sm text-gray-500">
              {new Date(e.id).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -----------------------------
  Main Page with Tabs
----------------------------- */

export default function DocumentManagement() {
  const [activeTab, setActiveTab] = useState("storage");

  const tabs = [
    {
      id: "storage",
      label: "Document Storage",
      component: <DocumentStorage />,
    },
    { id: "sharing", label: "File Sharing", component: <FileSharing /> },
    {
      id: "blueprints",
      label: "Blueprint Management",
      component: <BlueprintManagement />,
    },
    {
      id: "manager",
      label: "Document Manager",
      component: <DocumentManager />,
    },
    { id: "ttpl", label: "TTPL Formats", component: <TTPLFormats /> },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Document Management</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2 rounded ${
              activeTab === t.id ? "bg-blue-600 text-white" : "bg-white border"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        {tabs.find((t) => t.id === activeTab)?.component}
      </div>
    </div>
  );
}
