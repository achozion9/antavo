
import React, {Component, useState} from 'react';
import './messagesender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {connect} from "react-redux";
// import { useStateValue } from './StateProvider';
// import db from './firebase';
// import firebase from 'firebase';

class MessageSender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [
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
        // const [{ user }, dispatch] = useStateValue();
        const {user: currentUser} = this.props;
        // const [input, setInput] = useState('');
        // const [imageUrl, setImageUrl] = useState('');

        const handleSubmit = e => {
            e.preventDefault();

            // db.collection('posts').add({
            //     message: input,
            //     // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //     timestamp: 1524379940,
            //     profilPic: currentUser.photoURL,
            //     username: currentUser.displayName,
            //     image: imageUrl
            // })
            setInput('');
            setImageUrl('');
        };
        return (
            <div className="messageSender">
                <div className="messageSender__top">
                    <Avatar src={currentUser.photoURL}/>
                    <form>
                        <input
                            // value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="messageSender__input"
                            placeholder={`What's on your mind, ${currentUser.displayName}?`}/>
                        <input
                            value={currentUser.imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="image URL (Optional)"/>
                        <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                    </form>
                </div>
                <div className="messageSender__bottom">
                    <div className="messageSender__option">
                        <VideocamIcon style={{color: "red"}}/>
                        <h3>Live Video</h3>
                    </div>

                    <div className="messageSender__option">
                        <PhotoLibraryIcon style={{color: "green"}}/>
                        <h3>Photo/Video</h3>
                    </div>

                    <div className="messageSender__option">
                        <InsertEmoticonIcon style={{color: "orange"}}/>
                        <h3>Feeling/Activity</h3>
                    </div>
                </div>
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

export default connect(mapStateToProps)(MessageSender);
// export default MessageSender