import React, {Component} from 'react';

export default class ToDoBanner extends Component{

    render = () =>
    <h4>
    {this.props.name}'s To Do List
    ({this.props.tasks.filter(t=>!t.done).length} items to do)  
    </h4>
}


