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


//role table
const columns = [
    //try in a seperate table <DataTableColumn key="cic" label="CIC Rôle" property="roles"/>,
	// <DataTableColumn key="cic" label="CIC Rôle" property="roles" width="20em"/>,
	<DataTableColumn
		key="role1"
		label="Multi IC"
		property="multiIC"
		width="20em"
	>
		{/*<Grid />*/}
	</DataTableColumn>,
	

	<DataTableColumn key="role2" label="BO" property="bo" width="20em"/>,

	<DataTableColumn key="role3" label="LNO" property="lno" width="20em" />,

	<DataTableColumn key="role4" label="Scribe" property="scribe"width="20em" />,

    <DataTableColumn key="role5" label="Single IC" property="singleic"width="20em" />,

    <DataTableColumn key="role6" label="Ex Esc" property="exec" width="20em"/>,

	<DataTableColumn key="role7" label="UC" property="uc" width="20em" />,

	<DataTableColumn key="role8" label="EComm" property="ecomm" width="20em"/>,


	
];

class Role extends Component {
	static displayName = 'roles';

	state = {
		row: [
            
			{
				id: '8IKZHZZV80',
				multiIC:"name",
				bo:'.',
				lno:'.',
				scribe:'.',
				singleic:'.',
				exec:'.',
				uc:'.',
				ecomm:'.',
				
			},
			{
				id: '5GJOOOPWU7',
				multiIC:".",
				bo:'.',
				lno:'.',
				scribe:'.',
				singleic:'.',
				exec:'.',
				uc:'.',
				ecomm:'.',
				
			},
			{
				id: '8IKZHZZV81',
				multiIC:".",
				bo:'.',
				lno:'.',
				scribe:'.',
				singleic:'.',
				exec:'.',
				uc:'.',
				ecomm:'.',
				
			},
		],
	};

	render() {
		return (
			<div className="roles">
				<IconSettings iconPath="/icons">
				<div class="slds-grid slds-gutters">
					<div class="slds-col">
						<div className="grand-semaine">
							<DataTable columnBordered items={this.state.row} id="roles-columnBordered">
								{columns}
							</DataTable>
						</div>
					</div>
				</div>
				</IconSettings>
			</div>
		);
	}
}

export default Role;