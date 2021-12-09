import React, { Component } from "react"

class UserGreeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2>Welcome User</h2>
        );
    }
}

class GuestGreeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2>Please login!</h2>
        );
    }
}

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button onClick={this.props.clickHandler}>Login</button>
        );
    }
}

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button onClick={this.props.clickHandler}>Logout</button>
        );
    }
}

class Greeting extends React.Component {

    constructor(props) {
        super(props);   // props.isLoggedIn
    }

    render() {
        if (this.props.isLoggedIn) { // <- undefined | false | true
            return (
                <div>
                    <UserGreeting />
                </div>
            );
        } else {
            return (
                <div>
                    <GuestGreeting />
                </div>
            );
        }
    }
}

class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.setState({
            isLoggedIn: false
        });
    }

    handleLogin() {
        this.setState({
            isLoggedIn: true
        });
    }

    render() {
        let button;
        if (this.state.isLoggedIn) {
            button = <LogoutButton clickHandler={this.handleLogout} />
            // button = <button onClick={this.handleLogout}>Logout</button>
        } else {
            button = <LoginButton clickHandler={this.handleLogin} />; // <button>Login</button>
            // button = <button onClick={this.handleLogin}>Login</button>
        }
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        );
    }

}

export default LoginControl;

