import { useContext } from "react";
import { todoContext } from "./contextWrapper";

function FuncCounter(props) {
   //  const {todoList , handleIncreament , handleDecreament , deleteTask  , handleEdit } = props;
    const {todoList , handleIncreament , handleDecreament , deleteTask  , handleEdit } = useContext(todoContext);
    

    return ( 
        <main className=" ml-4 mt-6">
           {
            todoList.map ((item )=>{
            return  <div className="mt-4" key={item.id}>
              <button onClick={()=>handleIncreament(item)} className="rounded-md bg-gray-500 w-10 text-white h-8"
                    >+</button>
            <button onClick={()=>handleDecreament(item)} className="rounded-md bg-gray-500 w-10 text-white h-8">-</button>
            <span className="bg-yellow-300 ml-2 w-16 text-center rounded-md">{item.value}Times </span>
            <span className="  ml-2  mr-2  ">{item.task}</span>
            <button  onClick={()=>handleEdit(item)} className="bg-gray-500 text-white rounded-md w-10 ">Edit</button>
            <button onClick={()=>deleteTask(item)} className="bg-red-500 text-white ml-2 rounded-md w-16 ">Delete</button>
                   </div>
                })
           }
        </main>
     );
}

export default FuncCounter;