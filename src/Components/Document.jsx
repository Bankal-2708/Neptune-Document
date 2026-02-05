import React, { useEffect, useState } from 'react'
import right from '../assets/RightAro.png'
import search from '../assets/Search.png'
import Form from './Form'

function Document() {

  const [document, setDocument] = useState([]);
  const savedDocs = localStorage.getItem('my_documents');

  useEffect(() => {
    const docs = JSON.parse(savedDocs)
    setDocument(docs)
  }, [savedDocs])

  const [open, setopen] = useState(false);
  const [searchItem, setSearchItem] = useState();

  return (
    <div className='flex-1 bg-[#EBEBEB] min-h-screen w-full p-10 mx-3 '>

      <div className='flex items-center gap-3.5 mb-6 ml-1'>
        <p className='text-[#436D7C] font-normal font-sans'>Home</p>
        <img src={right} alt="" className="h-3 w-3" />
        <p className='text-[#B5BDCD] font-normal font-sans'>Documents</p>
      </div>

      <div className='flex justify-between items-center mb-6 w-full'>
        <h1 className="text-[32px] font-medium font-['Spline_Sans'] text-[#2A2A2A]">My Documents</h1>

        <div className="relative w-76.75 h-11.25">
          <input
            type="text"
            placeholder="Search documents"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="border border-[#B5BDCD] bg- rounded-lg pl-2 pr-4 py-2 w-full outline-none"
          />
          <img
            src={search}
            alt=""
            className='absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5'
          />
        </div>
      </div>

      <div className='w-full bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm'>
        <table className='text-left border-collapse w-full  '>
          <thead>
            <tr className='border-b border-[#E2E8F0] bg-[#F7FAFC]'>
              <th className='p-4'><input type="checkbox" className="rounded" /></th>
              <th className='p-4 font-bold text-[14px] text-[#4A5568]'>Document Name</th>
              <th className='p-4 font-bold text-[14px] text-[#4A5568]'>Status</th>
              <th className='p-4 font-bold text-[14px] text-[#4A5568]'>Last Modified</th>
              <th className='p-4 text-right'>
                <button className='bg-blue-400 rounded-2xl font-bold text-white hover:bg-blue-500 px-6 py-1.5 mr-5'
                  onClick={() => setopen(true)}
                >
                  Add
                </button>
              </th>
            </tr>
          </thead>

          <tbody className='shadow-2xl'>
            {document?.filter((doc) =>
              !searchItem || doc.name.toLowerCase().includes(searchItem.toLowerCase())
            )
              .map((doc, index) => (
                <tr key={index} className='border-b border-[#E2E8F0] hover:bg-gray-50'>
                  <td className='p-4'><input type="checkbox" /></td>
                  <td className='p-4 font-medium'>{doc.name}</td>
                  <td className='p-4'>
                    <span className={`px-3 py-1 rounded-full text-[12px] font-medium ${doc.status === 'Completed'
                      ? 'bg-[#D3F7B5] text-[#1F4451]' :
                      doc.status === 'Pending'
                        ? 'bg-[#E8ECF1] text-[#626D82]' :
                        'bg-[#436D7C] text-[#FFFFFF]'
                      }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className='p-4 text-[#718096] text-[13px]'>
                    {doc.date} <br /> {doc.time}
                  </td>
                  <td className='p-4 text-right'>
                    <button className='border border-[#E2E8F0] px-4 py-1.5 rounded-lg text-[14px] hover:bg-gray-50'>
                      Sign now
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {open && <Form onClose={() => setopen(false)} />}
    </div>
  )
}
export default Document