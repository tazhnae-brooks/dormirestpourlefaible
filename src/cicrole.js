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
			<div style={{ "width": "fit-content" }}>
				{/* <section className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center" > */}
				<div className="slds-col_padded " > {/*styleContainer={"width: inherit"} > */}
					<Input id="base-id" styleInput={{ "width": "inherit" }} styleContainer={{ "width": "inherit" }} />
				</div>
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


// const ManInput = ({ children, ...props }) => (
// 	<DataTableCell  {...props}>

// 		{/* <Button class="slds-button slds-button_icon slds-cell-edit__button " ></Button>
// 		<svg class="slds-button__icon slds-button__icon_hint slds-button__icon_edit" aria-hidden="true"></svg> */}
// 		<div styleContainer={{ "width": "fit-content" }}>
// 			{/* <section className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center" > */}
// 			<div className="slds-col_padded" > {/*styleContainer={"width: inherit"} > */}
// 				<Input id="base-id" styleInput={{ "width": "inherit" }} styleContainer={{ "width": "inherit" }} />
// 			</div>
// 			{/* </section> */}
// 		</div>
// 		{children}

// 	</DataTableCell>

// )

// Input.displayName = DataTableCell.displayName;



//role table
const columns = [

	<DataTableColumn
		key="role1"
		label="Multi IC"
		property="multiIC"


	// width="20em"
	>
		<Grid />
	</DataTableColumn>,


	<DataTableColumn key="role2" label="BO" property="bo" />,

	<DataTableColumn key="role3" label="LNO" property="lno" />,

	<DataTableColumn key="role4" label="Scribe" property="scribe" />,

	<DataTableColumn key="role5" label="Single IC" property="singleic" />,

	<DataTableColumn key="role6" label="Ex Esc" property="exec" />,

	<DataTableColumn key="role7" label="UC" property="uc" />,

	<DataTableColumn key="role8" label="EComm" property="ecomm" />,



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
		for (var i = 0; i < 37; i++) {
			rows.push(
				{
					id: i,
					multiIC: '',
					bo: '',
					lno: '',
					scribe: '',
					singleic: '',
					exec: '',
					uc: '',
					ecomm: ''
				}
			)
		}
		this.setState(() => ({
			row: rows
		}));
	}



	render() {
		return (
			<div className="roles">
				<IconSettings iconPath="/icons">
					<div className="roles">
						<DataTable
							columnBordered
							items={this.state.row}
							id="roles-columnBordered"
							noRowHover
						>
							{columns}
							{/* <div>
								<span class=" slds-cell-edit slds-grid">
									<Button class="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small" assistiveText={{ icon: 'slds-button__icon slds-button__icon_hint slds-button__icon_edit' }}>
										<span class="slds-assistive-text"> Edit Name of name</span>
									</Button>
								</span>
							</div> */}

						</DataTable>
					</div>
				</IconSettings>
			</div>
		);
	}
}

export default Role;