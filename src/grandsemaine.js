import React, { Component } from 'react';
import Moment from 'react-moment';
// import moment from 'moment';
import { Button } from '@salesforce/design-system-react';
import { DataTable } from '@salesforce/design-system-react';
import { DataTableColumn } from '@salesforce/design-system-react';
// import {DataTableCell} from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';
import './style.css';
// import moment from 'moment';
const moment = require("moment")


Moment.globalFormat = "MMMM DD" // January 2020
class Big extends Component {
	constructor(props) {
		super(props);
		this.state = {
			month: <Moment></Moment>,
			week: undefined, //adding week: prob #1- copying the month components seems dumb ma'am 
			weekD1: undefined
		};
		this.monthOffset = 0
		// this.weekOffset = 0
		// this.weekD1Offset = 0
		this.previousMonth = this.previousMonth.bind(this);
		this.nextMonth = this.nextMonth.bind(this);
		//week
		this.previousWeek = this.previousWeek.bind(this);
		this.nextWeek = this.nextWeek.bind(this);
	}

	componentDidMount() {
		// console.log(
		// 	moment().startOf('isoweek').format())
		this.setState(() => ({
			month: <Moment>{new Date()}</Moment>,
			week: moment().startOf('isoweek').format(), //{moment().endOf('isoweek').add(6, 'days').format()}
			weekD1: moment().endOf('isoweek').format()
			// {moment().day(7)} 

		}));
	}
	//month
	previousMonth() {
		this.monthOffset--
		this.setState(state => ({
			month: <Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>,
		}));
	}
	nextMonth() {
		this.monthOffset++
		this.setState(state => ({
			month: <Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>,
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


	render() {
		return (
			<div >
				<div className="grand-semaine">
					<div className="month">
						<h1>{this.state.month}</h1>
						< Button onClick={this.previousMonth}>Previous</Button>
						< Button onClick={this.nextMonth}>Next</Button>
					</div>
					<br /> <br />
					<div className="week">
						< Button onClick={this.previousWeek}>previous week</Button>
						< Button onClick={this.nextWeek}>next week </Button>
						<h1><Moment>{this.state.week}</Moment></h1>
						<h1><Moment>{this.state.weekD1}</Moment></h1>
					</div>
				</div>

			</div>
		);
	}
}

export default Big;