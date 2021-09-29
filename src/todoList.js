import React, { Component } from 'react';
import './todoList.css'

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            list: [],
            doneTasks: []
        }
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    handleInput(e) {
        if (e.key === 'Enter' && this.state.userInput !== '') {
            this.addToList();
        }
    }

    addToList() {
        let listArray = this.state.list;
        let doneList = this.state.doneTasks;
        listArray.push(this.state.userInput);
        doneList.push(false);

        this.setState({
            list: listArray,
            doneTasks: doneList,
            userInput: ''
        })
    }

    toggleCheckbox(i) {
        let doneList = this.state.doneTasks;
        doneList[i] = !doneList[i];

        this.setState({
            doneTasks: doneList
        })
    }

    tasksLeft() {
        let count = 0;

        this.state.doneTasks.forEach(element => {
            if (!element) {
                count++;
            }
        });

        return count;
    }

    deleteHandler = (i) => {
        let doneList = this.state.doneTasks;
        let todoList = this.state.list;
        doneList.splice(i, 1);
        todoList.splice(i, 1);
        this.setState({
            doneTasks: doneList,
            list: todoList
        });
    }

    clearCompleted() {
        for (let i = 0; i < this.state.doneTasks.length; i++) {
            if (this.state.doneTasks[i]) {
                this.deleteHandler(i);
                i--;
            }
        }
    }

    render() {
        return (
            <>
                <div className="newTodo">
                    <div className='checkbox'></div>
                    <input
                        onKeyPress={(e) => this.handleInput(e)}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.userInput}
                        placeholder='Create a new todo...'
                        type="text"
                    />
                </div>

                <div className="list">
                    <ul>
                        {this.state.list.map((val, i) => {
                            <li key={i}>
                                <div className="task">
                                    <input type="checkbox" name="check" id={'check-' + i} className='checkbox' onChange={() => this.toggleCheckbox(i)} checked={this.state.doneTasks[i]} />
                                    <label htmlFor={'check-' + i} className='lbl-checkbox checkbox'></label>
                                    <label htmlFor={'check-' + i} className='lbl-value'>{val}</label>
                                    <div className="close" onClick={e => this.deleteHandler(i)}></div>
                                </div>
                            </li>
                        }
                        )}
                    </ul>
                </div>


                <div className="filters">
                    <div className='items-left'>{this.tasksLeft()} items left</div>
                    <input type='radio' name='filter' id='All' className='all' value='All' defaultChecked />
                    <label htmlFor="All">All</label>
                    <input type='radio' name='filter' id='Active' className='active' value='Active' />
                    <label htmlFor="Active">Active</label>
                    <input type='radio' name='filter' id='Completed' className='completed' value='Completed' />
                    <label htmlFor="Completed">Completed</label>
                    <div className='btn-clear-completed' onClick={() => this.clearCompleted()}>Clear Completed</div>
                </div>
            </>
        );
    }
}