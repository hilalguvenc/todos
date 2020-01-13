import React ,{Component} from 'react';
import ToDoBanner from "./ToDoBanner";
import ToDoRow from "./ToDoRow";
import ToDoCreator from "./ToDoCreator";
import VisibilityControl  from "./VisibilityControl";

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state ={
      userName : "Dilek",
      todoItems : [
        {action : "Prepare an exam", done:false},
        {action : "Clean the house", done:false},
        {action : "Dinner", done:true},
        {action : "Make up", done:false},
        {action : "Sleep", done:true}],
      showCompleted: true
      
    }
  }
 updateNewTextValue =(event) => {
    this.setState({newItemText : event.target.value})
 }

  toggleToDo = (todo) => this.setState({todoItems:
    this.state.todoItems.map(item=> item.action === todo.action? {...item, done: !item.done} : item)

  });

  createNewTodo = (task)=> {
    if (!this.state.todoItems.find(item => item.action === task)){
      this.setState({
        todoItems : [...this.state.todoItems, {action : task, done:false}] 
      }, () => localStorage.setItem("todo", JSON.stringify(this.state)));
    }
  }
  todoTableRows = (doneValue) => this.state.todoItems.filter(item => 
       item.done === doneValue).map(item =>
       <ToDoRow key={item.action} item={item} callback ={this.toggleToDo}/>)
    
  componentDidMount =()=> {
    let data = localStorage.getItem("todo");
    this.setState(data != null
      ? JSON.parse(data)
      : {
      userName: "Dilek",
      todoItems: [
        {action : "Prepare an exam", done:false},
        {action : "Clean the house", done:false},
        {action : "Dinner", done:true},
        {action : "Make up", done:false},
        {action : "Sleep", done:true}],
      
      showCompleted: true
      });
  
  }

    render = () =>
    
  <div className="container">
  <div className="row">

  <div className="col-sm-6">
  <ToDoBanner name={this.state.userName} tasks={this.state.todoItems}/>
  </div>
   
  <div className="col-sm-6">
  <ToDoCreator callback={this.createNewTodo}/>
  </div>
  </div>
  

  <table className="table table-striped table-bordered">
  <thead> 
  <tr><th>Description</th><th>Done</th></tr>
  </thead>
  <tbody>{this.todoTableRows(false) }</tbody>
  </table>
  <div>
  <VisibilityControl description="Completed Task" isChecked={this.state.showCompleted} 
  callback={(checked)=>(this.setState({showCompleted:checked}))}/>
  </div>
  {this.state.showCompleted && 
  <table>
  <thead>
  <tr><th>Description</th><th>Done</th></tr>
  </thead>
  <tbody>{this.todoTableRows(true)}</tbody>
  </table>
  }
  </div>
    

}
