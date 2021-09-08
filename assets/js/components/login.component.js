import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import '../login.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../actions/auth";

import { isEmail } from "validator";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });

        this.form.validateAll();

        const { dispatch, history } = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(login(this.state.username, this.state.password))
                .then(() => {
                    // history.push("/profile");
                    history.push("/");
                    window.location.reload();
                })
                .catch(() => {
                    this.setState({
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { isLoggedIn, message } = this.props;

        if (isLoggedIn) {
            // return <Redirect to="/profile" />;
            return <Redirect to="/" />;
        }

        return (
                    <div className="loginsignup">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="content-left">
                                    <h1>Life network</h1>
                                    <h2>Life network helps you connect and share with the people in your life.</h2>
                                </div>
                                <div className="content-right">
                                    <Form
                                        onSubmit={this.handleLogin}
                                        ref={(c) => {
                                            this.form = c;
                                        }}
                                    >
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.onChangeUsername}
                                                validations={[required]}
                                                placeholder="Email address or phone number"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onChangePassword}
                                                validations={[required]}
                                                placeholder="Password"/>
                                        </div>
                                        <div className="login">
                                            <button
                                                className="btn btn-primary btn-block"
                                                disabled={this.state.loading}
                                            >
                                                {this.state.loading && (
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                )}
                                                <span>log in</span>
                                            </button>
                                        </div>
                                        <div className="forgot">
                                            <a href="">Forgotten account?</a>
                                        </div>
                                        <div className="create-btn">
                                            <a href="" className="btn">create new account</a>
                                        </div>

                                        {message && (
                                            <div className="form-group">
                                                <div className="alert alert-danger" role="alert">
                                                    {message}
                                                </div>
                                            </div>
                                        )}
                                        <CheckButton
                                            style={{ display: "none" }}
                                            ref={(c) => {
                                                this.checkBtn = c;
                                            }}
                                        />
                                    </Form>
                                    <p><a href="">Create a Page</a> for a celebrity, band or business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}

export default connect(mapStateToProps)(Login);
