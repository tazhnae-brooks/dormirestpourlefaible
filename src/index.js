import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Big from './grandsemaine.js';
import Temps from './temps.js'
import Tiny from './petitecalendrier.js';
//import {Datepicker} from '@salesforce/design-system-react';
class Index extends Component{
    render(){
        return(
            <div>
                <div>{<Tiny/>}</div>
                <div>{<Big />}</div>
                <div>{<Temps/>}</div>
               
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));