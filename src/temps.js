import React, { Component } from 'react';
import { Dropdown } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';
import './style.css'


const roleoptions = [
	{ label: 'UTC', type: 'header' },
	{ label: '0:30', value: '0:30' },
	{ label: '1:30', value: '1:30' },
	{ label: '2:30', value: '2:30' },
	// { type: 'divider' },
	// { label: 'Eastern', type: 'header'},
	// { label: 'Menu Item Six', value: 'F0' },
	// { label: 'Menu Item Seven', value: 'G0' },
]

class Temps extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// selectedValue: 'time',
			finalgrid: ""
		}
	}

	// handleSelectChange(value) {
	// 	this.setState({ selectedValue: value })
	// }

	componentDidMount() {
		var utc = [];
		for (var time = 0; time <= 23; time++) {
			utc.push(

				`<td data-label="">
					<div class="slds-truncate slds-no-row-hover" title="">
						<div class="slds-form-element ">
							<div class="slds-form-element__control" >
								<p>${time}:30</p> 
							</div>
						</div>
					</div>
				</td>
				</tr>`
			)
		}
		var finalgrid = utc.join("")

		this.setState(() => ({
			utc: finalgrid
		}));
	}



	render() {
		return (
			<div className="temps" >
				<table class="slds-table slds-table_col-bordered ">
					<thead>
						<tr class="slds-line-height_reset">
							<th class="" scope="col" colspan="2" >
								<div class="slds-truncate" title="Opportunity Name">Time</div>
							</th>
						</tr>
					</thead>
					<tbody dangerouslySetInnerHTML={{ __html: this.state.utc }} />
				</table>

				{/* <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" style={{ "height": "18rem" }}>
					{/* <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" title="Show More">
						{/* <svg class="slds-button__icon" aria-hidden="true"></svg> 
						{/* <span class="slds-assistive-text">Show More</span> 
					</button>
					<div class="slds-dropdown slds-dropdown_left slds-dropdown_x-small">
						<ul class="slds-dropdown__list .slds-dropdown_length-10" role="menu" aria-label="Show More">
							<li class="slds-dropdown__header slds-truncate" title="Menu Sub Heading" role="separator" >
								<span style={{ "height": "1.6rem" }}>UTC</span>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="0">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>0:30 </span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>2:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>3:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>4:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>5:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>6:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>7:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>8:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>9:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>10:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>11:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>12:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>13:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>14:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>15:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>16:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>17:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>18:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>19:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>20:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>21:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>22:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>23:30</span>
								</a>
							</li> 


						</ul>
		</div>
			</div>*/}
				{/* <span> Temps: </span> */}
				{/* <IconSettings iconPath="/icons" >
					<Dropdown
						// assistiveText={{ icon: 'Checkmark' }}
						// checkmark
						align="left"
						iconCategory="utility"
						iconName="down"
						iconPosition="right"
						label="Temps"
						onSelect={(selected) => {
							this.handleSelectChange(selected.value);
						}}
						options={roleoptions}
						width="x-small"
						length="10"
						isOpen
					/>
					<br />
					{this.state.selectedValue}
				</IconSettings> */}
			</div >
		);
	}
}

export default Temps;