import React from "react";

class MailItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<p>{this.props.msg.msgText}</p>);
    }
}

// keys help react
// how? they help react to identify 
// what? items that have changed, added or removed

// how to pick a key?
// The key should be unique
// unique amongst? unique amongst its sibling elements

// most often we use unique ids as keys

// if we dont have a unique id?
// use the index of the item in the list
// not recommended 
// why? impact preformance
// may lead to bugs in the component state


class Mailbox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // const listItems = this.props.unreadMsgs.map(msg => <p>{msg}</p>)
        return (
            <div>
            <h1>Mailbox</h1>

            {/* { this.props.unreadMsgs.map(msg => <MailItem key={msg.id} msg={msg} />) } */}
            { this.props.unreadMsgs.map((msg, index) => <MailItem key={index} msg={msg} />) }

            {/* { this.props.unreadMsgs.map(msg => <tr><td>msg.name</td><td>msg.title</td></tr>)  } */}

            {/* {listItems} */}

            {/* <ul> */}
                {/* {listItems} */}
            {/* </ul> */}

            
            {/* { msgLen > 0 && <p> You have {msgLen} unread messages. </p> } */}
            {/* <p>{ msgLen ? `You have ${msgLen} unread messages.` : '' }</p> */}
            {/* <p>You have {this.props.unreadMsgs.length} unread messages.</p> */}
            </div>
        );
    }

}

export default Mailbox;
