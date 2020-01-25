import React, { Component } from 'react';
import { Input } from '@salesforce/design-system-react';
import { DataTable } from '@salesforce/design-system-react';
import { DataTableColumn } from '@salesforce/design-system-react';
import { DataTableCell } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';
import './style.css';



const Grid = ({ children, ...props }) => (
	<DataTableCell {...props}>

		<IconSettings iconPath="/icons">
			{/* <section className="slds-grid slds-grid_pull-padded " styleContainer={{ "width": "200px" }} >  slds-grid slds-grid_pull-padded slds-grid_vertical-align-center slds-col_padded
			<div className=".slds-form-element__control" >
				<Input id="base-id" styleInput={{ "width": "inherit" }} styleContainer={{ "background-color": "red", "width": "50%" }} />
				{/* </section> 
			</div> */}
			<div class="slds-form-element">
				<div class="slds-form-element__control" >
					<input type="text" id="text-input-id-1" required="" class="slds-input" />
				</div>
			</div>
		</IconSettings>
		{children}
	</DataTableCell >
);
Grid.displayName = DataTableCell.displayName;


// const header = [
// 	<DataTableColumn
// 		key="role1"
// 		label="Multi IC"
// 		property="multiIC"


// 		width="50rem" //temp format, pls change later
// 	>

// 	</DataTableColumn>,


// 	<DataTableColumn key="role5" label="Single IC" property="singleic" width="20rem" />,

// 	<DataTableColumn key="role7" label="UC" property="uc" width="20rem" />,

// 	<DataTableColumn key="role8" label="EComm" property="ecomm" width="20rem" />,
// ]


//role table
const columns = [

	<DataTableColumn
		key="subrole1"
		label="IC"
		property="ic"


		width="10rem"
	>
		<Grid />
	</DataTableColumn>,


	<DataTableColumn key="subrole2" label="BO" property="bo" width="10rem"><Grid /></DataTableColumn>,

	<DataTableColumn key="subrole3" label="LNO" property="lno" width="10rem"><Grid /></DataTableColumn>,

	<DataTableColumn key="subrole4" label="Scribe" property="scribe" width="10rem" ><Grid /></DataTableColumn>,

	<DataTableColumn key="subrole5" label="OR" property="or" width="10rem" ><Grid /></DataTableColumn>,

	<DataTableColumn key="subrole6" label="IC" property="singleic" width="10rem" ><Grid /></DataTableColumn>,

	<DataTableColumn key="subrole7" label="Ex Esc" property="exec" width="10rem"><Grid /></DataTableColumn>,

	<DataTableColumn key="subrole8" label="PRI" property="ucpri" width="10rem" ><Grid /></DataTableColumn>,

	<DataTableColumn key="subrole9" label="SEC" property="ucsec" width="10rem" ><Grid /></DataTableColumn>,

	<DataTableColumn key="subrole8" label="PRI" property="ecommpri" width="10rem" ><Grid /></DataTableColumn>,

	<DataTableColumn key="subrole9" label="SEC" property="ecommsec" width="10rem"><Grid /></DataTableColumn>,



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
		for (var i = 0; i < 29; i++) {
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
			<div >
				<IconSettings iconPath="/icons">
					{/* <DataTable columnBordered>{header}</DataTable> */}
					<table class="slds-table slds-table_bordered slds-table_col-bordered slds-table_fixed-layout">
						<thead>
							<tr class="slds-line-height_reset">
								<th class="" scope="col" colspan="5" >
									<div class="slds-truncate">Multi IC</div>
								</th>
								<th class="" scope="col" colspan="2">
									<div class="slds-truncate">Single IC</div>
								</th>
								<th class="" scope="col" colspan="2">
									<div class="slds-truncate">UC</div>
								</th>
								<th class="" scope="col" colspan="2">
									<div class="slds-truncate">EComm</div>
								</th>

							</tr>
						</thead>
					</table>
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