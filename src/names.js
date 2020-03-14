// import React, { Component } from 'react';
// import { Dropdown, IconSettings } from '@salesforce/design-system-react'
// import './style.css';
// const moment = require("moment")

// class Names extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedInput: ''
//         }
//     }

//     handleNameData(data) {
//         let name = data.name
//         console.log(data);
//         let grid = data.grid
//         grid.forEach(gridLocation => {
//             let matchingElement = document.querySelector(`[data-location='${gridLocation}']`)
//             matchingElement.value = name
//         })
//     }

//     async handleSelectChange(value) {
//         let date = document.getElementById("date").getAttribute("data-day")
//         let formatDate = moment(date).format("YYYY-MM-DD");
//         console.log(formatDate);
//         const response = await fetch(`/query?name=${value}&date=${formatDate}`);
//         const body = await response.json();
//         if (response.status !== 200) {
//             throw Error(body.message)
//         }
//         this.handleNameData(body.data[0]);
//     }

//     save() {
//         let date = document.getElementById("date").getAttribute("data-day")
//         let formatDate = moment(date).format("YYYY-MM-DD");

//         let saveData = {
//             "date": formatDate,
//             "data": []
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <div className="namedp">
//                     <IconSettings>
//                         <Dropdown
//                             align="right"
//                             iconCategory="utility"
//                             iconName="down"
//                             iconPosition="right"
//                             label="Team"
//                             width="small"
//                             // submenu_right={true}
//                             onSelect={(selected) => {
//                                 this.handleSelectChange(selected.value);
//                             }}
//                             options={[
//                                 { label: 'AMER', type: 'header' },
//                                 { label: 'tazhnae', value: 'tazhnae' },
//                                 { label: 'jane', value: 'jane' },
//                                 { label: 'general kenobi', value: 'general kenobi' },
//                                 { type: 'divider' },
//                                 { label: 'EMEA', type: 'header' },
//                                 { label: 'Menu Item Four', value: 'D0' },
//                                 { label: 'Menu Item Five', value: 'E0' },
//                                 { label: 'Menu Item Six', value: 'F0' },
//                                 { type: 'divider' },
//                                 { label: 'APAC', type: 'header' },
//                                 { label: 'Menu Item Seven', value: 'G0' },
//                             ]}
//                         />
//                         {this.state.selectedInput}
//                     </IconSettings>
//                 </div>
//                 <div>
//                     <button class="slds-button slds-button_neutral" onClick={this.save}>Save</button>
//                 </div>
//             </div >
//         )
//     }
// }

// export default Names;