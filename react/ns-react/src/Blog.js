
import React from 'react';

class Blog extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const postList = (<ul>
            {
                this.props.posts.map((post) => <li key={post.id}>{post.title}</li>)
            }
        </ul>);

        const content = this.props.posts.map((post) => 
            <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <h6>{post.date.toLocaleString()}</h6>
            </div>
        );

        return (
            <div>
                {postList}
                <hr />
                {content}
            </div>
            
        );
    }

}

// <div>
// <h3>title</h3>
// <p>content</p>
// </div>


export default Blog;

