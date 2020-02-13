import React, { Component } from 'react';
import { IconSettings } from '@salesforce/design-system-react';
import { Datepicker } from '@salesforce/design-system-react';
import './style.css'

class Tiny extends Component {

    render() {
        return (
            <div >
                <IconSettings iconPath="/icons">
                    <Datepicker
                    // isOpen
                    />

                </IconSettings>
            </div>
        );
    }
}

export default Tiny;