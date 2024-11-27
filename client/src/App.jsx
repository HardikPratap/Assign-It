import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Toaster } from 'sonner';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Users from './pages/Users'
import Trash from './pages/Trash'
import Taskdetails from './pages/Taskdetails'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'


function Layout(){
  const user="";

  const location = useLocation();

  return user?(
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-black sticky top-0 hidden md:block'>
        {/* <Sidebar /> */}
      </div>

      {/* <MobileSidebar /> */}

      <div className='flex-1 overflow-y-auto'>
        <Navbar />

        <div className='p-4 2xl:px-10'>
          <Outlet />
        </div>
      </div>
    </div>
  ):(
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

function App() {

  return (
    <main className='w-full min-h-screen bg-black '>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status' element={<Tasks />} />
          <Route path='/todo/:status' element={<Tasks />} />
          <Route path='/team' element={<Users />} />
          <Route path='/trashed' element={<Trash />} />
          <Route path='/task/:id' element={<Taskdetails />} />
        </Route>

        <Route path='/login' element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
       
  )
}


export default App