import React, { Component } from 'react';
import { IconSettings, DataTable, DataTableColumn, DataTableCell, Input } from '@salesforce/design-system-react';
import './style.css';
import update from 'react-addons-update';
const moment = require("moment")

// make an input cell component
const CustomDataTableCell = ({ children }) => (
	<DataTableCell>
		<Input value={children}></Input>
	</DataTableCell>
);

// idk what this line does but it breaks if you remove it so dont touch it 
CustomDataTableCell.displayName = DataTableCell.displayName;

// define the columns
// key = anything, as long as it is unique
// label = what you want to show on the top bar
// property = the value used to match from the items (see items in state)
const columns = [
	<DataTableColumn key="time" label="time" property="time">
	</DataTableColumn>,
	<DataTableColumn key="1" label="Some" property="1">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="2" label="Data" property="2">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="3" label="Values" property="3">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="4" label="apple" property="4">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="5" label="banana" property="5">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="6" label="put" property="6">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="7" label="column" property="7">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="8" label="names" property="8">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="9" label="in these" property="9">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="10" label="boxes" property="10">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="11" label="pear" property="11">
		<CustomDataTableCell />
	</DataTableColumn>,
	<DataTableColumn key="12" label="jellyfish" property="12">
		<CustomDataTableCell />
	</DataTableColumn>,
];

class Role extends React.Component {
	static displayName = 'Grid';

	// there are 2 values that are pretty obvious, row and time
	// the rest (1, 2, 3, etc..) correspond to the COLUMN
	// each object in this.items correspond to a ROW
	// each ROW has 12 COLUMNS
	// we're now going by 'row':'col', will need DB changes but dont worry about it yet
	state = {
		items: [],
	};

	// do the for loop to get all the rows down where they supposed to be
	componentWillMount() {
		for (var rows = 1, time = moment("00:30", "HH:mm"); rows <= 24; rows++ , time = moment(time).add(1, "h")) {
			this.state.items.push(
				{
					"row": rows,
					"time": time.format("HH:mm"),
					"1": "",
					"2": "",
					"3": "",
					"4": "",
					"5": "",
					"6": "",
					"7": "",
					"8": "",
					"9": "",
					"10": "",
					"11": "",
					"12": "",
				}
			)
		}
	}

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<div style={{ overflow: 'auto' }}>
					<DataTable columnBordered items={this.state.items} id="Grid-columnBordered" noRowHover>
						{columns}
					</DataTable>
				</div>
			</IconSettings>
		);
	}
}


export default Role;