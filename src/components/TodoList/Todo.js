import React, { Component } from 'react'

export default class Todo extends Component {
 
    // onRemove (Id){
        
    // }
    render() {
        return (
            // 'completed' class for completed todos
            <div  className={`todo ${this.props.completed? 'completed': ''}`} style={{ display: 'flex', margin:'5px' }}>
                <li className="todo-item">{this.props.title}</li>

                <button className="check-btn" onClick={this.props.onEdit.bind(this,this.props.id)} >
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={this.props.onRemove.bind(this,this.props.id)} >
                    <i className="fas fa-trash" aria-hidden="true" ></i>
                </button>
            </div>
        )
    }
}