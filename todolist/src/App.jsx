import React from "react";
import Todoitem from "./component/Todoitem";

class Todo extends React.Component{
  constructor(){
    super();
    this.state = {
      input: "",
      todos:[],
  }}

  inputchange =(e) =>{
    this.setState({
      input : e.target.value,
    })
  }

  Onsubmit = (e)=>{
    e.preventDefault();
    if (this.state.input.length >0){
      this.setState({
        input : '', todos : [...this.state.todos , this.state.input]
      })
    }
  }

  updatetask =(newitem , index)=>{
    let data = this.state.todos;
    data.splice(index , 1 , newitem);
    this.setState({
      todos :data
    })
  }

  deletetask =(index)=>{
    let data = this.state.todos;
    data.splice(index,1);
    this.setState({
      todos : data,
    })
  }
  render(){
    return(
      <>
        <div className='todolist'>
          <form action="" onSubmit={this.Onsubmit}>
            <input  type="text" placeholder="Type here.." 
            value={this.state.input}
            onChange={this.inputchange} />
            <button className="button" type="submit">Add Item</button>
          </form>
          <h3>{this.state.input}</h3>
          <div className="taskname">
            {/* <h2>
              List of my Task
            </h2> */}
            {
              this.state.todos.length == 0 ? (
                <p>No tasks added yet!</p>
              ) : (
                this.state.todos.map((item, index)=>{
                  return (
                    <>
                     <div>
                      <Todoitem e={item} index={index} updatetask = {this.updatetask} deletetask={this.deletetask} />
                     </div>
                    </>
                  )
                })
              )
            }
          </div>


        </div>
      </>
    )
  }
}

export default Todo;