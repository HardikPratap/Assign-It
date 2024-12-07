import React, { useState } from 'react'
import {
  MdAttachFile,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { toast } from "sonner";
import TaskTable from './Task/TaskTable';

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

function ListView({tasks}) {
  
  return (
    <div>
      <TaskTable tasks={tasks} className={"bg-white text-black"} />
    </div>
  )
}

export default ListView
