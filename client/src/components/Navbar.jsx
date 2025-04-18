import React, { memo } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import UserAvatar from "./UserAvatar";
// import NotificationPanel from "./NotificationPanel";

import UserAvatar from "./UserAvatar";
import NotificationPanel from "./NotificationPanel";
import { setOpenSidebar } from "../redux/slices/authSlice";

const Navbar = memo(() => {
  const { user,isSidebarOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  
//   // Monitor the updated value
//   React.useEffect(() => {
//     console.log("Updated isSidebarOpen:", isSidebarOpen); 
//   }, [isSidebarOpen]); 


  return (
    <div className='flex justify-between items-center rounded-b-md bg-black backdrop-filter backdrop-blur-sm bg-opacity-50  px-4 py-3 2xl:py-4 sticky z-10 top-0 shadow-[0px_1px_5px_0px_#5c5c5c]'>
      <div className='flex gap-4'>
        <button
          onClick={() => dispatch(setOpenSidebar(true))}
          className='text-2xl text-gray-500 block md:hidden'
        >
          ☰
        </button>

        <div className='w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]'>
          <MdOutlineSearch className='text-gray-500 text-xl' />

          <input
            type='text'
            placeholder='Search....'
            className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'
          />
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <NotificationPanel /> 

        <UserAvatar />
      </div>
    </div>
  );
})

export default Navbar;