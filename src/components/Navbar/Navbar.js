import React from 'react';

import './Navbar.css';
import Logo from '../../assets/advo_logo.jpg';

const Navbar = ({FontAwesomeIcon, faUserCircle, faSignOutAlt}) => {
    return (
        <div className="ui secondary menu navbar">
            <div className="company_logo item">
                <img className="company_logo_img" src={Logo} alt="company_logo" />
                <div className="powered">
                    <span>powered by</span>
                    <img className="small" src={Logo} alt="company_logo" />
                </div>
            </div>
            <div className="right menu user_session">
                <div className="">
                    <div className="username_detail">Username</div>
                    <div className="company_detail">Company Name</div>
                </div>
                <div className="icon item"><FontAwesomeIcon icon={faUserCircle} /></div>
                <div className="icon item"><FontAwesomeIcon icon={faSignOutAlt} /></div>
            </div>
        </div>
    );
};

export default Navbar;