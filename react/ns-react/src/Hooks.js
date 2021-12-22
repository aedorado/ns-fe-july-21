import { useReducer, useState } from "react";

// If email is invalid
// (it does not cantain an @ and is 2 characters or shorter)
// Show a error message 'Invalid Email'

// if password is atleast 6 characters long

const initialCounterState = {count: 0};

function counterReducer(state, action) {
    switch (action.type) {
        case 'inc': return {count: state.count + 1}; break;
        case 'dec': return {count: state.count - 1}; break;
        default: return {count: state.count * 20};
    }
}

function LoginRed(props) {

    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(counterReducer, initialCounterState);

    return (
        <div>
            {/* <button onClick={() => setCount((count) => count - 1)}>-</button> */}
            <button onClick={() => dispatch({type: 'dec'})}>-</button>
            <div>{state.count}</div>
            <button onClick={() => dispatch({type: 'inc'})}>+</button>
            {/* <button onClick={() => setCount((count) => count + 1)}>+</button> */}
        </div>
    );

}


// function LoginRed(props) {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailIsValid, setEmailIsValid] = useState(null);
//     const [passValid, setPassValid] = useState(null);
//     const [formValid, setFormValid] = useState(null);

//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     }

//     const handlePass = (e) => {
//         setPassword(e.target.value);
//     }

//     // current -> next
//     // setState((prev) => { ... })

//     const handleSubmit = (e) => {
//         // LIMITATION OF SET STATE FUNCTIONS
//         // 
//         // in this function, we need the lastest value of emial state
//         // but as we can see here, the function only receives the latest value of state
//         // emailIsValid
//         // As such I do not know, if the latest state changes for email have been applied or not?
//         setEmailIsValid((emailIsValid) => {
//             console.log(emailIsValid);
//             return email.includes('@') && email.length > 2
//         });
//         setPassValid(password.length > 6);
//         setFormValid(emailIsValid && passValid);
//     }

//     return (
//         <div>
//             <input value={email} onChange={handleEmail} placeholder="email" type="text"></input><br />
//             <input password={password} onChange={handlePass} placeholder="password" type="password"></input>
//             <br />
//             <input onClick={handleSubmit} type="submit" />
//             <div>{ !emailIsValid && 'Email Invalid' }</div>
//             <div>{ !passValid && 'Password is shorter than expected' }</div>
//             <div> From is { !formValid && 'in' }valid. </div>
//         </div>
//     );

// }

export default LoginRed;

