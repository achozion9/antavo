import React from 'react';
import './login.css';
import { Button } from '@material-ui/core';
// import { auth, provider } from './firebase';
import { useStateValue } from './stateprovider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // auth.signInWithPopup(provider)
        //     .then(result => {
        //         dispatch({
        //             type: actionTypes.SET_USER,
        //             user: result.user
        //         });
        //     }).catch(error => alert(error.message))
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png"
                     alt="Facebook Logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/250px-Facebook_Logo_%282019%29.svg.png"
                     alt="Logo" width="150px" />
            </div>
            <Button type="submit" onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login