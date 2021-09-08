import React, {Component} from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {connect} from "react-redux";
import {logout} from "./actions/auth";
import {history} from "./helpers/history";
import {clearMessage} from "./actions/message";
// import { useStateValue } from './StateProvider';

class Header extends Component {
    // const [{ user }, dispatch] = useStateValue();
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    logOut() {
        this.props.dispatch(logout());
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }

    render() {
        const {user: currentUser} = this.props;
        return (
            <div className="header">
                <div className="header__left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png"
                        alt="Facebook Logo"/>
                    <div className="header__input">
                        <SearchIcon/>
                        <input type="text" placeholder="Search Facebook"/>
                    </div>
                </div>
                <div className="header__center">
                    <div className="header__option header__option--active">
                        <HomeIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                        <FlagIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                        <SubscriptionsOutlinedIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                        <StorefrontOutlinedIcon fontSize="large"/>
                    </div>
                    <div className="header__option">
                        <SupervisedUserCircleIcon fontSize="large"/>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__info">
                        <Avatar src={currentUser.photoURL}/>
                        <h4> {currentUser.displayName} </h4>
                    </div>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                    <IconButton>
                        <a href="/login" className="nav-link" onClick={this.logOut}>
                            <ExpandMoreIcon/>
                        </a>
                    </IconButton>
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

export default connect(mapStateToProps)(Header);
// export default Header