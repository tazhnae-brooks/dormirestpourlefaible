import React, { Component } from 'react';
import {IconSettings} from '@salesforce/design-system-react';
import {Datepicker} from '@salesforce/design-system-react';


class Tiny extends Component{

    render(){
        return(
            <div className="petitecalendrier">
                <IconSettings iconPath="/icons">
                    <Datepicker 
                        // disabled
                        isOpen   
                    />
               </IconSettings>
              </div>
        );
    }
}

export default Tiny;