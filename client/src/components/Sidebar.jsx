import React from 'react'
import {
    MdDashboard,
    MdOutlineAddTask,
    MdOutlinePendingActions,
    MdSettings,
    MdTaskAlt,
  } from "react-icons/md";
  import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
  import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

  const linkData = [
    {
      label: "Dashboard",
      link: "dashboard",
      icon: <MdDashboard />,
    },
    {
      label: "Tasks",
      link: "tasks",
      icon: <FaTasks />,
    },
    {
      label: "Completed",
      link: "completed/completed",
      icon: <MdTaskAlt />,
    },
    {
      label: "In Progress",
      link: "in-progress/in progress",
      icon: <MdOutlinePendingActions />,
    },
    {
      label: "To Do",
      link: "todo/todo",
      icon: <MdOutlinePendingActions />,
    },
    {
      label: "Team",
      link: "team",
      icon: <FaUsers />,
    },
    {
      label: "Trash",
      link: "trashed",
      icon: <FaTrashAlt />,
    },
  ];


function Sidebar() {
    const {user} = useSelector((state)=> state.auth)
    const dispatch = useDispatch();
    const location = useLocation()

    const path = location.pathname.split("/")[1];
    // console.log(path)

    const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

    const closeSidebar = () => {
        dispatch(setOpenSidebar(false));
      };

      const Navlink =({el})=>{
        console.log(el.link.split("/")[0])
        return(
        <Link 
            to={el.link}
            onClick={closeSidebar}    
            className={clsx(
                "w-full lg:w-3/4 flex gap-2 px-4 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d]",
                path === el.link.split("/")[0] ? "bg-blue-700 text-neutral-100 hover:bg-blue-700" : ""
            )}
        >
            {el.icon}
            <span className='hover:text-[#2564ed]'>{el.label}</span>
        </Link>
        )
      }


  return (
    <div className='w-full h-full flex flex-col'>
        <h1 className='flex gap-2 items-center pt-5 ml-5'>
            <p className='bg-blue-600 p-2 rounded-full'>
            <MdOutlineAddTask className='text-white text-2xl font-black' />
            </p>
            <span className='text-2xl font-bold text-black'>TaskMe</span>
        </h1>
        
        <div className='flex-1 flex flex-col gap-y-5 py-8 pl-2'>
            {sidebarLinks.map(link=>
                (
                    <Navlink el={link} key={link.label} />
                ))}
        </div>
      
    </div>
  )
}

export default Sidebar