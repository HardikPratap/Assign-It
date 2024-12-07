import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TaskDialog from './Task/TaskDialog';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp } from 'react-icons/md';
import clsx from 'clsx';
import { formatDate, PRIOTITYSTYELS, TASK_TYPE } from '../utils';

const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />,
  };


function TaskCard({task}) {
    const {user} = useSelector((state)=> state.auth);
    const [open , isOpen] = useState(false)
  return (
    <>
        <div className='w-full h-fit bg-white shadow-md p-4 rounded'>
            <div className='w-full flex justify-between'>
                <div className={clsx("flex flex-1 gap-1 items-center text-sm font-medium",PRIOTITYSTYELS[task?.priority])}>
                    <span className='text-lg'>{ICONS[task?.priority]}</span>
                    <span className='uppercase'>{task?.priority} Priority</span>
                </div>

                {user?.isAdmin && <TaskDialog task={task}/>}
            </div>
            <>
                <div className='flex items-center gap-2'>
                <div className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])}/>
                    <h4 className='line-clamp-1 text-white'>{task?.title}</h4>
                </div>
                <span className='text-sm text-gray-600'>{formatDate(new Date(task?.date))} </span>
            
            </>

        </div>
    </>
    
  )
}

export default TaskCard
