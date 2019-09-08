import React from 'react';

import './Sidebar.css';

const Sidebar = ({dashboardIcon, FontAwesomeIcon, faBars}) => {
    return (
        <div className="ui secondary vertical menu">
            <div className="item"><FontAwesomeIcon icon={faBars} /></div>
            <div className="active item dashboard_icon"><img src={dashboardIcon} alt="dashboard icon" /></div>
        </div>
    );
};

export default Sidebar;