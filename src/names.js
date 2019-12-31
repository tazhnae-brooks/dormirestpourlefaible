import React, { Component } from 'react';
import{Dropdown, IconSettings} from '@salesforce/design-system-react'
import './style.css';

class Names extends Component{
render(){
    return(
        <div className="namedp">
        <IconSettings>
            <Dropdown
                align="right"
                iconCategory="utility"
                iconName="down"
                iconPosition="right"
                label="Team"
                options={[
                    { label: 'AMER', type: 'header' },
                    { label: 'tazhnae', value: 'A0' },
                    { label: 'Menu Item Two', value: 'B0' },
                    { label: 'Menu Item Three', value: 'C0' },
                    { type: 'divider' },
                    { label: 'EMEA', type: 'header' },
                    { label: 'Menu Item Four', value: 'D0' },
                    { label: 'Menu Item Five', value: 'E0' },
                    { label: 'Menu Item Six', value: 'F0' },
                    { type: 'divider' },
                    { label: 'APAC', type: 'header' },

                    { label: 'Menu Item Seven', value: 'G0' },
                ]}
                />
        </IconSettings>
        </div>
        
    )
}


}

export default Names;