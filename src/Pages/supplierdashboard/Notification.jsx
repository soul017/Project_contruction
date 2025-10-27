import {  AlertTriangle, Bell, CheckCircle, Info } from 'lucide-react';
import React, { useState } from 'react'
const initiaNotification = [
    {
        id: 1,
        type: "success",
        title: "order Delivred",
        message: "order #123 has been delivered successfully",
        time: "2min ago",

    },
    {
        id: 2,
        type: "warning",
        title: "payment pendding",
        message: "invoice inv-2025-001 in due in 2days",
        time: "1 hour",

    },
    {
        id: 3,
        type: "info",
        title: " New order",
        message: "order #123 has been delivered successfully",
        time: "10min ago",

    },
    {
        id: 1,
        type: "error",
        title: "delivery failed",
        message: "order #1236 colud not be delivered ",
        time: "2min ago",

    }

];
const getNotificationColor = (type) => {
    switch (type) {
        case "success":
            return "bg-green-100 text-green-600"
        case "info":
            return "bg-blue-100 text-blue-600"
        case "warning":
            return "bg-yellow-100 text-yellow-600"
        case "error":
            return "bg-red-100 text-red-600"

        default:
            return "bg-gray-100 text-gray-600"
    }
}

const getNotificationIcon = (type) =>{
    switch (type) {
        case "success":
            return <CheckCircle className='w-5 h-5' />
             case "info":
            return <Info className='w-5 h-5' />
             case "warning":
            return <AlertTriangle className='w-5 h-5' />
             case "error":
            return <AlertTriangle className='w-5 h-5' />
            
           
    
        default:
            return <Bell  className='w-5 h-5'/>
    }
}





const Notification = () => {
    const [notification, setNotification] = useState(initiaNotification)
    const handleClearAll = () =>{
        setNotification([])
    }
    return (
        <>
            <div className='p-6 bg-gray-100 min-h-screen max-w-md max-auto'>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-2xl font-bold '>Notification</h1>
                    <button className='text-sm text-red-600 hover:underline' onClick={handleClearAll}>Clear All</button>
                </div>

                {notification.length === 0 ? (
                    <p className='text-gray-500'>No Notifiction</p>
                ):(
                    <div className='space-y-3'>
                        {notification.map((notify) => (
                            <div
                            key={notify.id}
                            className={`flex items-center justify-between p-4  rouded shadow ${getNotificationColor(
                                notify.type
                            )}`}>

                                <div className='flex items-start'>
                                    <div className='flex-shrink-0 mr-3'>
                                        <div className='w-10 h-10 flex  items-center justify-center rounded-full bg-white'>
                                            {getNotificationIcon(notify.type)}
                                        </div>
                                    </div>
                                    <div className=''>
                                        <p className='font-semibold'>{notify.title}</p>
                                        <p className='font-semibold'>{notify.message}</p>
                                    </div>
                                </div>
                                <span className='text-xs text-gray-700'>{notify.time}</span>
                            </div>
                        ))}
                    </div>
                )

                }
            </div>
        </>
    )
}

export default Notification