import React from 'react'
import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import moment from "moment";   // whats moment used for?
import clsx from 'clsx';
import { BGS, getInitials, PRIOTITYSTYELS, TASK_TYPE } from '../../utils';
import UserInfo from '../UserInfo';


function TaskTable({tasks,className}) {
    const ICONS = {
      high: <MdKeyboardDoubleArrowUp />,
      medium: <MdKeyboardArrowUp />,
      low: <MdKeyboardArrowDown />,
    };
  
    const TableHeader= ()=>(
      <thead className='border-b border-gray-300 '>
        <tr className='text-primary text-left'>
          <th className='py-2'>Task Title</th>
          <th className='py-2'>Priority</th>
          <th className='py-2'>Team</th>
          <th className='py-2 hidden md:block'>Created At</th>
        </tr>
      </thead>
    )
  
    const TableRow= ({task , className})=>(
      <tr className={clsx("border-b border-gray-500  hover:bg-gray-300/10 ", className)}>
        <td className='py-2'>
          <div className='flex items-center gap-2'>
            <div  className= {clsx("w-4 h-4 rounded-full" ,TASK_TYPE[task.stage])}/>
            <p className={clsx("text-base text-neutral-300",className)}>{task.title}</p>
          </div>
        </td>
  
        <td className='py-2'>
          <div className='flex gap-1 items-center'>
            <span className={clsx("text-lg", PRIOTITYSTYELS[task.priority])}>
              {ICONS[task.priority]}
            </span>
            <span className='capitalize text-gray-400'>{task.priority}</span>
          </div>
        </td>
  
        <td className='py-2'>
          <div className='flex'>
            {task.team.map((m, index) => (
              <div
                key={index}
                className={clsx(
                  "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                  BGS[index % BGS.length]
                )}
              >
                <UserInfo user={m} />
              </div>
            ))}
          </div>
        </td>
  
        <td className='py-2 pl-2 hidden md:block'>
          <span className='text-base text-gray-400'>
            {moment(task?.date).fromNow()}
          </span>
        </td>
  
      </tr>
  
    )
  
    return <div className={clsx("w-full md:w-2/3 border border-white/5 bg-neutral-900 px-2 md:px-4 pt-4 pb-4 shadow-md rounded",className)}>
      <table>
        <TableHeader />
        <tbody>
          {
            tasks.map((task,id)=>(
              <TableRow key={id} task={task} className={"text-neutral-300"} />
            ))
          }
        </tbody>
      </table>
    </div>
  }
  

export default TaskTable
