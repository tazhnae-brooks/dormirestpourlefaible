import React, { Component } from 'react';
import {Dropdown} from '@salesforce/design-system-react';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';


class Temps extends Component{

    render(){
        return(
            <IconSettings iconPath="/assets/icons">
            <div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
			    <div className="slds-col_padded">
                <span>Temps:</span>
                    <Dropdown 
                    
                    assisteiveText={{icon: 'checkmark'}}
                    checkmark
                    iconCategory='utility'
                    iconName='down'
                    iconVariant='border-filled'
                    options ={[
                        {label: 'utc', value:'A0'}, 
                        {label: 'eastern', value:'B0'}, 
                    ]}
                    value='A0'
                    //onSelect={{value}}
                    >
                    </Dropdown>
                </div>
            </div>
            </IconSettings>

        )
    }

}

export default Temps;