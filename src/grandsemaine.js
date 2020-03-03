import React, { Component } from 'react';
import Moment from 'react-moment';
//import { Button } from '@salesforce/design-system-react';
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
		this.previousDay = this.previousDay.bind(this);
		this.nextDay = this.nextDay.bind(this);
		//week
		this.previousWeek = this.previousWeek.bind(this);
		this.nextWeek = this.nextWeek.bind(this);
	}

	componentDidMount() {
		this.setState(() => ({
			day: moment().format(),
			week: moment().startOf('isoweek').format(''),
			weekD1: moment().endOf('isoweek').format(''),


		}));
	}
	//month
	previousDay() {
		this.setState(() => ({
			day: moment(this.state.day).add(-1, 'days').toDate(),
		}));
	}
	nextDay() {
		this.setState(() => ({
			day: moment(this.state.day).add(1, 'days').toDate(),
		}));
	}

	//week
	previousWeek() {
		this.setState(() => ({
			week: moment(this.state.week).add(-7, 'days').toDate(),
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
						<Moment format="dddd, MMMM Do" data-day={this.state.day} id='date'>{this.state.day}</Moment>
					</h1>
				</div>

			</div >

		);
	}
}

export default Big;