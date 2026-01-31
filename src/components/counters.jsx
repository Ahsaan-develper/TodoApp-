import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
 
    render() { 
        const {handleReset , counter , handleEdit  , handleIncreament,getData , saveData , handleDecreament , handleDelete}= this.props
        return (
            <div>               {
                counter.map((item)=>{
                  return  <div key={item.id}>
                     <Counter 
                     counter={item} 
                     handleIncreament ={handleIncreament}
                     handleDecreament ={handleDecreament}
                     onDelete={handleDelete} 
                     getData={getData}
                     saveData={saveData}
                      value={item.value}
                       id={item.id} 
                       handleEdit={handleEdit}
                     />
                  </div>
                })
               }
               
            </div>
        );
    }
    
}
 
export default Counters;
