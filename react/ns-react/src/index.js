import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Counter from './Counter';
import CounterWithButton from './CounterWithButton';
import Greeting from './Greeting';
import LoginControl from './Greeting';
import Mailbox from './Mailbox';
import Page from './Page';
import Blog from './Blog';
import Forms from './Form';
import LSU from './LSU';

// let h1 = React.createElement(
//   "h1", // type of element
//   { style: { color:"blue", fontFamily: 'Tahoma' }, className: "heading", id: "heading-1" }, // attributes
//   "Hello World" // content/children
// );

// let para = React.createElement(
//   "p",
//   null,
//   "Lorem Ipsum"
// );

// let div = React.createElement(
//   "div",
//   { className: "my-div" },
//   React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "Oranges"),
//     React.createElement("li", null, "Pear"),
//     React.createElement("li", null, "Chikoo"),
//     React.createElement("li", {style: {color: "yellow"}}, "Mango"),
//   )
// )

// MVC - model (data), view (ui), controller (interaction)

// JSX - Javascript Syntax Extension
// JSX is used to declare/describe the UI of a component/element
// const firstName = "Anurag";
// const lastName = "Das";
// const element = <h1>Hello, {name}!</h1>;
// const element = <h1>Hello, {1 + 2}!</h1>;

// const user = {
//   firstName: 'Anurag',
//   lastName: 'Das',
//   id: 'user-id'
// }

// function formatName(firstName, lastName) {
//   return firstName + ' ' + lastName;
// }

// function formatNameForUser(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//   if (user) {
//     const ele = <div>
//       <h1 id={user.id}>Hello, {formatNameForUser(user)}</h1>
//       <h2>Element</h2>
//     </div>;
//     return ele;
//   }
//   return <h1>Hello Dr. Strange</h1>;
// }
// const element = getGreeting(user);
// const element = <h1> Hello, {formatNameForUser(user)}! </h1>;
// const element = <h1> Hello, {formatName(firstName, lastName)}! </h1>;

// ReactDOM.render(
  // <App />,
  // document.getElementById('root')
// );

// ReactDOM.render(
  // getGreeting(user),
  // document.getElementById('root')
// );

// 1. Element/component to be rendered
// 2. Where to render it

// function tick() {
//   let date = new Date();
//   date = date.toLocaleTimeString();
//   ReactDOM.render(
//     <div>
//       <h1>Hello world</h1>
//       <h2>Time is {date}</h2>
//     </div>,
//     document.getElementById('root'),
//   );
// }

// setInterval(tick, 1000);

// REACT CLASS - COMPONENTS
// Componets allow us to split the UI
// into independent, resuable pieces
// We can work with each piece in isoloation

// Functions
// Class

// Props - are the input supplied to components
// these are properties that may affect the working of the component

// <div class="div-1" id="" >

// 1. Time value should be determined on its own
// 2. The clock should update itself

// function Clock(props) {
//   return (
//     <div>
//       <h1>It is {props.timeValue}</h1>
//     </div>
//   );
// }

// function tick() {
//   // ele = ...
//   ReactDOM.render(
//     <Clock timeValue={new Date().toLocaleTimeString()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// ReactDOM.render(
  // <CounterWithButton />,
  // document.getElementById('root')
// );

let messages = [{ id: '1', msgText: 'Hi. This is msg 1' }, { id: '2', msgText: 'Lets go 2' }, {id: 3, msgText: '3rd wala msg'}];
// messages = [];

const posts = [
  { id: 1, title: 'News Updates', content: 'This is the news', date: new Date() },
  { id: 2, title: 'Newton Updates', content: 'This is the update', date: new Date() },
  { id: 3, title: 'Earth Updates', content: 'Its cold on earth', date: new Date() }
]


ReactDOM.render(
  <LSU />,
  // <Blog posts={posts} />,
  // <Mailbox unreadMsgs={messages} />,
  // <Page />,
  document.getElementById('root')
);

// setTimeout(() => {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );
// }, 20000)

// ReactDOM.render(
//   <App />, // Welcome({ name: "Anurag", age:"25" });
//   document.getElementById('root')
// );






