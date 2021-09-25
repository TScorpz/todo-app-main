import React, { Component } from 'react';
import './todoList.css'

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            list: []
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
        listArray.push(this.state.userInput);

        this.setState({
            list: listArray,
            userInput: ''
        })
    }

    deleteHandler = (i) => {
        let todoList = this.state.list;
        todoList.splice(i, 1);
        this.setState({ list: todoList });
    }

    render() {
        return (
            <>
                <div className="newTodo">
                    <div className='check'></div>
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
                        {this.state.list.map((val, i) =>
                            <li key={i}>
                                <div className="task">
                                    <div className='check'></div>
                                    <p>{val}</p>
                                    <div className="close" onClick={e => this.deleteHandler(i)}></div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="filters">
                    <input type='radio' name='filter' id='All' className='all' value='All' />
                    <label htmlFor="All">All</label>
                    <input type='radio' name='filter' id='Active' className='active' value='Active' />
                    <label htmlFor="Active">Active</label>
                    <input type='radio' name='filter' id='Completed' className='completed' value='Completed' />
                    <label htmlFor="Completed">Completed</label>
                </div>
            </>
        );
    }
}