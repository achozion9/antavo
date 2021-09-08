import React, {Component} from 'react';
import './sidebar.css';
import SidebarRow from './sidebarrow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';
// import { useStateValue } from './StateProvider';
import {connect} from "react-redux";

class Sidebar extends Component {
    // const [{ user }, dispatch] = useStateValue();
    render() {
        const {user: currentUser} = this.props;
        return (
            <div className="sidebar">
                <SidebarRow src={currentUser.photoURL} title={currentUser.displayName}/>
                <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
                <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
                <SidebarRow Icon={PeopleIcon} title="Friends"/>
                <SidebarRow Icon={ChatIcon} title="Messenger"/>
                <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
                <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
                <SidebarRow Icon={ExpandMoreOutlined} title="Market"/>
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

export default connect(mapStateToProps)(Sidebar);
// export default Sidebar