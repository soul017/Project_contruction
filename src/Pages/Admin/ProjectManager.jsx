import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock Data for Projects and Status
const mockProjects = [
    { id: 'HR-A', name: 'High-Rise Tower A', client: 'City Dev Corp' },
    { id: 'HW-P3', name: 'Highway Expansion Pkg 3', client: 'Global Infra Ltd' },
];

// Mock Data for Milestones (Used in Planning Tab)
const initialMilestoneData = [
    { id: 1, milestone: '1.1 Excavation Complete', completion: 100, due: '2025-10-30', isWBS: true },
    { id: 2, milestone: '1.2 Piling & Footing', completion: 40, due: '2025-11-15', isWBS: true },
    { id: 3, milestone: '2.1 Column Erection (Floors 1-5)', completion: 0, due: '2025-12-30', isWBS: true },
    { id: 4, milestone: 'Final MEP Inspection', completion: 0, due: '2026-03-01', isWBS: false },
];

const ProjectManager = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('planning');
    const [selectedProject, setSelectedProject] = useState(mockProjects[0].id);

    // State for Milestone Updates
    const [milestoneData, setMilestoneData] = useState(initialMilestoneData);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [updateForm, setUpdateForm] = useState({
        milestoneId: '',
        completion: 0,
    });

    // Handler to process the milestone update
    const handleMilestoneUpdate = (e) => {
        e.preventDefault();
        const { milestoneId, completion } = updateForm;

        if (!milestoneId) {
            console.error("Please select a milestone.");
            return;
        }

        const newCompletion = parseFloat(completion);

        const updatedData = milestoneData.map(item => {
            if (item.id === parseInt(milestoneId)) {
                return { ...item, completion: newCompletion };
            }
            return item;
        });

        setMilestoneData(updatedData);
        setIsUpdateModalOpen(false);
        setUpdateForm({ milestoneId: '', completion: 0 });
        
        console.log(`Milestone ${milestoneId} updated to ${newCompletion}%`);
    };

    // --- Tab Content Components ---

    const PlanningAndScheduling = () => (
        <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2">Roadmap & Deadlines</h3>
            
            {/* WBS Input */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                <p className="font-semibold text-indigo-700 text-lg mb-3">Work Breakdown Structure (WBS) Tracker</p>
                <div className="text-sm space-y-2">
                    <p className="font-extrabold text-gray-900">1.0 Foundation & Basement</p>
                    {milestoneData.filter(m => m.id <= 2).map(item => (
                        <div key={item.id} className={`ml-4 p-2 rounded-lg ${item.completion === 100 ? 'bg-green-50' : 'bg-yellow-50 border border-yellow-300'}`}>
                            <p className="flex justify-between">
                                <span className="font-medium text-gray-700">{item.milestone}</span>
                                <span className={`text-sm font-bold ${item.completion === 100 ? 'text-green-700' : 'text-yellow-700'}`}>
                                    {item.completion === 100 ? '✅ 100% Complete' : `${item.completion}% Progress`}
                                </span>
                            </p>
                            {item.completion < 100 && (
                                <p className="text-xs text-red-600 mt-1">⚠️ DUE: {item.due}</p>
                            )}
                        </div>
                    ))}
                    
                    <p className="font-extrabold text-gray-900 pt-2">2.0 Superstructure (Milestone Tracking)</p>
                     {milestoneData.filter(m => m.id > 2).map(item => (
                        <div key={item.id} className={`ml-4 p-2 rounded-lg ${item.completion === 100 ? 'bg-green-50' : 'bg-yellow-50 border border-yellow-300'}`}>
                            <p className="flex justify-between">
                                <span className="font-medium text-gray-700">{item.milestone}</span>
                                <span className={`text-sm font-bold ${item.completion === 100 ? 'text-green-700' : 'text-yellow-700'}`}>
                                    {item.completion === 100 ? '✅ 100% Complete' : `${item.completion}% Progress`}
                                </span>
                            </p>
                            {item.completion < 100 && (
                                <p className="text-xs text-red-600 mt-1">⚠️ DUE: {item.due}</p>
                            )}
                        </div>
                    ))}
                </div>
                <button 
                    onClick={() => setIsUpdateModalOpen(true)}
                    className="mt-5 text-sm font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 p-2 rounded-lg"
                >
                    + Update Milestone Completion
                </button>
            </div>
            
            {/* Scheduling and Gantt Chart Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-dashed border-gray-300">
                <p className="text-gray-600 text-center font-medium">
                    [Placeholder for Project Planning, Scheduling & Gantt Chart Visualization]
                </p>
            </div>

            {/* --- Milestone Update Modal --- */}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
                        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Update Milestone Progress</h3>
                        <form onSubmit={handleMilestoneUpdate} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Select Milestone</label>
                                <select
                                    value={updateForm.milestoneId}
                                    onChange={(e) => setUpdateForm({...updateForm, milestoneId: e.target.value})}
                                    required
                                    className="w-full border border-gray-300 p-2 rounded-lg"
                                >
                                    <option value="">-- Choose Milestone --</option>
                                    {milestoneData.map(m => (
                                        <option key={m.id} value={m.id}>
                                            {m.milestone} ({m.completion}%)
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Completion Percentage</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value={updateForm.completion}
                                    onChange={(e) => setUpdateForm({...updateForm, completion: e.target.value})}
                                    required
                                    className="w-full border border-gray-300 p-2 rounded-lg text-lg font-bold"
                                />
                            </div>
                            <div className="flex justify-end space-x-3 pt-2">
                                <button 
                                    type="button" 
                                    onClick={() => setIsUpdateModalOpen(false)} 
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 font-medium"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                                >
                                    Save Progress
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* --- End Modal --- */}
        </div>
    );

    const TechnicalAndBOQ = () => (
        <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2">Design & Materials</h3>

            {/* CAD Integration / Quantity Extraction */}
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500">
                <p className="font-semibold text-blue-700 text-lg mb-3">CAD File Intelligence</p>
                <p className="text-sm text-gray-700 mb-4">
                    Import AutoCAD/Revit files to automatically extract quantities (area, volume, etc.).
                </p>
                <div className="flex justify-between items-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md transition">
                        Import Design Files (.DWG / .RVT)
                    </button>
                    <span className="text-xs text-green-700 font-medium">Last Sync: 10/24/2025</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Status: 1.2M³ of concrete successfully extracted and added to BOQ.</p>
            </div>

            {/* BOQ Management */}
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-purple-500">
                <p className="font-semibold text-purple-700 text-lg mb-3">Bill of Quantities (BOQ) Progress</p>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 border-b pb-2">
                            <th className="py-2">Item</th>
                            <th className="py-2 text-center">Progress</th>
                            <th className="py-2 text-right">Material Need</th>
                            <th className="py-2 text-center">Docs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-3 font-medium text-gray-900">Reinforcement Steel</td>
                            <td className="py-3 text-center text-red-600 font-bold">30%</td>
                            <td className="py-3 text-right">350 MT Remaining</td>
                            <td className="py-3 text-center text-indigo-600 underline cursor-pointer">Drawings</td>
                        </tr>
                        <tr>
                            <td className="py-3 font-medium text-gray-900">Concrete (M30)</td>
                            <td className="py-3 text-center text-green-600 font-bold">90%</td>
                            <td className="py-3 text-right">120 M³ Remaining</td>
                            <td className="py-3 text-center text-indigo-600 underline cursor-pointer">Quotes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const CollaborationAndWorkflow = () => (
        <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2">Team & Communication</h3>

            {/* Email Sync Status */}
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
                <p className="font-semibold text-green-700 text-lg mb-3">Email Sync Status</p>
                <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-700">Protocol integration with external email providers.</p>
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full font-bold shadow-md">
                        Connected and Syncing
                    </span>
                </div>
            </div>

            {/* Document and Agenda Sharing */}
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-700 text-lg mb-3">Shared Documents & Agendas</p>
                <p className="text-sm text-gray-700 mb-4">
                    Share task details and meeting agendas with the team within the ERP.
                </p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md transition">
                    Share New Agenda/Document
                </button>
            </div>

            {/* Task Assignments - Link to existing component */}
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-purple-500">
                <p className="font-semibold text-purple-700 text-lg mb-3">Task Assignments</p>
                <p className="text-sm text-gray-700 mb-4">
                    Delegate work to team members and manage their project workflow.
                </p>
                <button 
                    onClick={() => navigate('/admin/userassignment')} 
                    className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md transition"
                >
                    Go to User Assignment Dashboard
                </button>
            </div>
        </div>
    );

    // --- Render Logic ---
    const renderContent = () => {
        switch (activeTab) {
            case 'technical':
                return <TechnicalAndBOQ />;
            case 'collaboration':
                return <CollaborationAndWorkflow />;
            case 'planning':
            default:
                return <PlanningAndScheduling />;
        }
    };

    const tabs = [
        { id: 'planning', name: 'Roadmap & WBS' },
        { id: 'technical', name: 'Design & Materials' },
        { id: 'collaboration', name: 'Team & Workflow' },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <header className="mb-8 flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white shadow-xl">
                <h1 className="text-3xl font-extrabold tracking-wide">Project Management Hub</h1>
                
            </header>

            {/* Project Selector */}
            <div className="mb-6 flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md border-l-4 border-indigo-500">
                <label className="text-lg font-medium text-indigo-700">Active Project:</label>
                <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                >
                    {mockProjects.map(p => (
                        <option key={p.id} value={p.id}>
                            {p.name} ({p.client})
                        </option>
                    ))}
                </select>
            </div>

            {/* Tabs Navigation */}
            <div className="mb-6 border-b border-gray-300">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                ${activeTab === tab.id
                                    ? 'border-indigo-500 text-indigo-600 font-extrabold'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400'
                                }
                                whitespace-nowrap py-3 px-1 border-b-4 text-base transition-colors duration-200
                            `}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tabs Content */}
            <div className="py-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default ProjectManager;