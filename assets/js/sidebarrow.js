import React from 'react';
import './sidebarrow.css';
import { Avatar } from '@material-ui/core';
import {connect} from "react-redux";

function SidebarRow({src, Icon, title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(SidebarRow);
// export default SidebarRow