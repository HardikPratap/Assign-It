import clsx from 'clsx';
import React from 'react'
import { IoMdAdd } from 'react-icons/io';

function TaskTitle({label , className}) {
  return (
    <div className='w-full h-10 md:h-12 px-2 md:px-4 rounded border border-white/5 bg-neutral-900 flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <div className={clsx("w-4 h-4 rounded-full ", className)} />
        <p className='text-sm md:text-base text-primary'>{label}</p>
      </div>

      <button className='hidden md:block'>
        <IoMdAdd className='text-lg text-black' />
      </button>
    </div>
  );
}

export default TaskTitle
