import React from "react";

class Todoitem extends React.Component{
    constructor(){
        super();
    }
    render() {
        let {e , index , updatetask,deletetask} = this.props;
        return (
          <>
            <div>
                <input type="text" value={e} onChange={(e)=> {updatetask(e.target.value,index)}}/>
                <button className="button"
                onClick={() => {deletetask(index)}}>Delete Item
                </button>
            </div>
          </>
        );
      }
    
}

export default Todoitem