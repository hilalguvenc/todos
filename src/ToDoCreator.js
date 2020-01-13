import React,{Component} from 'react';


export default class ToDoCreator extends Component{

    constructor(props){
        super(props);
        this.state = { newItemText:""}
        
    }
    updateNewTextValue=(event)=>{
        this.setState({newItemText: event.target.value});
    }
    createnewToDo=()=>{
        this.props.callback(this.state.newItemText)
        this.setState({newItemText:""})
    }

    render =()=>
    <div className="col-sm-6">
    <input  value={this.state.newItemText} onChange ={this.updateNewTextValue} />
    <button onClick={this.createnewToDo}>Add</button>
    </div>

}