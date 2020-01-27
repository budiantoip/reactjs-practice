import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js'
import  Biodata , {Greeting} from './Functions.js';
import Clicker from './Clicker.js';
import Toggle from './Toggle.js';

// class App extends React.Component {
//     render() {
//         return <div className = "App" >
//         <header className = "App-header" >
//         <img src = { logo } className = "App-logo" alt = "logo" / >
//         {/* <Greeting name="Gading" age="25"/>
//         <Greeting name="Arva"age="20"/> */}
//         {/* <Biodata name="Budianto" age="39" /> */}
//         {/* <Timer start="0" /> */}
//         {/* <Clicker /> */}
//         <Toggle />
//         </header >
//         </div>;
//     }
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: '',
            items: [],
            isDisplayListLabel: '',
            options: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            todoItem: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            // items: this.state.items.concat([this.state.todoItem])
            items: [...this.state.items, this.state.todoItem],
            isDisplayListLabel: <div><br/>Todo List</div>,
            options: [...this.state.options, <li class="list-group-item">{this.state.todoItem}</li>]
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todoItem} onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
                {this.state.isDisplayListLabel}
                <ul>
                    {this.state.options}
                </ul>
            </div>
        );
    }
}

export default App;