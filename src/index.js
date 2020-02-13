import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Role from './cicrole.js';
// import Temps from './temps.js';
import Tiny from './petitecalendrier.js';
import Big from './grandsemaine.js';
import Names from './names.js';
// import { useMediaQuery } from 'react-responsive'


// const { Pool, Client } = require('pg')
// const pool = new Pool({
//     connectionString: 'postgres://ubtlfhpbj38tfn:p5100a09cb4d89b2b1b580c4e46dc8544b8d35e446433e4ca703aacdfc9542711@ec2-3-84-65-54.compute-1.amazonaws.com:5432/d3pmrrgfd42jnl'
// })
// pool.query('SELECT * FROM test', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })


class Index extends Component {

    // Breakpoints = () => {
    //     const isDesktop = useMediaQuery({
    //         query: '(min-device-width: 2124px )'
    //     })

    //     const isLaptop = useMediaQuery({
    //         query: '(min-device-width: 1224px )'
    //     })
    // }

    render() {
        return (

            <div>
                <div class="slds-grid slds-wrap" >
                    {/* {isLaptop}  */}
                    <div class="slds-col slds-size_2-of-12" >
                        {/* {isLaptop && <Tiny />} */}
                        <Tiny />
                    </div>
                    <div class="slds-col slds-size_1-of-12" ><Names /></div>
                </div>
                <div class="slds-grid slds-wrap" >
                    <div class="slds-col slds-size_4-of-12" ></div>
                    <div class="slds-col slds-size_4-of-12" ><Big /></div>
                    {/* <div className="date"> <Big /> </div> */}
                    <div class="slds-col slds-size_4-of-12" ></div>
                </div>
                <br />
                <div><Role /></div>
            </div>

        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));