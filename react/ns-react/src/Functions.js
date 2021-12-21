import './App.css';

import React, { useEffect, useState } from 'react';
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

// side effects?
// Main work of react component - Return some JSX
// Any operations that do not target the final output values
// of a react component are termed as side effects!

// fetch ~ 
// DOm manipulation is side effect
// timers

// component rendering 
// & side effect logic are independent
// to seprate them, we should not
// perform side effects in the component body
// Why? Because component body is mainly used to compute the output

// What to do now?
// Decouple rendering from side-effects
// useEffect
// run side effects, idependently of rendering logic

// arguments of useEffect? 
// useEffect takes 2 args:
// useEffect(a function i.e. the side effect, when should a side effect run)
// useEffect(callback, [dependencies])
// callback - this is the function that has the side effect logic
// dependencies - optional, array. The useEffect callback is executed only when
// any of the dependecies have changed
// between 2 rendering of the component

// Dependencies
// 1. Dont provide - Will run after every rendering
// 2. [] - Runs only after the very first rendering
// 3. [x, y, z ...] - Only when one of the dependecny values will change

// How can we simulate lify-cylc emthods with use-effect
// 1. ComponentDidMount?
// 2. ComponentDidUpdate

function Greet(props) {
    const name = props.name;
    const message = `Hello ${name}`; // contributes to final output

    // ComponentDidMount
    useEffect(() => {
        document.title = `Greetings to ${name}`;
    }, []);

    // ComponentDidUpdate
    useEffect(() => {
        document.title = `Greetings to ${name}`;
    }, [name]);

    // document.title = `Greetings to ${name}`; // side-effect; Not Good

    return (    // ontributes to final output
        <div>{message}</div>
    );
}

function Github(props) {

    const [userName, setUserName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const url = `https://api.github.com/users/${userName}`;
        console.log(userName !== "");
        if (userName !== "") {
            setIsLoading(true);
        }
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setUserData({
                'avatar_url': data.avatar_url,
                'name': data.name,
            });
            setIsLoading(false);
        });
    }, [userName]);

    return (
        <div>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='username'></input>
            {
                userData && 
                <div>
                    {isLoading && <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />}
                    Name: {userData.name}
                    <img src={userData.avatar_url} alt="User Image" />
                </div>
            }
        </div>
    );
}

function FunctionC(props) {
    return (
        <Github></Github>
    );
}

export default FunctionC;

