import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './PeriodModal.css';

const PeriodModal = () => {
    return (
        <div className="modal_container">
            <div className="flex modal_header">
                <div className="flex_item_one"><FontAwesomeIcon icon={faCalendarAlt} /></div>
                <div className="flex_item_seven">Period</div>
                <div className="flex_item_one times"><FontAwesomeIcon icon={faTimes} /></div>
            </div>
            <div className="flex modal_content">
                <div className="flex_item_three modal_sidebar">
                    <div className="sidebar_item">Today</div>
                    <div className="sidebar_item">Yesterday</div>
                    <div className="sidebar_item">Last 7 days</div>
                    <div className="sidebar_item">Last 30 days</div>
                    <div className="sidebar_item">This Month</div>
                    <div className="sidebar_item last">Custom</div>
                    <div className="sidebar_btn">Apply</div>
                </div>
                <div className="flex_item_seven modal_calendar">
                    <DayPicker />
                </div>
            </div>
        </div>
    )
};

export default PeriodModal;