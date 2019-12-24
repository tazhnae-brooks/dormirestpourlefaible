import React, {Component} from 'react';
import {DataTable} from '@salesforce/design-system-react'; 
import {DataTableColumn} from '@salesforce/design-system-react';
import {DataTableCell} from '@salesforce/design-system-react';
import {IconSettings} from '@salesforce/design-system-react';
import './style.css';

/*const Grid = ({ children, ...props }) => (
	<DataTableCell {...props}>
		<a
			href="javascript:void(0);"
			onClick={(event) => {
				event.preventDefault();
			}}
		>
			{children}
		</a>
	</DataTableCell>
);*/
//Grid.displayName = DataTableCell.displayName;

/*const columns = [
    //try in a seperate table <DataTableColumn key="cic" label="CIC Rôle" property="roles"/>,

	<DataTableColumn
		key="day1"
		label="Lundi"
		property="weekDay"
	>
		{/*<Grid />*/
	/*</DataTableColumn>,

	<DataTableColumn key="day2" label="Mardi" property="weekDay2" />,

	<DataTableColumn key="day3" label="Mercredi" property="weekDay3" />,

	<DataTableColumn key="day4" label="Jeudi" property="weekDay4" />,

    <DataTableColumn key="day5" label="Vendredi" property="weekDay5" />,

    <DataTableColumn key="day6" label="Samedi" property="weekDay6" />,

	<DataTableColumn key="day7" label="Dimanche" property="weekDay7" />,

	
];*/

class Big extends Component {
	/*static displayName = 'calendar';

	state = {
		row: [
            /*{
				id: '5GJOOOPWU7',
                roles:"multi ic",
			},*/
			/*{
				id: '8IKZHZZV80',
				weekDay: '1',
				weekDay2: '2',
				weekDay3: '3',
				weekDay4: '4',
				weekDay5: '5',
				weekDay6: '6',
				weekDay7: '7',
			},
			{
				id: '5GJOOOPWU7',
				weekDay: '',
				accountName: '',
				closeDate: '',
				stage: '',
				confidence: '',
				amount: '',
				contact: '',
			},
			{
				id: '8IKZHZZV81',
				weekDay: '',
				accountName: '',
				closeDate: '',
				stage: '',
				confidence: '',
				amount: '',
				contact: '',
			},
		],
	};*/

	render() {
		return (
			<div className="grand-semaine">
				<div class="slds-grid slds-gutters">
					<div class="slds-col slds-size_1-of-12">
						<span>1</span>
					</div>
					<div class="slds-col slds-size_1-of-12">
						<span>2</span>
					</div>
					<div class="slds-col slds-size_1-of-12">
						<span>3</span>
					</div>
					<div class="slds-col slds-size_1-of-12">
						<span>4</span>
					</div>
					<div class="slds-col slds-size_1-of-12">
						<span>5</span>
					</div>
					<div class="slds-col slds-size_1-of-12">
						<span>6</span>
					</div>
					<div class="slds-col slds-size_1-of-12">
						<span>7</span>
					</div>
				</div>
			</div>
			/*<IconSettings iconPath="/icons">
				<div class="slds-grid slds-gutters">
					<div class="slds-col">
						<div className="grand-semaine">
							<DataTable columnBordered items={this.state.row} id="calendar-columnBordered">
								{columns}
							</DataTable>
						</div>
					</div>
				</div>
			</IconSettings>*/
		);
	}
}

export default Big;