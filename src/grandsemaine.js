import React,{Component} from 'react';
import Moment from 'react-moment';
import {Button} from '@salesforce/design-system-react';
import {DataTable} from '@salesforce/design-system-react'; 
import {DataTableColumn} from '@salesforce/design-system-react';
import {DataTableCell} from '@salesforce/design-system-react';
import {IconSettings} from '@salesforce/design-system-react';
import './style.css';


//week template

const template=[
	<DataTableColumn
		key="day1"
		label="Lundi"
		property="weekDay"
		width="20em"
	>
		{/*<Grid />*/}
	</DataTableColumn>,
	

	<DataTableColumn key="day2" label="Mardi" property="weekDay2" width="20em"/>,

	<DataTableColumn key="day3" label="Mercredi" property="weekDay3" width="20em" />,

	<DataTableColumn key="day4" label="Jeudi" property="weekDay4"width="20em" />,

    <DataTableColumn key="day5" label="Vendredi" property="weekDay5"width="20em" />,

    <DataTableColumn key="day6" label="Samedi" property="weekDay6" width="20em"/>,

	<DataTableColumn key="day7" label="Dimanche" property="weekDay7" width="20em"  />,
]

Moment.globalFormat = "MMMM DD, YYYY" // January 2020
class Big extends Component {
	constructor(props) {
        super(props);
        this.state = {
            month: <Moment></Moment>
        };
        this.monthOffset = 0
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
	}
	
	componentDidMount() {
        this.setState(() => ({
            month: <Moment>{new Date()}</Moment>
        }));
	}
	
	previousMonth() {
        this.monthOffset--
        this.setState(state => ({
            month: <Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>
        }));
    }


    nextMonth() {
        this.monthOffset++
        this.setState(state => ({
            month: <Moment add={{ months: this.monthOffset }}>{this.state.month}</Moment>
        }));
    }

	static displayName = 'weektemplate';
	state = {
		row: [
            
			{
				id: '8IKZHZZV80',
				weekDay: '1',
				weekDay2: '2',
				weekDay3: '3',
				weekDay4: '4',
				weekDay5: '5',
				weekDay6: '6',
				weekDay7: '7',
			},
			// {
			// 	id: '5GJOOOPWU7',
			// 	weekDay: '8',
			// 	/*weekDay2: '2',
			// 	weekDay3: '3',
			// 	weekDay4: '4',
			// 	weekDay5: '5',
			// 	weekDay6: '6',
			// 	weekDay7: '7',*/
			// },
		],
	};

	render() {
		return (
			<div className="grand-semaine">
				<h1>{this.state.month}</h1>
				< Button onClick={this.previousMonth}>Previous</Button>
				< Button onClick={this.nextMonth}>Next</Button>
                
				<IconSettings iconPath="/icons">
				<div class="slds-grid slds-gutters">
					<div class="slds-col">
						<div className="grand-semaine">
							<DataTable 
							columnBordered 
							items={this.state.row} 
							id="weektemplate-columnBordered"
							noRowHover
							>
							{template}
							</DataTable>
						</div>
					</div>
				</div>
				</IconSettings>
			</div>
		);
	}
}

export default Big;