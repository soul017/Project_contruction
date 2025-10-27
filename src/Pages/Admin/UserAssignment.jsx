import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock Data for Team Members and Assignable Tasks
const mockTeam = [
    { id: 1, name: 'Amit Sharma', role: 'Site Manager', status: 'Active' },
    { id: 2, name: 'Priya Singh', role: 'Site Engineer', status: 'Active' },
    { id: 3, name: 'Rohan Verma', role: 'Safety Officer', status: 'On Leave' },
    { id: 4, name: 'Sana Khan', role: 'Quality Surveyor', status: 'Active' },
];

const mockTasks = [
    { id: 'T-101', name: 'Approve Concrete Mix Design', type: 'Project Milestone', project: 'High-Rise A' },
    { id: 'T-102', name: 'Review Sept RA Bill Documentation', type: 'Billing Task', project: 'Highway Pkg 3' },
    { id: 'T-103', name: 'Inspect Foundation Work', type: 'Project Milestone', project: 'High-Rise A' },
    { id: 'T-104', name: 'Update Safety Certification', type: 'Compliance', project: 'N/A' },
];

const UserAssignment = () => {
    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState(null);
    const [assignment, setAssignment] = useState({
        taskId: '',
        dueDate: new Date().toISOString().slice(0, 10),
    });

    const handleAssignTask = (e) => {
        e.preventDefault();
        
        if (!selectedUser || !assignment.taskId) {
            console.error("Please select both a user and a task.");
            return;
        }

        const task = mockTasks.find(t => t.id === assignment.taskId);
        
        // Simulating assignment logic (in a real app, this would hit Firestore)
        console.log(`Assigning Task: ${task.name} to User: ${selectedUser.name} (Due: ${assignment.dueDate})`);

        // Reset state after "successful" assignment
        setSelectedUser(null);
        setAssignment({ taskId: '', dueDate: new Date().toISOString().slice(0, 10) });

        // Show success message and reset selection area
        console.log('Assignment submitted successfully.');
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* COLUMN 1: Team List (Visibility and Management) */}
                <div className="lg:col-span-1 p-4 bg-white rounded-xl shadow-2xl h-fit">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Active Team Roster ({mockTeam.length})</h2>
                    <div className="space-y-3">
                        {mockTeam.map(user => (
                            <div
                                key={user.id}
                                onClick={() => handleUserSelect(user)}
                                className={`p-3 rounded-lg flex justify-between items-center cursor-pointer transition duration-200 
                                    ${selectedUser && selectedUser.id === user.id 
                                        ? 'bg-violet-100 border-2 border-indigo-600 shadow-md transform scale-[1.01]' 
                                        : 'hover:bg-gray-50 hover:shadow-lg'}
                                    ${user.status === 'On Leave' ? 'opacity-70 grayscale' : ''}
                                `}
                            >
                                <div>
                                    <p className="font-medium text-gray-900">{user.name}</p>
                                    <p className="text-xs text-indigo-600 font-medium">{user.role}</p>
                                </div>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${user.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {user.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COLUMN 2 & 3: Assignment Panel (Work Assignment and Delegation) */}
                <div className="lg:col-span-2">
                    {selectedUser ? (
                        <div className="p-8 bg-violet-100 rounded-xl shadow-2xl border-2 border-indigo-400">
                            <h2 className="text-3xl font-bold text-indigo-800 mb-1">
                                Assign Task
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">Delegating work to **{selectedUser.name}** ({selectedUser.role})</p>
                            
                            <form onSubmit={handleAssignTask} className="space-y-5">
                                
                                {/* Task Selection */}
                                <div>
                                    <label htmlFor="taskId" className="block text-sm font-medium text-gray-700 mb-1">
                                        Select Task or Milestone to Assign
                                    </label>
                                    <select
                                        id="taskId"
                                        value={assignment.taskId}
                                        onChange={(e) => setAssignment({...assignment, taskId: e.target.value})}
                                        required
                                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-base shadow-sm"
                                    >
                                        <option value="">-- Choose a Task --</option>
                                        {mockTasks.map(task => (
                                            <option key={task.id} value={task.id}>
                                                {task.name} ({task.project})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Due Date */}
                                <div>
                                    <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
                                        Due Date
                                    </label>
                                    <input
                                        type="date"
                                        id="dueDate"
                                        value={assignment.dueDate}
                                        onChange={(e) => setAssignment({...assignment, dueDate: e.target.value})}
                                        required
                                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-base shadow-sm"
                                    />
                                </div>

                                {/* Notes/Description (Optional) */}
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Assignment Notes
                                    </label>
                                    <textarea
                                        id="description"
                                        rows="3"
                                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                                        placeholder="E.g., Focus on concrete strength reports."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-bold py-3 rounded-xl shadow-xl transition duration-200 transform hover:scale-[1.01] hover:shadow-2xl"
                                >
                                    Confirm Assignment
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="p-6 bg-white rounded-xl shadow-2xl border border-gray-300 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                            {/* <span className="text-7xl mb-4 text-indigo-500">🧑‍💻</span> */}
                            <p className="text-xl font-medium text-gray-600">Select a team member from the left panel to assign work.</p>
                            {/* <p className="text-sm text-gray-400 mt-2">Team visibility and delegation starts here.</p> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserAssignment;