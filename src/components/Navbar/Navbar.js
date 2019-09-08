import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="ui secondary menu">
            <div className="header item">
                Our Company
            </div>
            <div className="right menu">
                <div className="">
                    <div className="user_detail">Username</div>
                    <div className="user_detail">Company Name</div>
                </div>
                <div className="item">Icon</div>
                <div className="item">Logout</div>
            </div>
        </div>
    );
};

export default Navbar;