import React, { Component } from 'react';
import { IconSettings, DataTable, DataTableColumn, DataTableCell, Input } from '@salesforce/design-system-react';
import { Dropdown } from '@salesforce/design-system-react'
import './style.css';
const moment = require("moment")

class Names extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedInput: ''
		}
	}

	// handleNameData(data) {
	// 	let name = data.name
	// 	console.log(data);
	// 	let grid = data.grid
	// 	grid.forEach(gridLocation => {
	// 		let matchingElement = document.querySelector(`[data-location='${gridLocation}']`)
	// 		matchingElement.value = name
	// 	})
	// }

	// async handleSelectChange(value) {
	// 	let date = document.getElementById("date").getAttribute("data-day")
	// 	let formatDate = moment(date).format("YYYY-MM-DD");
	// 	console.log(formatDate);
	// 	const response = await fetch(`/query?name=${value}&date=${formatDate}`);
	// 	const body = await response.json();
	// 	if (response.status !== 200) {
	// 		throw Error(body.message)
	// 	}
	// 	this.handleNameData(body.data[0]);
	// }

	save() {
		let date = document.getElementById("date").getAttribute("data-day")
		let formatDate = moment(date).format("YYYY-MM-DD");

		let saveData = {
			"date": formatDate,
			"data": []
		}
	}


	render() {
		return (
			<div>
				<div className="namedp">
					<IconSettings>
						<Dropdown
							align="right"
							iconCategory="utility"
							iconName="down"
							iconPosition="right"
							label="Team"
							width="small"
							// submenu_right={true}
							//onSelect={(selected) => {
							//	this.handleSelectChange(selected.value);
							//}}
							onSelect={(selected) => {
								this.props.changed(selected.value);
							}}
							options={[
								{ label: 'AMER', type: 'header' },
								{ label: 'tazhnae', value: 'tazhnae' },
								{ label: 'jane', value: 'jane' },
								{ label: 'general kenobi', value: 'general kenobi' },
								{ type: 'divider' },
								{ label: 'EMEA', type: 'header' },
								{ label: 'Menu Item Four', value: 'D0' },
								{ label: 'Menu Item Five', value: 'E0' },
								{ label: 'Menu Item Six', value: 'F0' },
								{ type: 'divider' },
								{ label: 'APAC', type: 'header' },
								{ label: 'Menu Item Seven', value: 'G0' },
							]}
						/>
						{this.state.selectedInput}
					</IconSettings>
				</div>
				<div>
					<button class="slds-button slds-button_neutral" onClick={this.save}>Save</button>
				</div>
			</div>
		)
	}
}

// make an input cell component
const CustomDataTableCell = ({ children, ...props }) => (
	<DataTableCell {...props}>
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

	constructor(props) {
		super(props)
		// there are 2 values that are pretty obvious, row and time
		// the rest (1, 2, 3, etc..) correspond to the COLUMN
		// each object in this.items correspond to a ROW
		// each ROW has 12 COLUMNS
		// we're now going by 'row':'col', will need DB changes but dont worry about it yet
		this.state = {
			items: [],
		};
	}

	// do the for loop to get all the rows down where they supposed to be
	componentWillMount() {
		for (var rows = 1, time = moment("00:30", "HH:mm"); rows <= 24; rows++ , time = moment(time).add(1, "h")) {
			this.state.items.push(
				{
					"row": rows,
					"time": time.format("HH:mm"),
					"1": null,
					"2": null,
					"3": null,
					"4": null,
					"5": null,
					"6": null,
					"7": null,
					"8": null,
					"9": null,
					"10": null,
					"11": null,
					"12": null,
				}
			)
		}
	}

	async handleSelectChange(value) {
		let date = document.getElementById("date").getAttribute("data-day")
		let formatDate = moment(date).format("YYYY-MM-DD");
		console.log(formatDate);
		const response = await fetch(`/query?name=${value}&date=${formatDate}`);
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message)
		}
		this.handleNameData(body.data[0]);
	}

	handleNameData(data) {
		console.log(data);
		let name = data.name
		let grid = data.grid // 1:3
		// put name inside respective row and col
		this.setState({

		})

	}

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<Names changed={this.handleSelectChange}></Names>
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