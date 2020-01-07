import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Roles from './cicrole.js';
import Temps from './temps.js';
import Tiny from './petitecalendrier.js';
import Big from './grandsemaine.js';
import Names from './names.js';

class Index extends Component{
    render(){
        return(
            <div>
                {/* <div>{<Tiny/>}</div>
                <div className="border"></div>
                <div>{<Big/>}</div>
                <br/>
                <div>{<Roles/>}</div>
                <div>{<Temps/>}</div>
                */}
                <Tiny />
                <Temps/>
                <div className="border"></div>
                <Big/>
                <Names/>
                <br/>
                <Roles/>
                {/* <Names/> */}
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));