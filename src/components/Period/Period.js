import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import './Period.css';

class Period extends React.Component {

    render() {
        return (
            <div className="flex_item_three">
                <div className="flex period_container">
                    <div className="period_item"><FontAwesomeIcon icon={faCalendarAlt} /></div>
                    <div className="period_item">Period</div>
                    <div className="period_item"> 11 September 2018 - 14 September 2018 </div>
                    <div className="period_item"><FontAwesomeIcon icon={faChevronDown} /></div>
                </div>
            </div>
        );
    };
};

export default Period;