    import React, { Component, useEffect, useState } from 'react'
    const Navbar = ({totalCounter , getData , editId,handleUpdateTask, taskName ,handleAddCounter,  handleReset , totalTask}) => {
        const [task , setTask] = useState("");
        let [time , setTime] = useState(new Date());
console.log(time);

        useEffect(()=>{
            setInterval(()=>{
                setTime(new Date());
            },1000)
        },[])
        useEffect(()=>{
            if(taskName){
                setTask(taskName)
            }
        },[taskName])

        const submitTask = (e)=>{
            e.preventDefault();
             const data = getData(); 
    const isDuplicate = data.some(item => item.task.toLowerCase() === task.toLowerCase());

    if (isDuplicate) {
        alert("This task already exists!");
        return;
    }
            
            if (editId){
            handleUpdateTask(task)
            }else{
            handleAddCounter(task);
            }
            
            setTask("");
        
        }
            
        return (
                <main className="bg-blue-100 w-[100%] h-20 flex items-center font-bold ">
                    Navbar
                    <span className='bg-gray-500 ml-2 rounded-md w-20 text-center text-white'>{totalCounter}active</span>
                    <span className='bg-gray-500 ml-2 rounded-md w-20 text-center text-white'>{totalTask}Total</span>
                    <form onSubmit={submitTask}>
                        <input type="text" placeholder='Task Name'
                        value={task} onChange={(e)=>setTask(e.target.value)} name='toname'    className='border-blue-600 border-2 rounded-md' />
                    <button  type='submit' className='text-white bg-blue-500 p-1 rounded-md'>Add Task</button>
                    </form>

                    <button onClick={handleReset} className='bg-red-500 w-60 ml-2 rounded-md text-white'>Reset Number on active task </button>
                    <p className='bg-red-500 w-120 ml-2 font-sm rounded-md text-white'>{time.toDateString()} {time.toTimeString()} </p>
                </main>
            );
    }
    
    export default Navbar;
