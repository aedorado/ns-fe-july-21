// Should begin with the count of 0
// Counter: 5
// Should increment the count every 1s
// Should decrement the count by 2 every 5s

import React from "react";


class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    // whenever we update the state by using the previous state
    // OR
    // whenever we determine the next state by making use of the current state
    // then we have to take the previous state as an argument in the set state function

    // React may batch (many into one) many setState calls into a single update for performance
    // This means that state may be updated asynchronously.. 

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => ({
                count: state.count + 1
            }));
        }, 1000);
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count - 2
                }
            });
            // Wrong
            // this.setState({
            //     count: this.state.count - 2
            // });
        }, 5000);
    }

    render() {
        return (
        <h1>
            {this.state.count}
            <br />
            <CounterChild counter={this.state.count} />
        </h1>);
    }

}

class CounterChild extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<p>Child: {this.props.counter} 
        <br />
        <ChildsChild counter={this.props.counter}></ChildsChild>
        </p>);
    }
}

class ChildsChild extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<p>Childs Child: {this.props.counter}</p>);
    }
}

export default Counter;
