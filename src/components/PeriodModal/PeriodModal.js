import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './PeriodModal.css';

class PeriodModal extends React.Component {
    state = {
        firstDay: undefined,
        lastDay: undefined,
        selectedOption: ''
    };

    handleDayClick = (day, {selected, disabled}) => {
        if(disabled) {
            return;
        }
        if(selected) {
            this.setState({firstDay: undefined, lastDay: undefined, selectedOption: ''});
        }
        if(!this.state.firstDay) {
            this.setState({firstDay: day});
            return;
        }
        if(!this.state.lastDay) {
            this.setState({lastDay: day});
            this.setHighlightedOption();
            return;
        }
    };

    getYesterday() {
        let d = new Date();
        const yesterday = new Date(d.setDate(d.getDate() - 1));
        return yesterday;
    };

    getLastWeek() {
        let d = new Date();
        const lastWeek = new Date(d.setDate(d.getDate() - 7));
        return lastWeek;
    };

    getLastMonth() {
        let d = new Date();
        const lastMonth = new Date(d.setDate(d.getDate() - 30));
        return lastMonth;
    };

    getThisMonth() {
        let d = new Date();
        const firstDateofTheMonth = new Date(d.getFullYear(), d.getMonth(), 1);
        return firstDateofTheMonth
    }

    onSelectOption = (event) => {
       
        const clicked = event.target.id;
        if(this.state.selectedOption === clicked) {
            this.setState({selectedOption: '', firstDay: undefined, lastDay: undefined});
            return;
        } else {
            this.setState({selectedOption: clicked})
        }
        
        switch(clicked) {
            case 'yesterday':
                this.setState({firstDay: this.getYesterday(), lastDay: this.getYesterday()});
                break;
            case 'lastSevenDays':
                this.setState({firstDay: this.getLastWeek(), lastDay: this.getYesterday()});
                break;
            case 'lastThirtyDays':
                this.setState({firstDay: this.getLastMonth(), lastDay: this.getYesterday()});
                break;
            case 'thisMonth':
                this.setState({firstDay: this.getThisMonth(), lastDay: this.getYesterday()});
                break;
            default:
                break;
        }
    };

    setHighlightedOption() {
        console.log(this.state.firstDay.getDate());
        console.log(this.getYesterday().getDate());
        if(this.state.firstDay.getDate() === this.getYesterday().getDate()) {
            this.setState({selectedOption: 'yesterday'})
            return
        }
        if(this.state.firstDay.getDate() === this.getLastWeek().getDate()) {
            this.setState({selectedOption: 'lastSevenDays'})
            return
        }
        if(this.state.firstDay.getDate() === this.getLastMonth().getDate()) {
            this.setState({selectedOption: 'lastThirtyDays'})
            return
        }
        if(this.state.firstDay.getDate() === this.getThisMonth().getDate()) {
            this.setState({selectedOption: 'thisMonth'})
            return
        }
        this.setState({selectedOption: 'custom'})
    };

    renderedOptions() {
        return (
            <div className="flex_item_three modal_sidebar">
                <div 
                    className="sidebar_item first" 
                    id="today">
                    Today
                </div>
                <div 
                    className={`sidebar_item ${this.state.selectedOption === "yesterday" ? 'selected' : ""}`} 
                    onClick={this.onSelectOption} 
                    id="yesterday">
                    Yesterday
                </div>
                <div 
                    className={`sidebar_item ${this.state.selectedOption === "lastSevenDays" ? 'selected' : ""}`} 
                    onClick={this.onSelectOption} 
                    id="lastSevenDays">
                    Last 7 days
                </div>
                <div 
                    className={`sidebar_item ${this.state.selectedOption === "lastThirtyDays" ? 'selected' : ""}`} 
                    onClick={this.onSelectOption}
                    id="lastThirtyDays">
                    Last 30 days
                </div>
                <div 
                    className={`sidebar_item ${this.state.selectedOption === "thisMonth" ? 'selected' : ""}`} 
                    onClick={this.onSelectOption}
                    id="thisMonth">
                    This Month
                </div>
                <div 
                    className={`sidebar_item last ${this.state.selectedOption === "custom" ? "selected" : ""}`} 
                    id="custom">
                    Custom
                </div>
                <div className="sidebar_btn">Apply</div>
            </div>
        );
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
        return (
            <div className="modal_container">
                <div className="flex modal_header">
                    <div className="flex_item_one"><FontAwesomeIcon icon={faCalendarAlt} /></div>
                    <div className="flex_item_seven">Period</div>
                    <div className="flex_item_one times"><FontAwesomeIcon icon={faTimes} /></div>
                </div>
                <div className="flex modal_content">
                    {this.renderedOptions()}
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
                            initialMonth={this.getLastMonth()}
                            fromMonth={this.maximumMonth()}
                        />
                    </div>
                </div>
            </div>
        )
    };
};

export default PeriodModal;