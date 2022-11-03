// import React, { Component } from "react";
// export class Create extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             message: ""
//         };
//     }
//     refreshlist() {
//         fetch("https://localhost:44387/api/customer", {
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: empInfo
//         }).then(r => r.json()).then(res => {
//             if (res) {
//                 this.setState({ message: 'New Employee is Created Successfully' });
//             }
//         });
//     }
//     componentDidMount() {
//         this.refreshlist();
//     }
//     onCreateEmployee = () => {
//         let empInfo = {
//             CustonerId: cust.value,
//             CustomerSite: site.value,
//             CustomerMarket: market.value,
//             CustomerRegion: region.value

//         };
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Please Enter Employee Details...</h2>
//                 <p>
//                     <label>CustomerId : <input type="text" name="cust" value=""></input></label>
//                 </p>
//                 <p>
//                     <label>CustomerSite : <input type="text" name="site" value=""></input></label>
//                 </p>
//                 <p>
//                     <label>CustomerMarket: <input type="text" name="market" value=""></input></label>
//                 </p>
//                 <p>
//                     <label>CustomerRegion: <input type="text" name="region" value=""></input></label>
//                 </p>
//                 <button onClick={this.onCreateEmployee}>Create</button>
//             </div>

//         )
//     }
// }