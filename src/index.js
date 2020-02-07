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
                <div class="slds-col slds-size_2-of-12 slds-border_right" style={{ "height": "83rem" }}>
                    <div className="picker"> <Tiny /></div>
                    <Names />
                </div>
                <div class="slds-col slds-size_1-of-12 slds-dropdown_xxx-small">
                    <Temps />
                    {/* <div class="slds-border_right " /> */}

                </div>
                <div class="slds-col slds-size_9-of-12" >
                    <div className="date"> <Big /> </div>
                    <br />
                    <div className="roles"> <Role /> </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));