import React from "react";

class Mailbox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // const listItems = this.props.unreadMsgs.map(msg => <p>{msg}</p>)

        return (
            <div>
            <h1>Mailbox</h1>
            { this.props.unreadMsgs.map(msg => <div>{msg}</div>)  }

            
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
