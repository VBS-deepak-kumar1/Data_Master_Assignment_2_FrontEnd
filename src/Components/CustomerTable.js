import React, { Component } from 'react';
import { variables } from './Variable.js';
const header = new Headers({ "Access-Control-Allow-Origin": "*" });
export class CustomerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customers: [],
            CustOBj: {},
            modalTitle: "",
            CustomerId: 0,
            CustomerSite: "",
            CustomerMarket: "",
            CustomerRegion: ""
        }
    }
    refreshList() {
        fetch(variables.API_URL + 'Customer')
            .then(response => response.json())
            .then(data => {
                this.setState({ Customers: data },
                );
                //console.log(this.state);
            });
        // fetch(variables.API_URL + 'Customer', { header: header })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data));
    }
    componentDidMount() {
        this.refreshList();
    }
    ChangeCustomerId = (e) => {
        this.setState({ CustomerId: e.target.value });
    }
    ChangeCustomerSite = (e) => {
        this.setState({ CustomerSite: e.target.value });
    }
    ChangeCustomerMarket = (e) => {
        this.setState({ CustomerMarket: e.target.value });
    }
    ChangeCustomerRegion = (e) => {
        this.setState({ CustomerRegion: e.target.value });
    }
    addClick() {
        this.setState({
            modalTitle: "Add Customer",
            CustomerId: "",
            CustomerSite: "",
            CustomerRegion: "",
            CustomerMarket: ""
        });
    }
    editClick(Cust) {
        this.setState({
            modalTitle: "Edit Customer",
            CustomerId: Cust.CustomerId,
            CustomerSite: Cust.CustomerSite,
            CustomerRegion: Cust.CustomerRegion,
            CustomerMarket: Cust.CustomerMarket

        });
    }
    createClick() {
        fetch(variables.API_URL + 'Customer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                CustomerId: this.state.CustomerId,
                CustomerSite: this.state.CustomerSite,
                CustomerRegion: this.state.CustomerRegion,
                CustomerMarket: this.state.CustomerMarket

            })
        })
            .then(res => res.json())
            .then(result => {
                alert(result);
                console.log(this.state);
                console.log(result);
                this.refreshList();
                alert(this.state);
            }, (error) => {
                alert('Added successfully.');
            })
    }
    updateClick(CustomerId) {
        fetch(variables.API_URL + 'Customer/' + CustomerId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                CustomerId: this.state.CustomerId,
                CustomerSite: this.state.CustomerSite,
                CustomerMarket: this.state.CustomerMarket,
                CustomerRegion: this.state.CustomerRegion
            })
        }).then(res => res.json())
            .then(result => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Updated successfully');
            })
    }
    deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.API_URL + 'Customer/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
                // ,
                // body: JSON.stringify({
                //     CustomerId: this.state.CustomerId,
                //     CustomerSite: this.state.CustomerSite,
                //     CustomerMarket: this.state.CustomerMarket,
                //     CustomerRegion: this.state.CustomerRegion
                // })
            }).then(res => res.json())
                .then(result => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert('Deleted successfully');
                })
        }
    }
    render() {
        const {
            Customers,
            modalTitle,
            CustomerId,
            CustomerSite,
            CustomerRegion,
            CustomerMarket
        } = this.state;
        return (
            <div>
                <h2 className='bg-light'>This is Customer Table Page</h2>
                <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>Add Customer</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                CustomerId
                            </th>
                            <th>
                                CustomerSite
                            </th>
                            <th>
                                CustomerRegion
                            </th>
                            <th>
                                CustomerMarket
                            </th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Customers.map(Cust =>
                            <tr key={Cust.CustomerId}>
                                <td>{Cust.CustomerId}</td>
                                <td>{Cust.CustomerSite}</td>
                                <td>{Cust.CustomerRegion}</td>
                                <td>{Cust.CustomerMarket}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-primary mr-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.editClick(Cust)}>Edit Customer</button>
                                    <button type="button"
                                        className="btn btn-danger mr-1"
                                        // data-bs-target="#exampleModal"
                                        onClick={() => this.deleteClick(Cust.CustomerId)}>Delete Customer</button>
                                    {/* <button type="button"
                                        className="btn btn-primary mr-1">Edit</button> */}
                                    {/* <button type="button"
                                        className="btn btn-danger mr-1">delete</button> */}
                                </td>
                            </tr>)}
                    </tbody>
                </table>
                <form>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{modalTitle}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="model" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex flex-row bd-highlight float mb-3">
                                        <div className="p-2 w-50 bd-highlight">

                                            <div className="input-group mb-3">
                                                <span className="input-group-text">CustomerId</span>
                                                <input type="text" className="form-control"
                                                    value={CustomerId}
                                                    onChange={this.ChangeCustomerId} />
                                            </div>

                                            <div className="input-group mb-3">
                                                <span className="input-group-text">CustomerSite</span>
                                                <input type="text" className="form-control"
                                                    value={CustomerSite}
                                                    onChange={this.ChangeCustomerSite} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">CustomerRegion</span>
                                                <input type="text" className="form-control"
                                                    value={CustomerRegion}
                                                    onChange={this.ChangeCustomerRegion} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">CustomerMarket</span>
                                                <input type="text" className="form-control"
                                                    value={CustomerMarket}
                                                    onChange={this.ChangeCustomerMarket} />
                                            </div>

                                        </div>
                                        <button type="button"
                                            className="btn btn-primary float-start"
                                            onClick={() => this.createClick()}
                                        > Create</button>
                                        {/* <button type="button"
                                            className="btn btn-primary float-start"
                                            onClick={() => this.updateClick()}
                                        >Update</button> */}
                                        <div>
                                            {/* {CustomerId == 0 ?
                                                <button type="button"
                                                    className="btn btn-primary float-start"
                                                    onClick={() => this.createClick()}
                                                > Create</button>
                                                : null} */}

                                            {CustomerId != 0 ?
                                                <button type="button"
                                                    className="btn btn-primary float-start"
                                                    onClick={() => this.updateClick(CustomerId)}
                                                >Edit</button>
                                                : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div >
        )
    }
}