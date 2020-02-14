import React, { Component } from 'react';
import { IconSettings } from '@salesforce/design-system-react';
import './style.css';
const moment = require("moment")


class Role extends Component {
	constructor(props) {
		super(props);
		this.state = {
			row: [],
			finalgrid: ""
		};
		this.displayName = 'roles'
	}


	componentDidMount() {
		var grid = [];
		for (var rows = 1, time = moment("00:30", "HH:mm"); rows <= 24; rows++ , time = moment(time).add(1, "h")) {
			grid.push(
				`<td data-label="PRI">
					<div class="slds-truncate slds-no-row-hover" title="">
					<div class="slds-form-element ">
					<div class="slds-form-element__control" >
						<p>${time.format("HH:mm")}</p> 
					</div>
				</div>
				</div>
				</td>
				<td data-label="IC">
				<div class="slds-truncate slds-no-row-hover" title="">
					<div class="slds-form-element ">
						<div class="slds-form-element__control" >
							<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="1:${rows}" /> 
						</div>
					</div>
				</div>
			</td>
			<td data-label="BO">
				<div class="slds-truncate" title="">
					<div class="slds-form-element">
						<div class="slds-form-element__control" >
							<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="2:${rows}" /> 
						</div>
					</div>
				</div>
			</td>
			<td data-label="LNO">
				<div class="slds-truncate" title="">
					<div class="slds-form-element">
						<div class="slds-form-element__control" >
							<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="3:${rows}" /> 
						</div>
					</div>
				</div>
			</td >
			<td data-label="Scribe">
			<div class="slds-truncate" title="">
				<div class="slds-form-element">
					<div class="slds-form-element__control" >
						<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="4:${rows}" />
					</div>
				</div>
			</div>
			</td>
			<td data-label="OR">
			<div class="slds-truncate" title="">
				<div class="slds-form-element">
					<div class="slds-form-element__control" >
						<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="5:${rows}" />
					</div>
				</div>
			</div>
			</td>
			<td data-label="IC">
			<div class="slds-truncate" title="">
				<div class="slds-form-element">
					<div class="slds-form-element__control" >
						<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="6:${rows}" />
					</div>
				</div>
			</div>
			</td>
			<td data-label="Ex Esc">
			<div class="slds-truncate" title="">
				<div class="slds-form-element">
					<div class="slds-form-element__control" >
						<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="7:${rows}" />
					</div>
				</div>
			</div>
			</td>
			<td data-label="PRI">
			<div class="slds-truncate" title="">
				<div class="slds-form-element">
					<div class="slds-form-element__control" >
						<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="8:${rows}" />
					</div>
				</div>
			</div>
			</td>
			<td data-label="SEC">
			<div class="slds-truncate" title="">
				<div class="slds-form-element">
					<div class="slds-form-element__control" >
						<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="9:${rows}" />
					</div>
				</div>
			</div>
			</td>
			<td data-label="PRI">
			<div class="slds-truncate" title="">
				<div class="slds-form-element">
					<div class="slds-form-element__control" >
						<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="10:${rows}" />
					</div>
				</div>
			</div>
			</td>
			<td data-label="SEC">
			<div class="slds-truncate" title="">
				<div class="slds-form-element">
					<div class="slds-form-element__control" >
						<input type="text" id="text-input-id-1" required="" class="slds-input" data-location="1:${rows}" value="11:${rows}" />
					</div>
				</div>
			</div>
			</td>
			
		</tr >`
			)
		}
		var finalgrid = grid.join("")

		this.setState(() => ({
			grid: finalgrid
		}));

	}



	render() {
		return (
			<div >
				<IconSettings iconPath="/icons">
					<table class="slds-table slds-table_col-bordered slds-table_cell-buffer">
						<thead>
							<tr class="slds-line-height_reset">
								<th class="" scope="col" colspan="1" >
									<div class="slds-truncate">Time</div>
								</th>
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
						<thead>
							<tr class="slds-line-height_reset" >
								<th class="" scope="col">
									<div class="slds-truncate" title="Opportunity Name">UTC</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Opportunity Name">IC</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Account Name">BO</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Close Date">LNO</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Stage">Scribe</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Confidence">OR</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Amount">IC</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Contact">Ex Esc</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Contact">PRI</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Contact">SEC</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Contact">PRI</div>
								</th>
								<th class="" scope="col">
									<div class="slds-truncate" title="Contact">SEC</div>
								</th>
							</tr>
						</thead>

						<tbody dangerouslySetInnerHTML={{ __html: this.state.grid }} />

					</table >
				</IconSettings >
			</div >
		);
	}
}


export default Role;