import { useEffect , useState,  createContext } from "react";

export const todoContext = createContext();

const TodoProvider = ({children})=>{
     const [todoList , setTodoList] = useState([]);
    const [editItem , setEditItem] = useState("");
    useEffect(()=>{
        setTodoList(handleGetData())
    },[])
    

    const handleGetData = ()=> {
    return JSON.parse(localStorage.getItem("todo")) || [];
}
    const handleSaveData = (arr) =>{
    localStorage.setItem("todo" , JSON.stringify(arr));
}
    const handleAddTask = (task) => {
        if (task.trim() === "") return ;
        let newTask = {
            id : todoList.length + 1,
            value : 0 ,
            task : task,
        }

        let tasks = [...todoList , newTask];
        handleSaveData(tasks);
        setTodoList(tasks);
    }   
    
    const handleIncreament = (item)=>{
    let tasks = [...todoList];
    let index = tasks.indexOf(item);
    tasks[index].value++;
    setTodoList(tasks);
    handleSaveData(tasks);
       
    }

    const handleDecreament = (item)=>{
        let tasks = [...todoList];
        let index = tasks.indexOf(item);
        tasks[index].value--;
        handleSaveData(tasks);
        setTodoList(tasks)
    }

    const deleteTask = (item) => {
        let tasks   = [...todoList];
        let index = tasks.indexOf(item);
        tasks.splice(index ,1);
        setTodoList(tasks);
        handleSaveData(tasks)
    }


    const handleReset = () =>{
        let tasks = [...todoList];
        tasks.map((item)=>{
            item.value = 0;
        })
        setTodoList(tasks);
        handleSaveData(tasks)
    }

    

    const handleEdit = (item)  =>{
       setEditItem(item)
    }

    const handleUpdateItem = (taskName) =>{
        if (taskName.trim() === "") return;

        let tasks = [...todoList];

        let updateTask= tasks.map (item => item.id === editItem.id ? {...item , task: taskName} : item)
        handleSaveData(updateTask);
        setTodoList(updateTask);
        setEditItem(null);  
    }

    return (
        <todoContext.Provider value={{
            handleGetData,
            handleUpdateItem,
            editItem,
            handleReset,
            active : todoList.filter(pre => pre.value > 0).length,
            length: todoList.length,
            handleSaveData,
            handleAddTask,
            todoList,
            handleIncreament,
            handleDecreament,
            deleteTask,
            handleEdit,
        }}>
            {children}

        </todoContext.Provider>
    )


};
export default TodoProvider;

