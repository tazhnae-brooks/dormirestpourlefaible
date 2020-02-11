import React, { Component } from 'react';
import Moment from 'react-moment';
// import moment from 'moment';
//import { Button } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';
import './style.css';
const moment = require("moment")


Moment.globalFormat = "MMMM DD" // January 2020
class Big extends Component {
	constructor(props) {
		super(props);
		this.state = {
			day: <Moment></Moment>,
			week: undefined, //adding week: prob #1- copying the month components seems dumb ma'am 
			weekD1: undefined,
			day1: undefined,
		};
		this.dayOffset = 0
		// this.weekOffset = 0
		// this.weekD1Offset = 0
		this.previousDay = this.previousDay.bind(this);
		this.nextDay = this.nextDay.bind(this);
		//week
		this.previousWeek = this.previousWeek.bind(this);
		this.nextWeek = this.nextWeek.bind(this);
	}

	componentDidMount() {
		// console.log(
		// 	moment().startOf('isoweek').format())
		this.setState(() => ({
			day: moment().format(),
			// <Moment>{new Date()}</Moment>,
			week: moment().startOf('isoweek').format(''), //{moment().endOf('isoweek').add(6, 'days').format()}
			weekD1: moment().endOf('isoweek').format(''),
			// day: moment()
			// {moment().day(7)} 

		}));
	}
	//month
	previousDay() {
		// this.monthOffset--
		this.setState(() => ({
			day: moment(this.state.day).add(-1, 'days').toDate(),
			// month: <Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>,
		}));
	}
	nextDay() {
		// this.monthOffset++
		this.setState(() => ({
			day: moment(this.state.day).add(1, 'days').toDate(),
			// month: <Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>,
		}));
	}

	//week
	previousWeek() {
		this.setState(() => ({
			week: moment(this.state.week).add(-7, 'days').toDate(), //<Moment add={{ days: 10 }}>{this.state.week}</Moment>,
			weekD1: moment(this.state.weekD1).add(-7, 'days').toDate(),
		}));
	}
	nextWeek() {
		this.setState(state => ({
			week: moment(this.state.week).add(7, 'days').toDate(),
			weekD1: moment(this.state.weekD1).add(7, 'days').toDate(),

		}));
	}

	// style={{ "height": "6rem" }}
	render() {
		return (
			<div >
				<div className="week">

					<div>
						<button class="slds-button slds-button_neutral slds-float_left" onClick={this.previousWeek}>previous week</button>
						<button class="slds-button slds-button_neutral slds-float_right" onClick={this.nextWeek}>next week</button>
					</div>
					<h1>
						<Moment format="MMMM Do">{this.state.week}</Moment> - <Moment format="MMMM Do">{this.state.weekD1}</Moment>
					</h1>
				</div>
				<br />
				<div className="day">
					<div>
						<button class="slds-button slds-button_neutral slds-float_left" onClick={this.previousDay}> previous day</button>
						<button class="slds-button slds-button_neutral slds-float_right" onClick={this.nextDay}> next day</button>
					</div>
					<h1>
						<Moment format="dddd, MMMM Do">{this.state.day}</Moment>
					</h1>
					{/* <button class="slds-button slds-button_neutral slds-float_right" onClick={this.nextDay}> next day</button> */}
				</div>

			</div >

		);
	}
}

export default Big;