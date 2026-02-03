import { useContext, useEffect  , useState} from "react";
import { todoContext } from "./contextWrapper";
import "../components/style.css"
function FuncCounter(props) {
   //  const {todoList , handleIncreament , handleDecreament , deleteTask  , handleEdit } = props;
    const {todoList , handleIncreament , handleDecreament , deleteTask , editItem , handleUpdateItem  , handleEdit } = useContext(todoContext);
   const [task , setTask] = useState("");
   useEffect(()=>{
         if (editItem){
               setTask(editItem.task);
         }else{
               setTask("");
         }
      },[editItem])
   const handleEditSubmit = (e) => {
      e.preventDefault();      
      handleUpdateItem(task);
      // document.getElementById("edit").classList.remove("hidden");
      // document.getElementById("input").classList.add("hidden");
   }

  
    return ( 
        <main className=" ml-4 mt-6 ">
           {
            todoList.map ((item )=>{
            return  <div className="mt-4 flex" key={item.id}>
              <button onClick={()=>handleIncreament(item)} className="rounded-md bg-gray-500 w-10 text-white h-8"
                >+</button>
            <button onClick={()=>handleDecreament(item)} className="rounded-md bg-gray-500 w-10 text-white h-8">-</button>
            <span id="text"  className={`ml-2  w-16 text-center rounded-md ${item.value > 0 ? "bg-blue-500" : item.value < 0 ? "bg-red-500" : "bg-yellow-300"} `}>{item.value}Times </span>
       
         {
         editItem?.id === item.id ? (
            < form id="input" className=" ml-2 mr-2" onSubmit={handleEditSubmit}>
               <input type="text" className="border-2 border-blue-500 rounded-md  focus: outline-none pl-2"
                placeholder="Edit Task Name" value={task} 
                onChange={(e)=>setTask(e.target.value)}
                   />
            </form>
          ):(
               <span id="edit" className="  ml-2  mr-2 ">{item.task}</span>
          )
         }
            <button  onClick={()=>handleEdit(item)} className="bg-gray-500 text-white rounded-md w-10 ">Edit</button>
            <button onClick={()=>deleteTask(item)} className="bg-red-500 text-white ml-2 rounded-md w-16 ">Delete</button>
                   </div>
                })
           }
        </main>
     );
}

export default FuncCounter;