// Display count on the screen as "Count: x"
// Have a + button that increases the count by 1
// Have a - button that decreases the count by 1
import './App.css';
import React from "react";

// define the event handler
// assign the event handler
// bind the event handler

// if you do not wish to do the binding in the constructor [Ex: increment]
// 1. Use arrow functions to define the handler [Ex: reset]
// 2. User arrow function while calling the handler [Ex: decrement]

class CounterWithButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.state =  {
            count: 0
        };
        // this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
        // this.reset = this.reset.bind(this);
    }

    // when setting the next state form the previous state
    decrement(e) {
        console.log(e);
        // console.log(this); // in strict mode this is undefined
        // console.log(this); // in unstrict mode this points to window object
        this.setState((state) => {
            return {
                count: state.count - 1
            }
        });
    }

    increment(e) {
        console.log(e);
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        })
    }

    // arrow functions are lexically bind
    reset = (e) => {
        console.log(e);
        this.setState({
            count: 0
        });
    }

    changeBy = (value, e) => {
        console.log(value, e);
        this.setState((state) => {
            return {
                count: state.count + value
            }
        })
    }

    render() {
        return (
            <div className="counter-with-button">
                <button onClick={(e) => { this.decrement(e) }}>-</button>
                <span className="counter-with-button-span">Count: {this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br /><button onClick={this.reset}>Reset</button>
                <br /><br /><button onClick={(e) => { this.changeBy(10, e) }}>Increase by 10</button>
            </div>
        );
    }
}



// {/* <button onclick="decrement()">
//     Woo Hoo
// </button> */}

export default CounterWithButton;
