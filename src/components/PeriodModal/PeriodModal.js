import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './PeriodModal.css';

class PeriodModal extends React.Component {
    state = {
        firstDay: undefined,
        lastDay: undefined
    };

    handleDayClick = (day, {selected, disabled}) => {
        if(disabled) {
            return;
        }
        if(selected) {
            this.setState({firstDay: undefined, lastDay: undefined});
        }
        if(!this.state.firstDay) {
            this.setState({firstDay: day});
            return;
        }
        if(!this.state.lastDay) {
            this.setState({lastDay: day});
            return;
        }
    };

    maximumMonth() {
        let d = new Date();
        let dFuture = new Date(d.setMonth(d.getMonth() - 6));
        return dFuture
    };

    setDisableDays() {
        let d = new Date();
        let dYesterday = new Date(d.setDate(d.getDate() - 1));
        return dYesterday
    };

    render() {
        console.log('firstday: ', this.state.firstDay)
        console.log('lastday: ', this.state.lastDay)
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
                        <DayPicker 
                            numberOfMonths={2} 
                            onDayClick={this.handleDayClick}
                            selectedDays={this.state.selectedDay}
                            disabledDays={{ after: this.setDisableDays() }}
                            modifiers={{selected: {
                                from: this.state.firstDay,
                                to: this.state.lastDay
                            }}}
                            fromMonth={this.maximumMonth()}
                        />
                    </div>
                </div>
            </div>
        )
    };
};

export default PeriodModal;