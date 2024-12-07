import React from 'react'
import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { summary, user } from "../assets/data";
import { LuClipboardEdit } from "react-icons/lu";
import { FaNewspaper, FaUsers } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import moment from "moment";   // whats moment used for?
import clsx from 'clsx';
import Charts from '../components/Charts';
import { BGS, getInitials, PRIOTITYSTYELS, TASK_TYPE } from '../utils';
import UserInfo from '../components/UserInfo';
import TaskTable from '../components/Task/TaskTable';


function UserTable({users}){
  const TableHeader = () => (
    <thead className='border-b border-gray-300 '>
      <tr className='text-white  text-left text-xs text-wrap'>
        <th className='py-2'>Full Name</th>
        <th className='py-2'>Status</th>
        <th className='py-2 '>Created At</th>
      </tr>
    </thead>
  );


  const TableRow =({user})=>(
   <tr className='border-b border-gray-700  text-gray-300 hover:bg-gray-400/10'>
      <td className='py-2'>
        <div className='flex items-center gap-3'>
          <div className='w-9 h-9 rounded-full text-white flex items-center justify-center text-xs bg-violet-700'>
            <span className='text-center'>{getInitials(user?.name)}</span>
          </div>

          <div>
            <p className='text-s'> {user.name}</p>
            <span className='text-xs text-black'>{user?.role}</span>
          </div>
          <div>
          </div>
        </div>
      </td>

      <td>
        <p
          className={clsx(
            "w-fit px-3 py-1 rounded-full text-sm",
            user?.isActive ? "bg-blue-600" : "bg-yellow-600"
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </p>
      </td>
      <td className='py-2 text-xs text-right'>{moment(user?.createdAt).fromNow()}</td>
   </tr>
  )

  return (
    <div className='w-full md:w-1/3 bg-gray-700 h-fit px-2 md:px-6 py-4 shadow-md rounded'>
    <table className='w-full mb-5'>
      <TableHeader />
      <tbody>
        {users?.map((user, index) => (
          <TableRow key={index + user?._id} user={user} />
        ))}
      </tbody>
    </table>
  </div>

  )
}


function Dashboard() {

  const totals = summary.tasks;
  const stats = [
    {
      _id: "1",
      label: "TOTAL TASK",
      total: summary?.totalTasks || 0,
      icon: <FaNewspaper />,
      bg: "bg-[#1d4ed8]",
    },
    {
      _id: "2",
      label: "COMPLTED TASK",
      total: totals["completed"] || 0,
      icon: <MdAdminPanelSettings />,
      bg: "bg-[#0f766e]",
    },
    {
      _id: "3",
      label: "TASK IN PROGRESS ",
      total: totals["in progress"] || 0,
      icon: <LuClipboardEdit />,
      bg: "bg-[#f59e0b]",
    },
    {
      _id: "4",
      label: "TODOS",
      total: totals["todo"],
      icon: <FaArrowsToDot />,
      bg: "bg-[#be185d]" || 0,
    },
  ];

  const Card= ({icon,bg,label,count})=>{
    return (
      <div className='w-full h-32 bg-gray-700 p-5 shadow-md rounded-md flex items-center justify-between'>
        <div className='h-full flex flex-1 flex-col justify-between'>
          <p className='text-base text-neutral-300'>{label}</p>
          <span className='text-2xl font-semibold'>{count}</span>
          <span className='text-sm text-gray-400'>{"110 last month"}</span>
        </div>

        <div
          className={clsx(
            "w-10 h-10 rounded-full flex items-center justify-center text-white",
            bg
          )}
        >
          {icon}
        </div>
      </div>
    );
  }

  return (
    <div className='h-full py-4'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 text-white'>
        {
          stats.map(({icon,bg,label,total},index)=>(
            <Card icon={icon} bg={bg} label={label} count={total} key={index} />
          ))
        }
      </div>

      <div className='w-full bg-gray-700 my-16 p-4 rounded shadow-sm'>
        <h4 className='text-xl text-white font-semibold'>
          Chart by Priority
        </h4>
        <Charts />
      </div>

      <div className='w-full flex flex-col md:flex-row gap-4 2xl:gap-10 py-8'>
        {/* /left */}

        <TaskTable tasks={summary.last10Task} />

        {/* /right */}

        <UserTable users={summary.users} />
      </div>


    </div>
  )
}

export default Dashboard
