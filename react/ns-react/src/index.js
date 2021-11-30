import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let h1 = React.createElement(
  "h1", // type of element
  { style: { color:"blue", fontFamily: 'Tahoma' }, className: "heading", id: "heading-1" }, // attributes
  "Hello World" // content/children
);

// let para = React.createElement(
//   "p",
//   null,
//   "Lorem Ipsum"
// );

let div = React.createElement(
  "div",
  { className: "my-div" },
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Oranges"),
    React.createElement("li", null, "Pear"),
    React.createElement("li", null, "Chikoo"),
    React.createElement("li", {style: {color: "yellow"}}, "Mango"),
  )
)

// MVC - model (data), view (ui), controller (interaction)

// JSX - Javascript Syntax Extension
// JSX is used to declare/describe the UI of a component/element
const firstName = "Anurag";
const lastName = "Das";
// const element = <h1>Hello, {name}!</h1>;
// const element = <h1>Hello, {1 + 2}!</h1>;

const user = {
  firstName: 'Anurag',
  lastName: 'Das',
  id: 'user-id'
}

function formatName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function formatNameForUser(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    const ele = <div>
      <h1 id={user.id}>Hello, {formatNameForUser(user)}</h1>
      <h2>Element</h2>
    </div>;
    return ele;
  }
  return <h1>Hello Dr. Strange</h1>;
}
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

function tick() {
  let date = new Date();
  date = date.toLocaleTimeString();
  ReactDOM.render(
    <div>
      <h1>Hello world</h1>
      <h2>Time is {date}</h2>
    </div>,
    document.getElementById('root'),
  );
}

setInterval(tick, 1000);

