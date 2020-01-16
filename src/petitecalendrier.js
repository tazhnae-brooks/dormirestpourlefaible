import React, { Component } from 'react';
// import moment from 'react-moment'
import { IconSettings } from '@salesforce/design-system-react';
import { Datepicker } from '@salesforce/design-system-react';
import './style.css'

class Tiny extends Component {

    render() {
        return (
            // <div className="petitecalendrier">
            <div>
                <IconSettings iconPath="/icons">
                    <Datepicker
                    // disabled
                    // isOpen
                    />
                    {/* <Datepicker 
                    
                    formatter={(date) => {
						return date ? moment(date).format('dddd') : '';
					}}
                    
                    /> */}
                </IconSettings>
            </div>
        );
    }
}

export default Tiny;