import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Roles from './cicrole.js';
import Temps from './temps.js';
import Tiny from './petitecalendrier.js';
import Big from './grandsemaine.js';
import Names from './names.js';

class Index extends Component {
    render() {
        return (

            <div class="slds-grid slds-wrap" >
                <div class="slds-col slds-size_1-of-4">
                    <div className="picker"><Tiny /></div>
                    <div>
                    </div>
                    <Names />
                </div>
                <div className="border"></div>
                <div class="slds-col slds-size_3-of-4">
                    <Temps />
                    <Big />
                    <Roles />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));