
import React from 'react';

class Warning extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return <div>Warning!</div>
    }
}

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showWarning: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({showWarning: !state.showWarning}));          
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle}>
                    { this.state.showWarning ? 'HIDE' : 'SHOW' }
                </button>
                <Warning show={this.state.showWarning} />
            </div>
        );
    }


}

export default Page;