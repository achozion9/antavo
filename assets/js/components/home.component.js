import React, { Component } from "react";

import UserService from "../services/user.service";
import Header from "../header";
import Sidebar from "../sidebar";
import Feed from "../feed";
import Widgets from "../widgets";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (
            <>
                <Header />
                <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            </>
        );
    }
}
