import React from 'react'
import SideNav from './Components/SideNav'
import Document from './Components/Document' 
import Form from './Components/Form'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='flex min-h-screen bg-gray-50'>
     
        <SideNav className='w-92.75 shrink-0'/>
       
        {/* <Form/> */}
        <Routes>
          <Route path='/' element={<Document/>}/>
          {/* <Route path='/form' element={<Form/>}/> */}
        </Routes>
         
    </div>
  )
}

export default App