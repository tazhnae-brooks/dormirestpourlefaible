import React,{Component} from 'react';
import {DataTable} from '@salesforce/design-system-react'; 
import {DataTableColumn} from '@salesforce/design-system-react';
import {DataTableCell} from '@salesforce/design-system-react';
import {IconSettings} from '@salesforce/design-system-react';
import './style.css';

// 12/31/19 note: test datepicker week.jsx file by importing all necessary files

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

class Big extends Component {
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
			// {
			// 	id: '8IKZHZZV81',
			// 	weekDay:'15'
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
				<IconSettings iconPath="/icons">
				<div class="slds-grid slds-gutters">
					<div class="slds-col">
						<div className="grand-semaine">
							<DataTable 
							columnBordered 
							items={this.state.row} 
							id="weektemplate-columnBordered"
							
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