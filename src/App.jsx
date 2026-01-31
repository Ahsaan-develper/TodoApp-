import Counters from "./components/counters";
import Navbar from "./components/navbar";

import React, { Component } from 'react'
class App extends Component {
     state = {  
        counter  :[
        ],
        taskName : "",
        editId : null,
    } ;
componentDidMount (){
    const data = this.getData();
    this.setState({counter : data})
}

   getData = ()=>{
     return JSON.parse(localStorage.getItem("data"))||[];
   }

   saveData = (data) =>{
    localStorage.setItem("data", JSON.stringify(data));
   }
    handleAddCounter = (taskAdd)=>{
        if (taskAdd.trim() === ""){
            return
        }
        const newCounetr ={
            id : this.state.counter.length + 1,
            value : 0,
            task : taskAdd
        }
        const counters = [...this.state.counter , newCounetr];
        this.saveData(counters)
        this.setState({counter: counters})
    }

   handleUpdateTask = (updateTask) => {
    if (updateTask.trim() === "") return;

    const counters = this.state.counter.map(item => 
        item.id === this.state.editId ? { ...item, task: updateTask } : item
    );

    this.saveData(counters);
    this.setState({
        counter: counters,
        taskName: "",
        editId: null, 
    });
}


    
    
    handleDelete =(id)=>{  
        let counter = this.state?.counter.filter(p => p.id !== id);
        this.setState({counter})
        this.saveData(counter)
    }
    handleReset = ()=>{
       const counters = this.state.counter.map ((item)=>{
        item.value=0;
        return item
       });
       this.setState({counters})
       this.saveData(counters)
    }

    handleIncreament = (counter)=>{
        let counters = [...this.state.counter]
        const index = counters.indexOf(counter);       
        counters[index].value++;
        this.setState({counters})
        this.saveData(counters)
    }
     handleDecreament = (counter)=>{
        let counters = [...this.state.counter]
        const index = counters.indexOf(counter);
        // counters[index] = {...counter};
        if (counter.value <= 0){
            alert("You can not use decreament");
            return;
        }        
        counters[index].value--;
        this.setState({counters})
        this.saveData(counters)
    }

    handleEdit = (id) =>{
       let counters = this.state.counter.find (prev => prev.id === id);
       console.log(counters);
       
       this.setState({
        taskName : counters.task,
        editId : counters.id,
       } )
    }
    render() { 
        return (
            <main>
                <Navbar 
                getData={this.getData}
                editId={this.state.editId}
                handleUpdateTask={this.handleUpdateTask} 
                handleReset={this.handleReset}  handleAddCounter={this.handleAddCounter}
                taskName={this.state.taskName}
                totalTask={this.state.counter.length}
                 totalCounter ={this.state.counter.filter(c => c.value > 0).length}/>
                <Counters handleDelete={this.handleDelete}
                getData={this.getData}
                saveData={this.saveData}
                 handleReset={this.handleReset}
                  handleIncreament={this.handleIncreament}
                  handleDecreament = {this.handleDecreament}
                    handleEdit={this.handleEdit}
                  counter={this.state.counter}
                  
                  />
                
            </main>
        );
    }
}
 
export default App;