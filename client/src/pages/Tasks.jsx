import React, { useState } from 'react'
import { FaList } from 'react-icons/fa';
import { MdGridView } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loading';
import Title from '../components/Title';
import Button from '../components/Button';
import { IoMdAdd } from 'react-icons/io';
import Tabs from '../components/Tabs';
import TaskTitle from '../components/TaskTitle';
import BoardView from '../components/BoardView';
import { tasks } from '../assets/data';
import TableView from '../components/ListView';
import ListView from '../components/ListView';
import AddTask from '../components/tasks/AddTask';


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
    const status = params?.status || "";
    const [selected , setSelected]= useState(0)
    const [open, setOpen]= useState(false)
    const [loading ,setLoading] = useState(false)


  return loading ? <div className='py-10'> <Loader /> </div> :
        (
            <div className='w-full '>
                <div className='flex items-center justify-between mb-4 pt-4'>
                    <Title title={status? `${status} Tasks` : "Tasks"} />

                    {!status && (
                        <Button
                        onClick={() => setOpen(true)}
                        label='Create Task'
                        icon={<IoMdAdd className='text-lg' />}
                        className='flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5 px-2 '
                      />
                    )}
                </div>

                <div className='text-primary'>
                    <Tabs tabs={TABS} setSelected={setSelected} >
                    {!status && (
                            <div className='w-full flex justify-between gap-4 md:gap-x-10 py-4'>
                                <TaskTitle label="To Do" className={TASK_TYPE.todo} />
                                <TaskTitle label="In Proggress" className={TASK_TYPE["in progress"]} />
                                <TaskTitle label="Completed" className={TASK_TYPE.completed} />
                            </div>
                        )
                    }
                    {
                        selected !== 1 ? ( <BoardView tasks={tasks} />) : (<div className='w-full flex justify-center'><ListView tasks={tasks}/> </div>)
                    }
                    </Tabs>

                    <AddTask open={open} setOpen={setOpen} />
                </div>

            </div>

        ) 
}

export default Tasks
