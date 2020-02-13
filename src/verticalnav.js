import React, { Component } from 'react';
import { IconSettings } from '@salesforce/design-system-react';

class Smallnav extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <IconSettings iconPath="/icons">
                <div dir="rtl" style="width:32px">
                    <span class="slds-icon_container slds-icon-utility-picklist_type slds-icon_flip" title="List icon">
                        <svg class="slds-icon slds-icon-text-default" aria-hidden="true">
                            <use a href="/assets/icons/utility-sprite/svg/symbols.svg#picklist_type" />
                        </svg>
                        <span class="slds-assistive-text">List icon</span>
                    </span>
                </div>
            </IconSettings >

        );
    }

}

export default Smallnav;