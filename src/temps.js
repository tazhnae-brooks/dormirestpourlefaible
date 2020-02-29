import React, { Component } from 'react';
import { Dropdown } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';
import './style.css'


class Temps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedInput: '',
		}
	}

	handleTimeData(data) {
		let tz = data.tz
		let grid = data.grid
		grid.forEach(gridLocation => {
			let matchingElement = document.querySelector(`[data-location='${gridLocation}']`)
			matchingElement.label = tz

		})
	}

	async handleSelectChange(selected) {
		let name = "pp"

		// find the first grid (1:1)
		let start_grid = selected.grid_span.start_grid.split(":").map(x => +x) // [1,1]
		let end_grid = selected.grid_span.end_grid.split(":").map(x => +x) // [1,4]

		for (let i = start_grid[1]; i <= end_grid[1]; i++) {
			let matchingElement = document.querySelector(`[data-location='${start_grid.join(":")}']`)
			matchingElement.value = name
			start_grid[1]++
		}
	}


	render() {
		return (
			<div className="temps" >
				<IconSettings iconPath="/icons" >
					<Dropdown
						align="left"
						iconCategory="utility"
						iconName="down"
						iconPosition="right"
						label="Temps"
						onSelect={(selected) => {
							this.handleSelectChange(selected);
						}}
						options={[
							{ label: 'UTC', type: 'header' },
							{ label: '0:30 - 3:30', value: '0:30 - 3:30', grid_span: { start_grid: '1:1', end_grid: '1:4' } },
							{ label: '4:30 - 7:30', value: '4:30 - 7:30', grid_span: { start_grid: '1:5', end_grid: '1:8' } },
							{ label: '8:30 - 11:30', value: '8:30 - 11:30', grid_span: { start_grid: '1:9', end_grid: '1:12' } },
							{ label: '12:30 - 15:30', value: '12:30 - 15:30', grid_span: { start_grid: '1:13', end_grid: '1:16' } },
							{ label: '16:30 - 19:30', value: '16:30 - 19:30', grid_span: { start_grid: '1:17', end_grid: '1:20' } },
							{ label: '20:30 - 23:30', value: '20:30 - 23:30', grid_span: { start_grid: '1:21', end_grid: '1:24' } }
						]}
						width="x-small"
					/>
					<br />
					{this.state.selectedInput}
				</IconSettings>
			</div >
		);
	}
}

export default Temps;

/* <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open" style={{ "height": "18rem" }}>
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
						</ul>
					</div>
				</div>*/