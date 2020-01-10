import React ,{Component} from 'react';


export default class VisibilityControl extends Component{

render=()=>
<div>
<input type="checkbox" checked={this.props.isChecked} onChange={(e)=> this.props.callback(e.target.checked)}/>
<label>Show {this.props.description}</label>
</div>
}











