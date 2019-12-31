import React, { Component } from 'react';
import {Dropdown} from '@salesforce/design-system-react';
import {IconSettings} from '@salesforce/design-system-react';


var roleoptions= [
		{ label: 'UTC', type: 'header'},
		{ label: 'time', value: '0:30' },
		{ label: 'time', value: '1:30' },
		// { type: 'divider' },
		// { label: 'Eastern', type: 'header'},
		// { label: 'Menu Item Six', value: 'F0' },
		// { label: 'Menu Item Seven', value: 'G0' },
]
// Element.textContent = roleoptions.join('\n')

class Temps extends Component{
	constructor(props){
		super(props);

		this.state={
		  selectedValue: 'froid doigts'
		}
	  }

	handleSelectChange(value){
		this.setState({selectedValue: value})
	}
	

    render(){
		
        return(
			<div className="temps">
				{/* <span> Temps: </span> */}
				<IconSettings iconPath="/icons">
						<Dropdown
							assistiveText={{ icon: 'Checkmark' }}
							checkmark
							iconCategory="utility"
							iconName="down"
							iconVariant="border-filled"
							onSelect={(selected) => {
								this.handleSelectChange(selected.value);
								Element.textContent = roleoptions.join('\n')
							}}
							options={roleoptions}
				/>
				
				{this.state.selectedValue}

		</IconSettings>
			</div>			
            
        );
    }
}

export default Temps;