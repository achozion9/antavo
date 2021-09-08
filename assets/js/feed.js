import React, {useState, useEffect, Component} from 'react';
import './feed.css';
import StoryReel from './storyreel';
import MessageSender from './messagesender';
import Post from './post';
import {connect} from "react-redux";
// import db from './firebase';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // posts: [1, 2, 3],
            posts: [
                {
                    id: 1,
                    data: {
                        "profilePic": "profilePic",
                        "message": "message",
                        "timestamp": "timestamp",
                        "username": "username",
                        "image": "image",
                    }
                },
                {
                    id: 2,
                    data: {
                        "profilePic": "profilePic2",
                        "message": "message2",
                        "timestamp": "timestamp2",
                        "username": "username2",
                        "image": "image2",
                    }
                },
            ]
        };
    }

    render() {
        const {user: currentUser} = this.props;
        // const [posts, setPosts] = useState([]);
        // useEffect(() => {
        //     db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
        //         setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        //     ));
        // }, []);

        return (
            <div className="feed">
                <StoryReel/>
                <MessageSender/>
                {this.state.posts.map((post) => (
                    <Post
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}/>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Feed);
// export default Feed;