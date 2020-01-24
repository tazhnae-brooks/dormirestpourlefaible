import React, { Component } from 'react';
import { Button, Icon } from '@salesforce/design-system-react';
import { Input } from '@salesforce/design-system-react';
import { DataTable } from '@salesforce/design-system-react';
import { DataTableColumn } from '@salesforce/design-system-react';
import { DataTableCell } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';
import './style.css';



const Grid = ({ children, ...props }) => (
	<DataTableCell {...props}>

		<IconSettings iconPath="/icons">
			{/* <section className="slds-grid slds-grid_pull-padded " styleContainer={{ "width": "200px" }} >  slds-grid slds-grid_pull-padded slds-grid_vertical-align-center slds-col_padded */}
			<div className=".slds-form-element__control" >
				<Input id="base-id" styleInput={{ "width": "inherit" }} aria-expanded />
				{/* </section> */}
			</div>
		</IconSettings>

		{/* <a
			href="javascript:void(0);"
			onClick={(event) => {
				event.preventDefault()

			}}
		> */}
		{/* <IconSettings iconPath="/icons"> */}

		{/* select/checkmark box
			<div class="slds-checkbox">
				<input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="-1" aria-labelledby="check-button-label-01 column-group-header" />
				<label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
					<span class="slds-checkbox_faux"></span>
					<span class="slds-form-element__label slds-assistive-text">Select item 1</span>
				</label>
			</div> */}

		{/* the edit button w/out the icon: wont show up */}
		{/* <div class=" slds-cell-edit "> */}


		{/* popup input */}
		{/* <section aria-describedby="dialog-body-id-14" class="slds-popover slds-popover slds-popover_edit" role="dialog" className="popup" >
					<div class="slds-popover__body" id="dialog-body-id-14">
						<div class="slds-form-element slds-grid slds-wrap">
							<label class="slds-form-element__label slds-form-element__label_edit slds-no-flex" for="company-01">
								<span class="slds-assistive-text">Company</span>
							</label>
							<div class="slds-form-element__control slds-grow">
								<input type="text" class="slds-input" id="company-01" value="some text" />
							</div>
						</div>
					</div>
				</section>

				<span class="slds-grid slds-grid_align-spread">
					<Button class="slds-button slds-button_icon slds-cell-edit__button">
						<svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" />
						<span class="slds-assistive-text"> Edit Name of name</span>
					</Button>
				</span>
			</div> */}
		{/* </IconSettings> */}
		{children}
		{/* </a> */}
	</DataTableCell >
);
Grid.displayName = DataTableCell.displayName;


const header = [
	<DataTableColumn
		key="role1"
		label="Multi IC"
		property="multiIC"


		width="87.5em" //temp format, pls change later
	>

	</DataTableColumn>,


	<DataTableColumn key="role5" label="Single IC" property="singleic" width="16rem" />,

	<DataTableColumn key="role7" label="UC" property="uc" width="15rem" />,

	<DataTableColumn key="role8" label="EComm" property="ecomm" width="" />,
]

//role table
const columns = [

	<DataTableColumn
		key="subrole1"
		label="IC"
		property="ic"


	// width="20em"
	>
		<Grid />
	</DataTableColumn>,


	<DataTableColumn key="subrole2" label="BO" property="bo" />,

	<DataTableColumn key="subrole3" label="LNO" property="lno" />,

	<DataTableColumn key="subrole4" label="Scribe" property="scribe" />,

	<DataTableColumn key="subrole5" label="OR" property="or" />,

	<DataTableColumn key="subrole6" label="IC" property="singleic" />,

	<DataTableColumn key="subrole7" label="Ex Esc" property="exec" />,

	<DataTableColumn key="subrole8" label="PRI" property="ucpri" />,

	<DataTableColumn key="subrole9" label="SEC" property="ucsec" />,

	<DataTableColumn key="subrole8" label="PRI" property="ecommpri" />,

	<DataTableColumn key="subrole9" label="SEC" property="ecommsec" />,



];

class Role extends Component {
	constructor(props) {
		super(props);
		this.state = {
			row: []
		};
		this.displayName = 'roles'
	}


	componentDidMount() {
		var rows = [];
		for (var i = 0; i < 1; i++) {
			rows.push(
				{
					id: i,
					ic: '',
					bo: '',
					lno: '',
					scribe: '',
					or: '',
					singleic: '',
					exec: '',
					ucpri: '',
					ucsec: '',
					ecommpri: '',
					ecommsec: '',
				}
			)
		}
		this.setState(() => ({
			row: rows
		}));
	}





	render() {
		return (
			<div > {/*style={{ "width": "176px" }}, style={{ "content": "176px" }}*/}
				<IconSettings iconPath="/icons">
					<DataTable columnBordered>{header}</DataTable>
					<DataTable
						columnBordered
						items={this.state.row}
						id="roles-columnBordered"
						noRowHover
					>
						{columns}

					</DataTable>
				</IconSettings>
			</div>
		);
	}
}

export default Role;