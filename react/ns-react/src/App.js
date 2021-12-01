import './App.css';

function Welcome(props) {
  return (
    <h1>Hello, {props.name}.</h1>
  );
}

function UserImage(props) {
  console.log("UserImage", props);
  return <div className="user-image-container">
    <img className="user-image" src={props.img.src} alt={props.img.alt} />
  </div>
}

function UserInfo(props) {
  console.log("UserInfo", props);
  return (
    <div className="info">
      <UserImage img={props.img} />
      <div className="user-name">{props.name}</div>
    </div>
  );
}

function CommentDesc(props) {
  return (
    <div>{props.description}</div>
  );
}

function CommentTime(props) {
  return (
    <div>Commented @ {new Date().toLocaleTimeString()}</div>
  );
}

function Comment(props) {
  console.log("Comment", props);
  return (
    <div className="comment">
      <UserInfo img={props.img} name={props.name}  />
      <CommentDesc description={props.description} />
      <CommentTime time={new Date().toLocaleTimeString()} />
    </div>
  );
}

// Composing compenents - A component may use other components inside of itself.
function App() {
  let img = {
    src: 'https://i.pinimg.com/originals/1e/3e/9e/1e3e9ebab9ae9154a33fefcf937d2796.jpg',
    alt: 'Sunset'
  }
  return (
    <Comment img={img} name="Anurag" description="This describes you" />
  );
}

export default App;

// props are readonly
// pure funtions - that makes no change to its arguments - no side effects
function sum(a, b) {
  a = 10;
  return a + b;
}
// impure functions - that makes a permanent change to its arguments
// which reflects even outside the function
function withdraw(account, amount) {
  account.total -= amount;
}
