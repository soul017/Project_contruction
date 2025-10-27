import { Edit, Eye, X } from 'lucide-react';
import React, { useState } from 'react'
const projects = [
  {
     id:1,
     name:"Office Building",
     client:"Abc Construction",
     status:"Ongoing",
     startDate:"2025-1-10",
     endDate:"2025-12-15",
     progress:60,
     budget:"25,00,000",
  },

  {
     id:2,
     name:"Residential Complex",
     client:"XYZ Construction",
     status:"Pending",
     startDate:"2025-12-15",
     endDate:"2025-11-30",
     progress:60,
     budget:"40,00,000",
  },
  {
    id:3,
    name:"Mail Renovation",
    client:"PQR Devlopers",
    status:"Completed",
    startDate:"2024-12-25",
    endDate:"2025-02-20",
    progress:"20",
    budget:"15,00,000"


  }

]

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const[isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const openEditModal = (project) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);

  };
  const closeModal = () => {
    setSelectedProject(null);
    setIsViewModalOpen(false);
    setIsEditModalOpen(false)
  }
  return (
    <>
    <div className='bg-white p-6 rounded-xl shadow-xl'>
      <h2 className='text-2xl font-semibold mb-4 '>Projects</h2>
      <div className='overflow-x-auto '>
        <table className='min-full table-auto border border-gray-200 '>
          <thead className='bg-gray-100 hover:bg-gray-300'>
            <tr className='hover:bg-gray-300'>
              <th className='px-4 py-2 text-left border-b'>Project Name</th>
              <th className='px-4 py-2 text-left border-b'>Client</th>
              <th className='px-4 py-2 text-left border-b'>Status</th>
              <th className='px-4 py-2 text-left border-b'>Start Date</th>
              <th className='px-4 py-2 text-left border-b'>End Date</th>
              <th className='px-4 py-2 text-left border-b'>Progress</th>
              <th className='px-4 py-2 text-left border-b'>Buget</th>
              <th className='px-4 py-2 text-left border-b'>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className='hover:gray-50 transition-colors'>
                <td className='px-2 py-2 border-b'>{project.name}</td>
                 <td className='px-2 py-2 border-b'>{project.client}
                   </td>
                   <td className='px-2 py-2 border-b'>
                 <span className={`px-2 py-1 rounded-full text-white text-sm ${project.status === "Ongoing" 
                  ? "bg-green-500" 
                  : project.status === "Pending"
                  ? "bg-yellow-500"
                  : "bg-blue-500"
                 }`}>{project.status}</span>
                 </td>
              <td className='px-4 py-2 border-b'>{project.startDate}</td>
               <td className='px-4 py-2 border-b'>{project.endDate}</td>
               <td className='px-4 py-2 border-b'>
                <div className='w-full bg-gray-200 rounded-full h-3'>
                  <div className='bg-blue-500 h-3 rounded-full'
                  style={{width:`${project.progress}%`}}></div>
                </div>
                <span className='text-sm'>{project.progress}%</span>
               </td>
               <td className='px-4 py-4 border-b'>{project.budget}</td>
               <td className='px-4 py-4 border-b flex gap-2'>
                <button className='px-4 py-2    text-black rounded hover:bg-blue-600'><Eye className='W-4 h-4'/></button>
                <button  onClick={() => openEditModal(project)}  className='px-4 py-2   text-black rounded hover:bg-blue-600'><Edit className='w-4 h-4'/></button>
                
               </td>

              </tr>
           ) )}
          </tbody>
        </table>

      </div>

      {/* Edit Modal */}
      {isEditModalOpen && selectedProject && (
        <div className='fixed inset-0 bg-black/30 backdrop-blur-sm  flex items-center justify-center z-50'>
          <div className='bg-white  p-6 rounded-xl w-96 shadow-lg relative'>
            <div className='flex justify-end gap-2 mt-2'>
                <button className='px-4 py-2 bg-gray-300 text-red-600 rounded hover:bg-gray-400' onClick={closeModal}><X className='w-5 h-5' /></button>
                
              </div>
            <h3 className='text-xl font-bold mb-4 '>Edit Project</h3>
             
            <form className='flex flex-col'>
              <label >Name:
                <input type="text" defaultValue={selectedProject.name}
                className='border px-2 py-1 rounded w-full' />
              </label>
              <label>
                Client:
                <input type="text"
                defaultValue={selectedProject.client}
                className='border px-2 py-2 rounded w-full' />
              </label>
              <label>Status:
                <select 
                defaultValue={selectedProject.status} className='border px-2 py-1 rounded w-full'>
                  <option>Ongoing</option>
                   <option>Pending</option>
                    <option>Completed</option>
                </select>
              </label>
              <label>
                Progress:
                <input type="number"
                defaultValue={selectedProject.progress}
                className='border px-2 py-2 rounded w-full' />
              </label>
              <label>
                Budget:
                <input type="text"
                defaultValue={selectedProject.budget} 
                className='border px-2 py-1 rounded w-full' />
              </label>

               <div className='flex justify-end gap-2 mt-2'>
                
                <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>Save</button>
              </div>
             
            </form>
          </div>
        </div>
      )}
     

       
    </div>
    </>
  )
}

export default Projects