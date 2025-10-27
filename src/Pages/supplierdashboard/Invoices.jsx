import React, {useRef} from 'react'
import {useReactToPrint} from "react-to-print"

const invoicesData = {
  InvoiceNumber: "INV-2025-001",
  InvoiceDate:"3 oct 2025",
  dueDate: "10 oct 2025",
  company:{
    name: "Abc Constructions",
    address:"123, delhi",
    contact:"+ 91 896789653211",
    gst:"07ABCDE1234F1Z5",
    logo:"https://i.pinimg.com/736x/c4/a5/42/c4a5424a855e3e22bc58f41b692211b9.jpg"
  },
  customer: {
    name:"mohit sharma",
    address:"456 noida",
    contact:"+91 9122445566",
    gst:"07xyzAB568K1Z9",

  },
  items:[
    {name:"cement 50kg", des:"opc cement", quantity:10, unit:"bags", price:320, discount:0 },
    {name:"Bricks", des:"Red Bricks", quantity:500, unit:"Pieces", price:5  , discount:0 },
     {name:"cement 50kg", des:"opc cement", quantity:10, unit:"bags", price:320, discount:0 },
],
taxes:18,
shipping:500,
paymentMethod:"UPI/ CARD/ COD",
notes:"please pay within 7days. Late Payment will   attract interest"
}



const Invoices = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: invoicesData.InvoiceNumber,
  });
  const subTotal = invoicesData.items.reduce(
   (acc,item) => acc + item.quantity * item.price - item.discount,
   0
  );
  const taxAmount = (subTotal * invoicesData.taxes)/100;
  const total = subTotal + taxAmount + invoicesData.shipping;


  return (
   <>
   <div className='p-6 max-w-4xl max-auto bg-gray-50'>
    <button onClick={handlePrint}
    className='mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'> Download / Print Pdf
   </button> 
   <div  ref={componentRef} className='bg-white p-6 rounded shadow'>
    <div className='flex justify-between items-center mb-6'>
      <div>
        <h1 className='text-2xl font-bold'>{invoicesData.company.name}</h1>
        <p className=''> {invoicesData.company.contact}</p>
        <p>{invoicesData.company.gst}</p>
      </div>
      {invoicesData.company.logo && (
        <img src={invoicesData.company.logo} alt="" className='w-16 h-16  rounded-full' />
      )} 
    </div>

    {/* Invoice & customer  info */}
    <div className='flex justify-between  bg-gray-200 p-4  rounded mb-4 '>
      <div>
        <p><span className='font-medium'>Invoice No :</span>{invoicesData.InvoiceNumber}</p>
         <p><span className='font-medium'>Invoice Date :</span>{invoicesData.InvoiceDate}</p>
          <p><span className='font-medium'>Due Date:</span>{invoicesData.dueDate}</p> 
          
      </div>
    </div>

    {/* item Table */}
    <table className='w-full border-collapse mb-6 '>
       <thead>
       <tr className='bg-gray-200'>
        <th className='border px-3 py-2 text-left'>#</th>
         <th className='border px-3 py-2 text-left'>Item</th>
          <th className='border px-3 py-2 text-left'>Description</th>
           <th className='border px-3 py-2 text-left'>Quantity</th>
            <th className='border px-3 py-2 text-left'>Unit</th>
             <th className='border px-3 py-2 text-left'>Price</th>
              <th className='border px-3 py-2 text-left'>Discount</th> 
              <th className='border px-3 py-2 text-left'>Total</th>
       </tr>
       
       </thead>
       <tbody>
        {invoicesData.items.map((item, index) => {
          const itemTotal = item.quantity * item.price - item.discount;
          return (
            <tr key={index} className='odd:bg-white even:bg-gray-100'>
              <th className='border px-3 py-2 '>{index + 1}</th>
         <th className='border px-3 py-2 '>{item.name}</th>
          <th className='border px-3 py-2 '>{item.des}</th>
           <th className='border px-3 py-2  text-right'>{item.quantity}</th>
            <th className='border px-3 py-2  text-right'>{item.unit}</th>
             <th className='border px-3 py-2 text-right '>{item.price}</th>
              <th className='border px-3 py-2  text-right'>{item.discount}</th> 
              <th className='border px-3 py-2 text-right'>{itemTotal}</th>

            </tr>
          )
        })}
       </tbody>

    </table>
{/* totals */}
    <div className='flex justify-end mb-6'>
        <div className='w-1/3 '>
        <div className='flex justify-between py-1'>
          <span>SubTotal:</span>
          <span>{subTotal}</span>
        </div>
        <div className='flex justify-between py-1'>
          <span>Tax({ invoicesData.taxes}%):</span>
          <span>{taxAmount}</span>
        </div>
        <div className='flex justify-between py-1'>
          <span>shipping</span>
          <span>{invoicesData.shipping}</span>
        </div>
          <div className='flex justify-between py-2 font-bold  border-t'> 
            <span>Total:</span>
            <span>{total}</span>
          </div>
        </div>
    </div>

    {/* payment & notes */}
    <div className='mb-4'>
      <p><span className='font-medium'>payment Method :</span>{invoicesData.paymentMethod}</p>
      <p><span className='font-medium'>Notes :</span>{invoicesData.notes}</p>
    </div>
   </div>
   </div>
   </>
  )
}

export default Invoices;