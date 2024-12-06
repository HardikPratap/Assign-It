import React, { useState } from 'react'
import { FaList } from 'react-icons/fa';
import { MdGridView } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';


const TABS = [
    { title: "Board View", icon: <MdGridView /> },
    { title: "List View", icon: <FaList /> },
  ];
  
  const TASK_TYPE = {
    todo: "bg-blue-600",
    "in progress": "bg-yellow-600",
    completed: "bg-green-600",
  };
 
  
function Tasks() {

    const params = useParams()
    const [selected , setSelected]= useState()
    const [open, setOpen]= useState(false)
    const [loading ,setLoading] = useState(false)


  return loading ? <div> <Loader /> </div> : 
        <div className='text-white'>Tasks</div>
}

export default Tasks
