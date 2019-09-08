import React from 'react';

import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="ui secondary vertical menu">
            <div className="item">Burger</div>
            <div className="active item">Dashboard</div>
        </div>
    );
};

export default Sidebar;