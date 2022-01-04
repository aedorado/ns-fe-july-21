import ReactDOM from 'react-dom';
import React, { Component, Fragment, useEffect, useState, useRef } from "react";
import useCounter from "./hooks/use-counter";
import useFetch from "./hooks/use-fetch";
import useFetchWithLoader from "./hooks/use-fetch-with-loader";

function PCounter(props) {
    const counter = useCounter();
    return (<div className="counter">{counter}</div>);
}

function NCounter(props) {
    const counter = useCounter(false);
    return (<div className="counter">{counter}</div>);
}

function Home() {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url).then(response => response.json())
        .then((data) => setPosts(data));
    }, []);
    return (<div>{ posts && posts.map(post => <p key={post.id}> {post.title} </p>) }</div>);
}   

function HomeWithHook() {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts');
    return (<div>{ posts && posts.map(post => <p key={post.id}> {post.title} </p>) }</div>);
}

function HomeWithLoaderHook() {
    const [posts, isLoading] = useFetchWithLoader('http://jsonplaceholder.typicode.com/posts');
    console.log(posts, isLoading);
    return (
        <div>
            { isLoading && 'Loading ...' }
            { posts && posts.map(post => <p key={post.id}> {post.title} </p>) }
        </div>);
}

function Fragments(props) {
    return props.children;
}

function MyModal(props) {
    return (<p>I am Modal</p>);
}

function MyPortalModal(props) {
    return ReactDOM.createPortal(
        (<p>I am Modal</p>),
        document.body
    );
}

function MyComponent(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id="my-comp">
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {
                isOpen && <MyPortalModal />
            }
        </div>
    )
}

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.buttonClicked = this.buttonClicked.bind(this);
        this.countState = 101;
    }

    // componentDidMount() {
    //     this.inputRef.current.focus();
    // }

    buttonClicked() {
        console.log(this.inputRef);
        this.inputRef.current.focus();
    }

    render() {
        return (
            <>
                <input id="input-element" type="text" ref={this.inputRef}></input>
                <input type="button" value="Focus on the input box" onClick={this.buttonClicked}></input>
            </>
        );
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.customInputCompRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.customInputCompRef.current.inputRef);
        this.customInputCompRef.current.inputRef.current.focus();
        // this.customInputCompRef.current.buttonClicked();
    }

    render() {
        return (
            <CustomTextInput ref={this.customInputCompRef} />
        );
    }
}

function CustomTextInputF(props) {

    const textInp = useRef(null);

    let handleSubmit = () => {
        console.log(textInp.current.value);
    };

     return (
         <>
            <input type="file"></input>
            <input type="text" ref={textInp}></input>
            <input type="button" value="Focus on Input" onClick={() => textInp.current.focus()}></input>
            <input type="button" value="Submit" onClick={handleSubmit}></input>
         </>
     );
}

// Refs provide a way to access DOM nodes/React elements
// Do not overuse refs
// 1. Managing input element focus
// 2. Text selection
// 3. Triggering animations

function GithubLoader(props) {

    const [userDetails, setUserDetails] = useState(null);
    let usernameRef = useRef(null);

    let buttonClicked = () => {
        let username = usernameRef.current.value;
        const url = `https://api.github.com/users/${username}`;
        fetch(url).then((res) => res.json())
        .then(data => {
            console.log(data);
            setUserDetails(data)
        });
    }

    return (
        <div>
            <input ref={usernameRef} type="text"></input>
            <input value="Fetch Details" onClick={buttonClicked} type="button"></input>
            <br />
            {userDetails && <img src={userDetails.avatar_url} alt="user image"></img>}
        </div>
    );

}

class TwoCounters extends React.Component {
    constructor(props) {
        super(props);
    }

    // this.myRef.current = div
    // When a ref is passed to an element in render method
    // a reference to that DOM Node becomes accessible
    // via the current attribute of the ref
    render() {
        return (<GithubLoader />);
        // return <div onClick={this.handleClick} ref={this.myRef}>
        //     DIV Content
        // </div>;
    }
}

// function TwoCounters(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

// function Example() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  


export default TwoCounters;
