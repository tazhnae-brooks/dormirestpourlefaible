import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Role from './cicrole.js';
import Temps from './temps.js';
import Tiny from './petitecalendrier.js';
import Big from './grandsemaine.js';
import Names from './names.js';

class Index extends Component {
    render() {
        return (

            <div class="slds-grid slds-wrap" >
                {/* <div class="slds-col slds-size_2-of-12 slds-border_right" style={{ "height": "70rem" }}>
                    <div className="picker"> <Tiny /></div>
                </div> */}
                {/* <div class="slds-col slds-size_1-of-12 slds-dropdown_xxx-small">
                    <Temps />
                </div> */}

                <div class="slds-col slds-size_12-of-12" >
                    <Tiny />
                    <Names />
                    <div class="slds-grid slds-wrap" >
                        <div class="slds-col slds-size_4-of-12" > </div>
                        <div class="slds-col slds-size_4-of-12" ><Big /></div>
                        {/* <div className="date"> <Big /> </div> */}
                        <div class="slds-col slds-size_4-of-12" ></div>
                    </div>
                    <br />
                    <div className="roles"> <Role /> </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));