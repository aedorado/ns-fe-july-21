import { useReducer, useState } from "react";

// If email is invalid
// (it does not cantain an @ and is 2 characters or shorter)
// Show a error message 'Invalid Email'

// if password is atleast 6 characters long

// const initialState = {count: 0};

// function counterReducer(state, action) {
//     switch (action.type) {
//         case "inc":
//             return { count: state.count + 1 }
//         case "dec":
//             return { count: state.count - 1 };
//         case "res":
//             return { count: 0 };
//     }
//     return { count: state.count };
// }


// function LoginRed(props) {
//     const [state, dispatch] = useReducer(counterReducer, initialState);

//     return (
//         <div>
//             <button onClick={() => dispatch({type: "dec"})}>-</button>
//             <div>Count: {state.count}</div>
//             <button onClick={() => dispatch({type: "inc"})}>+</button>
//             <br />
//             <button onClick={() => dispatch({type: "res"})}>Reset</button>
//         </div>
//     );
// }

// const initialCounterState = {count: 0};

// function counterReducer(state, action) {
//     switch (action.type) {
//         case 'inc': return {count: state.count + 1}; break;
//         case 'dec': return {count: state.count - 1}; break;
//         default: return {count: state.count * 20};
//     }
// }

// function LoginRed(props) {

//     // const [count, setCount] = useState(0);
//     const [state, dispatch] = useReducer(counterReducer, initialCounterState);

//     return (
//         <div>
//             {/* <button onClick={() => setCount((count) => count - 1)}>-</button> */}
//             <button onClick={() => dispatch({type: 'dec'})}>-</button>
//             <div>{state.count}</div>
//             <button onClick={() => dispatch({type: 'inc'})}>+</button>
//             {/* <button onClick={() => setCount((count) => count + 1)}>+</button> */}
//         </div>
//     );

// }

const initalState = {
    email: '',
    isEmailValid: false,
    password: '',
    isPassValid: false,
    isFormValid: false
}

const initialEmailState = { email: '', isValid: false };
const initialPasswordState = { password: '', isValid: false };

function emailReducer(state, action) {
    switch (action.type) {
        case "EMAIL_INPUT":
            return { email: action.val, isValid: state.isValid };
        case "CHECK_EMAIL":
            return { email: state.email, isValid: state.email.includes('@') && state.email.length > 2 };
    }
    return {
        email: '', isValid: false
    };
}

function passReducer(state, action) {
    switch (action.type) {
        case "PASS_INPUT": return { password: action.val, isValid: state.isValid };
        case "CHECK_PASS": return { password: state.password, isValid: state.password.length > 6 };
    }
    return {
        password: state.password, isValid: state.isValid
    }
}

function LoginRed(props) {

    const [emailState, dispatchEmail] = useReducer(emailReducer, initialEmailState);
    const [passState, dispatchPassword] = useReducer(passReducer, initialPasswordState);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState(null);
    // const [passValid, setPassValid] = useState(null);
    const [formValid, setFormValid] = useState(null);

    const handleEmail = (e) => {
        dispatchEmail({type: 'EMAIL_INPUT', val: e.target.value});
        // setEmail(e.target.value);
    }

    const handlePass = (e) => {
        dispatchPassword({type: 'PASS_INPUT', val: e.target.value});
    }

    // current -> next
    // setState((prev) => { ... })

    const handleSubmit = (e) => {
        // LIMITATION OF SET STATE FUNCTIONS
        // 
        // in this function, we need the lastest value of emial state
        // but as we can see here, the function only receives the latest value of state
        // emailIsValid
        // As such I do not know, if the latest state changes for email have been applied or not?
        // setEmailIsValid((emailIsValid) => {
        //     console.log(emailIsValid);
        //     return false;
        //     // return email.includes('@') && email.length > 2
        // });
        dispatchEmail({ type: 'CHECK_EMAIL' });
        dispatchPassword({type: 'CHECK_PASS'});
        // setPassValid(password.length > 6);
        // console.log(emailState, passState)
        setFormValid(emailState.isValid && passState.isValid);
    }

    return (
        <div>
            <input value={emailState.email} onChange={handleEmail} placeholder="email" type="text"></input><br />
            <input value={passState.password} onChange={handlePass} placeholder="password" type="password"></input>
            <br />
            <input onClick={handleSubmit} type="submit" />
            <div>{ !emailState.isValid && 'Email Invalid' }</div>
            <div>{ !passState.isValid && 'Password is shorter than expected' }</div>
            <div> From is { !formValid && 'in' }valid. </div>
        </div>
    );

}

export default LoginRed;

