import { Boxes, Plus, Search, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'

const InventoryItems = [
  {
    id:1,
    name:"Cement Opc 50kg",
    category:"Raw metrail",
    quantity: 120,
    unit:"Bags" ,
    price:"320",
    supplir:"ABC Tech",
    status:"In Stock",
    image:"https://i.pinimg.com/736x/07/da/00/07da0099ef327c43eb1b8ef0d2d70e54.jpg"
  },

  {
    id:2,
    name:"steel TMT Bars 10mm",
    category:"Raw Metrail",
    unit:"Cubic meter",
    quantity: 8,
    price:"500",
    supplir:"ABC Tech",
    status:"Low Stock",
    image:"https://i.pinimg.com/1200x/bf/b7/ad/bfb7ade377201f1e00a1e459b76f6ce6.jpg"
  },
  {
    id:3,
    name:"Electric Drill Machine",
    category:"Tool",
    quantity:2,
    unit:"piece",
    price:"15 000",
    supplir:"ABC Tech",
    status:"Out of Stock",
    image:"https://i.pinimg.com/736x/01/21/35/012135af0cdfe4d82d3a1d5de23bc6ee.jpg",

  },
  
]



const Inventory = () => {
 
  const [search, setSearch] = useState("");
  const[filterCategory, setFilterCategory] = useState("All");


  const filteredItems =  InventoryItems.filter(
    (item) => 
    (filterCategory === "All" || item.category === filterCategory) &&
    item.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  return (
    <>
    <div className='p-8 bg-gray-100 min-h-screen '>
      <div className='flex justify-between items-center mb-6'>
      <h1 className='text-3xl font-bold mb-8 text-gray-800 '>Inventory</h1>
      <button className='flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
        <Plus className="w-6 h-6"/>
        <span>Add Product</span>
      </button>
      </div>

      {/* search bar */}
      <input type="text"
      placeholder="Search" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='w-full mb-8 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2  focus:ring-blue-500  '
      />

      <select value={filterCategory}
      onChange={(e)  => setFilterCategory(e.target.value)}
      className='px-4 py-2 border rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 gap-8'>
        <option value="All">All Categories</option>
        <option value="Raw Meterial"> Raw Metrails</option>
        <option value="Toll">Tools</option>

      </select>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        
    {filteredItems.length > 0 ? (
      filteredItems.map((item) => (
        <div key={item.id}
        className='bg:white shadow-lg rounded-xl p-6 border hover:shadow-2xl tranition duration-300 '>
          <img src={item.image} alt=""  className='w-full h-67 object-cover rounded-lg mb-4'/>
          <div className='flex items-center space-x-4 mb-4'>
            <h2 className='text-xl font-semibold text-gray-800'>{item.name}</h2>
          </div>
          <p className='text-gray-600  '><span className='font-medium font-bold'>Category:</span>{item.category}</p>
          <p className='text-gray-600'><span className='font-medium font-bold'>Quantity:</span>{item.quantity}</p>
          <p className='text-gray-600'><span className='font-medium font-bold'>Price:</span>{item.price}</p>
          {/* <p className='text-gray-600'><span className='font-medium'>Suppler:</span>{item.supplir}</p> */}
          <p className='text-gray-600'><span className='font-medium font-bold'>Unit:</span>{item.unit}</p>
          <span className={`inline-block mt-4 px-3 py-1 text-sm rounded-full font-medium ${
            item.status === "In Stock"
            ? "bg-green-100 text-green-700"
            : item.status === "Low stock"
            ? "bg-yellow-100 text-yellow-700"
            :"bg-red-100 text-red-700"
          }`}>{item.status}</span>

          <button className={`mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-white ${

          item.status === "out of  Stock"
          ? "bg-gray-400 corsor-not-allowed" : 
          "bg-pink-600 hover:bg-pink-700"}`} disabled={item.status === "out of stock"} onClick={() => alert(`Buying ${item.name} now!`)}>
            <ShoppingCart className='W-5 h-5' />
            <span>Buy Now</span>
          </button>

        </div>
       
      ))
    ) : (
      <p className='text-gray-600 col-span full'></p>
    
    )}
      </div>

    </div>
    
    
    
    </>
  )
}

export default Inventory