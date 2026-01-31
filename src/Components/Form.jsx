import React, { useState } from 'react'

function Form({ onClose, onAddDoc }) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('Needs signing');

    const handleAdd = () => {
        
        const newDoc = {
            name: name,
            status: status,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        onAddDoc(newDoc);
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-black/20 flex items-center justify-center z-50' onClick={onClose}>
            
            <div className='bg-white border h-96 w-100.5 rounded-2xl flex flex-col justify-between items-center p-6 shadow-xl'
                onClick={(e) => e.stopPropagation()}>

                <div className='flex justify-between items-center w-full'>
                    <h1 className='text-xl font-bold'>Add New Document</h1>
                </div>

                <div>
                    <input 
                        type="text"
                        placeholder='Name Document'
                        value={name}
                        //  update name
                        onChange={(e) => setName(e.target.value)}
                        className='border border-gray-300 w-62.5 h-10 rounded-lg pl-2 bg-white text-black'
                    />
                </div>

                <div className='flex flex-col w-full max-w-62.5 gap-1'>
                    <label className='text-xs font-semibold text-[#4A5568] pl-1'>Status</label>
                    <select
                        value={status}
                        //    update status
                        onChange={(e) => setStatus(e.target.value)}
                        className='border border-[#B5BDCD] w-full h-10 rounded-lg px-2 outline-none cursor-pointer bg-white focus:border-blue-400 text-black'
                    >
                        <option value="Needs signing">Needs Signing</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className='flex flex-col gap-2 w-full items-center'>
                    <button 
                    // function connect
                        onClick={handleAdd} 
                        className='text-white bg-blue-400 hover:bg-blue-500 rounded-lg px-6 py-2 w-full max-w-62.5 font-bold transition-transform hover:scale-105'
                    >
                        Add Doc
                    </button>
                    
                    <button 
                        onClick={onClose} 
                        className='text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg px-6 py-2 w-full max-w-62.5 font-medium transition-transform hover:scale-105'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form