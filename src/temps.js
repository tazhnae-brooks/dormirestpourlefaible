import React, { Component } from 'react';
import { Dropdown } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';
import './style.css'


const roleoptions = [
	{ label: 'UTC', type: 'header' },
	{ label: 'time', value: '0:30 1:30' },
	{ label: 'time', value: '2:30' },
	// { type: 'divider' },
	// { label: 'Eastern', type: 'header'},
	// { label: 'Menu Item Six', value: 'F0' },
	// { label: 'Menu Item Seven', value: 'G0' },
]

class Temps extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedValue: 'time',
			// finalgrid: ""
		}
	}

	handleSelectChange(value) {
		this.setState({ selectedValue: value })
	}

	// componentDidMount() {
	// 	var time = [];
	// 	for (var rows = 1; rows <= 3; rows++) {
	// 		time.push(

	// 		)
	// 	}
	// 	var finalgrid = grid.join("")

	// 	this.setState(() => ({
	// 		grid: finalgrid
	// 	}));
	// }



	render() {
		return (
			<div className="temps">
				<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" style={{ "height": "14rem" }}>
					{/* <button class="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" title="Show More">
						{/* <svg class="slds-button__icon" aria-hidden="true"></svg> 
						{/* <span class="slds-assistive-text">Show More</span> 
					</button> */}
					<div class="slds-dropdown slds-dropdown_left slds-dropdown_x-small">
						<ul class="slds-dropdown__list .slds-dropdown_length-10" role="menu" aria-label="Show More">
							<li class="slds-dropdown__header slds-truncate" title="Menu Sub Heading" role="separator" >
								<span>UTC</span>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="0">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>0:30 </span>
								</a>
							</li>
							{/* <br /> */}
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:00</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>2:00</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>2:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>
							<li class="slds-dropdown__item" role="presentation">
								<a href="javascript:void(0);" role="menuitem" tabindex="-1">
									<span class="slds-truncate" title="Menu Item One" style={{ "height": "1.6rem" }}>1:30</span>
								</a>
							</li>


						</ul>
					</div>
				</div>
				{/* <span> Temps: </span> */}
				{/* <IconSettings iconPath="/icons">
					<Dropdown
						// assistiveText={{ icon: 'Checkmark' }}
						// checkmark
						align="left"
						iconCategory="utility"
						iconName="down"
						// iconVariant="border-filled"
						iconPosition="right"
						label="Temps"
						onSelect={(selected) => {
							this.handleSelectChange(selected.value);
						}}
						options={roleoptions}
					/>
					<br />
					{this.state.selectedValue}
				</IconSettings> */}
			</div >
		);
	}
}

export default Temps;