import React, { Component } from 'react'

class TodoItems extends Component {
    createTasks = item => {
        return (
            <div key={item.key} className="todoItemsMain">
                <div key={item.key} className="header">
                    <li key={item.key}>
                        {item.text}
                        <button key={item.key} onClick={() => this.props.deleteItem(item.key)} type="delete">Delete</button>
                    </li>
                </div>
            </div>
        )
    }
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)
        return <ul className="theList">{listItems}</ul>
    }
}

export default TodoItems

