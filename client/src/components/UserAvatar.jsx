import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitials } from '../utils';
import { toast } from 'sonner';
import { useLogoutMutation } from '../redux/splice/api/authApiSlice';
import { logout } from '../redux/splice/authSplice';


function UserAvatar() {

    const [open, setOpen] = useState(false);
    const [openPassword, setOpenPassword] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutUser]= useLogoutMutation()

    async function logoutHandler(){
      try{
        await logoutUser().unwrap();
        dispatch(logout())
        navigate("/login")
      }catch(err){
        toast.err("Something Went Wrong")
      }
    }

    // console.log(user?.name)
  
  return (
    <>
    <div>
        <Menu as='div'>
        <div>
            <MenuButton className='w-10 h-10 2xl:w-12 2xl:h-12 items-center justify-center rounded-full bg-blue-600'>
              <span className='text-white font-semibold'>
                {getInitials(user?.name)}
              </span>
            </MenuButton>
        </div>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right z-10 rounded-xl border border-white/5 bg-neutral-900 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <FaUser className="size-4 fill-white/30" />
              Profile
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘P</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            onClick={()=>{setOpenPassword(true)}}>
              <FaUserLock className="size-4 fill-white/30" 
              />
              Change Password
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button 
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-red-800 data-[focus]:bg-white/10"
                onClick={logoutHandler}>
                
              <IoLogOutOutline className="size-4 fill-white/30" />
              LogOut
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘L</kbd>
            </button>
          </MenuItem>
         
        </MenuItems>


        </Menu>
    </div>
    </>
   )
}

export default UserAvatar
