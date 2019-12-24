import React, { Component } from 'react';
import moment from 'react-moment'
import {IconSettings} from '@salesforce/design-system-react';
import {Datepicker} from '@salesforce/design-system-react';
//import Datetime from 'react-datetime';


class Tiny extends Component{

    /*constructor(props){
        super(props);
        this.setState={
            isHidden: true,
        }
    }
    

        YeetInput = props => {
            this.setState({
                isHidden: !this.state.isHidden
            })
        
       */
      //require('react-datetime');

    render(){
        return(
            <div>
                <IconSettings iconPath="/icons">
                <Datepicker 
                //customInput={!this.state.isHidden}
                />
                </IconSettings>
            </div>
           
        );
    }
}

export default Tiny;