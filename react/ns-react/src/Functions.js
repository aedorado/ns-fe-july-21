import './App.css';

import React, { useState } from 'react';
import { render } from 'react-dom';

function Greeting(props) {
    if (props.isLoggedIn) {
        return (<div>Welcome user!</div>);
    } 
    return (<div>Please login to continue!</div>)
}

function LoginControlF(props) {
    // hooks - React 16. ...
    // Hooks allow us to "hook" into React Class component like functionality
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    console.log(isLoggedIn, setIsLoggedIn);

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            { isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>LOGOUT</button>} 
            {/* loggedIn[0] = false */}
            { !isLoggedIn && <button onClick={() => setIsLoggedIn(true)}>LOGIN</button>}
        </div>

    );
}

function Bulbs(props) {
    let offImg = 'https://cdn3.vectorstock.com/i/1000x1000/89/72/object-bulb-off-vector-1858972.jpg';
    let onImg = 'https://blog.pegasuslighting.com/wp-content/uploads/2013/06/light-bulb.jpg';
    const [isOn, setIsOn] = useState(true);

    const switchOn = function () {
        setIsOn(true);
    }

    const switchOff = function() {
        setIsOn(false); // directly supply value
    }

    const toggle = () => {
        // isOn: true -> false
        // isOn: false -> true
        // setIsOn((isOn) => !isOn);
        setIsOn((isOn) => {
            return !isOn;
        });
        // supply a function 
        // this function takes the previous state
        // and derives the new state
    }

    return (
        <div className='bulb-container'>
            <button onClick={switchOn}>Switch On</button>
            <button onClick={switchOff}>Switch Off</button>
            <button onClick={toggle}>Toggle</button>
            {/* <button onClick={isOn ? switchOff: switchOn}>Toggle</button> */}
            <br></br>
            <img alt="On Bulb" src={isOn ? onImg : offImg}></img>
        </div>
    );
}

function Counter(props) {
    const [count, setCount] = useState(0);

    const add = () => setCount(count => count + 1);
    // 0 -> 1
    // 1 -> 2
    // 2 -> 3
    // ..
    // 50 -> 51

    const sub = () => setCount((count) => (count - 1));

    return (
        <div>
            <button onClick={sub}>-</button>
            <p>{count}</p>
            <button onClick={add}>+</button>
        </div>
    );
}

function MultiCounter(props) {
    const [c1, setC1] = useState(0);
    const [c2, setC2] = useState(1);
    const [totalButtonClicks, setTotalButtonClicks] = useState(0);

    const sub = () => {
        setTotalButtonClicks((totalButtonClicks) => totalButtonClicks + 1);
        setC1((c1) => c1 - 1);
    }

    const add = () => {
        setTotalButtonClicks((totalButtonClicks) => totalButtonClicks + 1);
        setC1((c1) => c1 + 1);
    }

    const div = () => {
        setTotalButtonClicks((totalButtonClicks) => totalButtonClicks + 1);
        setC2((c2) => c2 / 2);
    }

    const mul = () => {
        setTotalButtonClicks((totalButtonClicks) => totalButtonClicks + 1);
        setC2((c2) => c2 * 2);
    }

    return (
        <div>
            <div>
                <button onClick={sub}>-</button>
                {c1}
                <button onClick={add}>+</button>
            </div>
            <div>
                <button onClick={div}>/</button>
                {c2}
                <button onClick={mul}>*</button>
            </div>
            <p>Buttons were clicked {totalButtonClicks} times.</p>
        </div>
    );
}

function FunctionC(props) {
    return (
        <MultiCounter></MultiCounter>
    );
}

export default FunctionC;

