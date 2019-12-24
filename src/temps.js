import React, { Component } from 'react';
import {Dropdown} from '@salesforce/design-system-react';
import { ProgressIndicator, IconSettings, Icon } from '@salesforce/design-system-react';


class Temps extends Component{
    render(){
        return(
            <IconSettings iconPath="/icons">
            <div className="slds-col_padded">
            <span>Temps: </span>
						<Dropdown
							assistiveText={{ icon: 'Checkmark' }}
							checkmark
							iconCategory="utility"
							iconName="down"
							iconVariant="border-filled"
							options={[
								{ label: 'utc', value: 'A0' },
								{ label: 'eastern', value: 'B0' },
							]}
							value="A0"
						/>
					</div>
        </IconSettings>
        )
    }
  

}

export default Temps;