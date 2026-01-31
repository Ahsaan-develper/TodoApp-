import React, { Component } from 'react'
class Counter   extends Component {
    // state = {  
    //     count : this.props.counter.value,
    //     // tags :[
           
    //     // ]
    // } ;
//    styles ={
//     fontSize : "30px",
//     fontWeight : "Bold",
//    };

//    rendorTag (){
//     if (this.state.tags.length === 0 )return    <p>There is no tag!</p>
//     return this.state.tags.map((item)=>{
//                         return <li>{item}</li>
//                       })
//    }
 
//  handleIncreament = (id)=>{
    
// this.setState({count :this.state.count + 1});
// }
    render() {
        
        return (
            <div>
                <button onClick={()=>this.props.handleIncreament(this.props.counter)} className='bg-gray-700 h-10 w-8 rounded-md text-white '>+</button>
                <button onClick={()=>this.props.handleDecreament(this.props.counter)} className='bg-gray-700 h-10 w-8 rounded-md text-white '>-</button>
                <span className={`bg-yellow-300  rounded-md ml-2 mr-2 px-3 text-center`} 
                >{this.props.counter.value}Times</span>
                <span className='font-semibold'>{this.props.counter.task} </span>
                <button onClick={()=>this.props.handleEdit(this.props.counter.id)} className='bg-gray-600 p-2 rounded-sm w-10 mt-1 ml-3 '>Edit</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className='bg-red-700 p-2 rounded-md w-15 ml-3 '>Delete</button>



                {/* <ul> */}
                    {/* {
                      this.state.tags.map((item)=>{
                        return <li>{item}</li>
                      })
                        
                    } */}
                    {/* {this.state.tags.length=== 0 && "Please create a new Tag !"}
                    {
                       this.rendorTag()
                    } */}
                    
                {/* </ul> */}
            </div>
        );
    }
}
 
export default Counter ;