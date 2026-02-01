import { useContext, useEffect, useState } from "react";
import { todoContext } from "./contextWrapper";

function FunNavBar() {
// {handleGetData,handleSaveData , handleAddTask , length , active , handleReset , editItem , handleUpdateItem}

const {handleGetData,handleSaveData , handleAddTask , length , active , handleReset , editItem , handleUpdateItem} = useContext(todoContext)
    const [taskName, setTaskName] = useState("");
    const [time,setTime ] = useState(new Date());
    useEffect(()=>{
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    },[])


    useEffect(()=>{
        if (editItem){
            setTaskName(editItem.task);
        }else{
            setTaskName("");
        }
    },[editItem])


    const handleSubmit= (e)=>{
        e.preventDefault();
        if (editItem){
            handleUpdateItem(taskName)
        }else{
             handleAddTask (taskName);
        }
       
        setTaskName("");
    }
    return (
        <main className="flex mt-3  flex-wrap">
            <span className="ml-2">Navbar</span>
            <span className="bg-gray-600 w-16 text-center h-8  rounded-md text-white ml-2">{active}active</span>
            <span  className="bg-gray-600 w-16 text-center  h-8 rounded-md text-white  ml-2"> {length}total</span>
            <form action=""  onSubmit={handleSubmit}>
                <input type="text" className="border-2 border-blue-500 rounded-md  focus: outline-none pl-2"
                placeholder="Task Name" value={taskName} 
                onChange={(e)=>setTaskName(e.target.value)}
                 />
                 <button  className="bg-blue-500 w-[100px] h-10 rounded-md ml-1 text-white" 
                 type="submit">Add Task</button>
                 <button onClick={handleReset} className=" ml-2 bg-red-500  rounded-md px-2 text-white">Reset Number of active task </button>
                 <span className=" ml-2 bg-red-500    rounded-md px-2 text-white">{time.toDateString()} {time.toTimeString()}</span>
            </form>
        </main>
    );
}

export default FunNavBar;