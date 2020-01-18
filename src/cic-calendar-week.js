import React, { Component } from 'react';
import Moment from 'react-moment';
import * as dateFns from 'date-fns';
//import './index.css';
//import { DayPicker } from 'react-day-picker';
//import 'react-day-picker/lib/style.css';


// Set the format for all times 

class WeekNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //month: <Moment></Moment>,
            week: new Date(),
            selectedDate: new Date(),
        };
        //this.monthOffset = 0
        this.previousWeek = this.previousWeek.bind(this);
        this.nextWeek = this.nextWeek.bind(this);
    }

    /*componentDidMount() {
        this.setState(() => ({
            month: <Moment>{new Date()}</Moment>,
        }));
    }*/

    // componentWillUnmount() {
    // }


    previousWeek = () => {
        //this.monthOffset--
        this.setState(state => ({
            week: dateFns.subWeeks(this.state.week, 1)//<Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>
        }));
    }


    nextWeek = () => {
        //this.monthOffset++
        this.setState(state => ({
            week: dateFns.addWeeks(this.state.week, 1)//<Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>
        }));
    }

    renderDays() {
        const dateFormat = "d";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.week)
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    renderCells() {
        const { week, selectedDate } = this.state;
        const weekStart = dateFns.startOfWeek(week);
        const weekEnd = dateFns.endOfWeek(weekStart);
        const startDate = dateFns.startOfWeek(weekStart);
        const endDate = dateFns.endOfWeek(weekEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div className={`col cell ${
                        !dateFns.isSameWeek(day, weekStart)
                            ? "disabled" :
                            dateFns.isSameDay(day, selectedDate) ? "selected" : ""}`}

                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse('e', 'e', cloneDay))}>


                        <span className="number">{formattedDate}</span>
                        {/*<span className="bg">{formattedDate}</span>*/}
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>{days}</div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
    };

    renderNav() {
        //Moment.globalFormat = "MMMM YYYY" // November 2019
        const dateFormat = "MMMM";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="eye">
                        <button onClick={this.previousWeek}>Previous</button>
                    </div>
                </div>
                <div className="col col-center">
                    <span>{dateFns.format(this.state.week, dateFormat)}</span>
                </div>
                <div className="col col-end"></div>
                <div className="ball">
                    <button onClick={this.nextWeek}>Next</button>
                </div>
            </div>
        );

    }

    weekRespond() {

    }

    render() {
        return (
            <div className="calendar2">
                {/*<h1>{this.state.month}</h1>
                <button onClick={this.previousMonth}>Previous</button>
        <button onClick={this.nextMonth}>Next</button>*/}
                <div>{this.renderNav()}</div>
                <div>{this.renderDays()}</div>
                <div>{this.renderCells()}</div>
            </div>

        );
    }

}

export default WeekNav;