import React, { useState } from 'react'
import { Upload, FileText, Trash2 } from 'lucide-react';

const Document = () => {
    const [documents, setDocuments] = useState([
        {id:1, name:"Gst Certificate", type:"pdf", date:"01 oct 2025"},
         {id:2, name:"Pan Card", type:"image", date:"15 sept 2025"},
    ])
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) =>{
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = () =>{
        if (selectedFile) {
        const newDoc = {
            id: documents.length + 1,
            name : selectedFile.name,
            type:selectedFile.type,
            date: new Date().toLocaleDateString()
        } 
        setDocuments([...documents, newDoc]) ;
        setSelectedFile(null)  
        }
    }
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
        <h1 className='text-2xl font-bold mb-6'>Documents</h1>

        {/* upload section */}
        <div className='mb-4 p-4 bg-white rounded  shadow flex items-center justify-between'>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}
            className='ml-4 px-4 py-2 bg-blue-600 text-white  rounded  hover:bg-blue-700 flex items-center'>
                <Upload className='w-6 h-6 mr-2'/> upload
            </button>
        </div>

        {/* Douments List */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {documents.map((doc) => (
                <div className='p-4 bg-white rounded shadow  flex items-center justify-between'>
                    <div
                    key={doc.id} 
                    className='p-4 bg-white rounded shadow flex items-center justify-between'>
                        <div className='flex  items-center'>
                            <FileText className='w-8 h-8 text-blue-600 mr-3'/>
                            <div>
                                <p className='font-semibold'>{doc.name}</p>
                                <p className='text-sm text-gray-500'>{doc.type} . {doc.date}</p>
                            </div>
                        </div>
                            <button onClick={() => handleDelete(doc.id)}
                             className='w-10 h-10 flex items-center justify-center rounded-full   bg-white hover:bg-red-600 text-black'
                                ><Trash2 className='w-5 h-5'/></button>
                    </div>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Document