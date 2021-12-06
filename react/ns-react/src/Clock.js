// import './App.css';

import React from "react";

// function Clock() {
//   return (<div>I am clock</div>);
// }

// 1. Create a class with the same name as the function
// 2. Make that class extend React.Component
// 3. Add a method called render inside the class
// 4. Add the body of the render function

// To add props
// 1. Create a constructor in the class
// 2. Give it an argument of props
// 3. Inside the constructor, we call super(props)

// STATE - value of the variables local to a component
// that describes a component at a given point in time

// to add initial state
// 1. Inside constructor we add a variable called state
// as this.state
// 2. We set that variable eqaul to an object
// 3. Then we populate the state by adding key value pairs 
// to the above object

class Clock extends React.Component {

  // initialzie the state
  // bind the methods
  // called before the component is mounted
  // Only in here can we assign state directly
  // do not assign state from props
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(), // 02/12/2021 22:05:01
      random: Math.floor(Math.random() * 100),
      sfp: props.sfp, 
    }
  }

  tick() {
    // Whenever we call setState
    // the render function is called
    // this.state.date = new Date();
    this.setState({
      date: new Date()
    });
    // 02/12/2021 22:05:02
    // 02/12/2021 22:05:03
    // 02/12/2021 22:05:04
    // 02/12/2021 22:05:05
    // 02/12/2021 22:05:06
  }

  // mounting - the component is added to the DOM Tree
  // Method is called whenever a component completes mounting
  // a good place to keep things like network calls, timers, etc
  // used to interact with the broser
  componentDidMount() {
    console.log('cdm');
    // State updates are merged
    // 
    this.timerID = setInterval(() => this.tick(), 1000);
    this.timerID = setInterval(() => {
      this.setState({
        random: Math.floor(Math.random() * 100)
      })
    }, 5000);
  }

  // unmounting - removed form the DOM Tree
  // method is invoked immediately berfore a component 
  // is unmounted and destroyed
  // Perform any clean ups
  // cancel network requests
  // clear any timers
  componentWillUnmount() {
    console.log('Component going to unmount');
    clearInterval(this.timerID);
  }

  // only required inside a class component
  // it uses the states and props
  // to be able to return a react element
  // text (string and numbers) - used as text nodes
  // boolens or null - renders nothing
  // render method must be a pure function
  // the render method never changes the state of the component
  // localStorage, window, window.location ... 
  // should not interact with the broser
  render() {
    return (
      <div>
        <h2>Time is {this.state.date.toLocaleTimeString()}</h2>
        <h2>{this.state.random}</h2>
      </div>
    );
  }
}


export default Clock;


