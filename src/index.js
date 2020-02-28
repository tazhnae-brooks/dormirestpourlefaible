import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Role from './cicrole.js';
import Temps from './temps.js';
import Tiny from './petitecalendrier.js';
import Big from './grandsemaine.js';
import Names from './names.js';
// import { useMediaQuery } from 'react-responsive'

// Breakpoints = () => {
//     const isDesktop = useMediaQuery({
//         query: '(min-device-width: 2124px )'
//     })

//     const isLaptop = useMediaQuery({
//         query: '(min-device-width: 1224px )'
//     })
// }


class Index extends Component {
    state = {
        data: null,
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ data: res.mind }))
            .catch(err => console.log(err));
    }
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        return (

            <div>
                <div class="slds-grid slds-wrap" >
                    {/* {isLaptop}  */}
                    <div class="slds-col slds-size_1-of-12" >
                        {/* {isLaptop && <Tiny />} */}
                        <Tiny />
                    </div>
                    <div class="slds-col slds-size_1-of-12" ><Names /></div>
                    <div class="slds-col slds-size_1-of-12" ><Temps /></div>

                </div>
                <div class="slds-grid slds-wrap" >
                    <div class="slds-col slds-size_4-of-12" ></div>
                    <div class="slds-col slds-size_4-of-12" ><Big /></div>
                    <div class="slds-col slds-size_4-of-12" ></div>
                </div>
                <br />
                <div><Role /></div>
                <p>{this.state.data}</p>
                {/* <p>{this.state.snack}</p> */}

            </div >
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));