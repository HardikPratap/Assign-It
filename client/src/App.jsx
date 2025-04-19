
import './App.css'
import { Toaster } from 'sonner';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Users from './pages/Users'
import Trash from './pages/Trash'
import Taskdetails from './pages/Taskdetails'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { IoClose } from 'react-icons/io5';
import clsx from 'clsx';
import { Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { setOpenSidebar } from './redux/slices/authSlice';




function Layout(){
  const {user}= useSelector((state)=>state.auth);

  const location = useLocation();

  return user?(
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-[18%] h-screen bg-black 
       bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  sticky top-0 hidden  md:block'>
        <Sidebar />
      </div>

      <MobileSidebar />

      <div className='flex-1 overflow-y-auto'>
        <Navbar />

        <div className='p-4 2xl:px-10 '>
          <Outlet />
        </div>
      </div>
    </div>
  ):(
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  // console.log("Sidebar state:", isSidebarOpen); // Debug state updates

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transition-opacity"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity "
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "md:hidden w-full h-full dark:bg-black/40  transition-all duration-500 transform items-center ",
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={(e) => {
              // e.stopPropagation();
              closeSidebar();
            }}
          >
            <div className="light:bg-white dark:bg-black w-3/4 h-full shadow-[1px_0px_10px_0px_#5c5c5c]">
              <div className="w-full flex justify-end px-5">
                <button onClick={closeSidebar} className="flex justify-end items-end">
                  <IoClose size={25} />
                </button>
              </div>

              <div className="-mt-10">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};


function App() {

  return (
    <main className='w-full min-h-screen bg-black '>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Navigate to='/tasks' />} />
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
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <Toaster richColors />
    </main>
       
  )
}


export default App