import React, { Component } from 'react';
import './SiteForm.css'

export class SiteForm extends Component {
    render() {
        return (
            <div className='Container'>
                <form action="/" method="post" id="EditForm">
                    <div>
                        <h3>Edit Site</h3>
                        <table>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="CustomerID">Customer ID</label>
                                </td>
                                <td>
                                    <input type="text" id="CustomerID" required></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="CustomerSite">Customer Site</label>
                                </td>
                                <td>
                                    <input type="text" id="CustomerSite" required></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="SiteId">Site Id</label>
                                </td>
                                <td>
                                    <input type="text" id="SiteId" required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="SiteName">Site Name</label>
                                </td>
                                <td>
                                    <input type="text" id="SiteName"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="StartDate">Start Date</label>
                                </td>
                                {/* <!-- use here min amd max properties for date --> */}
                                <td>
                                    <input type="date" name="StartDate" id="StartDate"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="EndDate">End Date</label>
                                </td>
                                <td>
                                    <input type="date" name="EndDate" id="EndDate"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="ProjectManager">Project Manager</label>
                                </td>
                                <td>
                                    <input type="text" id="ProjectManager"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="RealEstateSpecialist">Real Estate Specialist</label>
                                </td>
                                <td>
                                    <input type="text" id="RealEstateSpecialist"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="FieldCooedinator">Field Coordinator</label>
                                </td>
                                <td>
                                    <input type="text" id="FieldCoordinator"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="SiteAcqVendor">Site Acq Vendor</label>
                                </td>
                                <td>
                                    <input type="text" id="SiteAcqVendor"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="CivilVendor">Civil Vendor</label>
                                </td>
                                <td>
                                    <input type="text" id="CivilVendor"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="ConstructionVendor">Construction Vendor</label>
                                </td>
                                <td>
                                    <input type="text" id="ConstructionVendor"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="AEFirm">A & E Firm</label>
                                </td>
                                <td>
                                    <input type="text" id="AEFirm"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="CustomerRegion">Customer Region</label>
                                </td>
                                <td>
                                    <input type="text" id="Customer Region"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="CustomerMarket">Customer Market</label>
                                </td>
                                <td>
                                    <input type="text" id="CustomerMarket"></input>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="LandlordName">Landlord Name</label>
                                </td>
                                <td>
                                    <input type="text" id="LandlordName"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="LandlordType">Landlord Type</label>
                                </td>
                                <td>
                                    <input type="text" id="LandlordType"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="LandlordContactInfo">Landlord Contact Info</label>
                                </td>
                                <td>
                                    {/* <!-- <input type="text" id="LandlordContactInfo"> --> */}
                                    <textarea name="" id="" cols="30" rows="5" value="EditForm"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="Latitude">Latitude</label>
                                </td>
                                <td>
                                    <input type="text" id="Latitude"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="Longitude">Longitude</label>
                                </td>
                                <td>
                                    <input type="text" id="Longitude"></input>
                                </td>
                                <td>
                                    <label className='labelStyle' for="Jurisdiction">Jurisdiction</label>
                                </td>
                                <td>
                                    <input type="text" id="Jurisdiction"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="Status">Status</label>
                                </td>
                                <td>
                                    {/* <!--disabled="disabled" --> */}
                                    <select name="" id="Status">
                                        <option value="Active">Active</option>
                                        <option value="InActive">InActive</option>
                                    </select>
                                </td>
                                <td>
                                    <label className='labelStyle' for="AssignedTo">Assigned To</label>
                                </td>
                                <td>
                                    {/* <!--disabled="disabled" --> */}
                                    <select name="" id="AssignedTo">
                                        <option value="Active">John</option>
                                        <option value="InActive">Bela</option>
                                    </select>
                                </td>
                                <td>
                                    <label className='labelStyle' for="SiteType">Site Type</label>
                                </td>
                                <td>
                                    {/* <!--disabled="disabled" --> */}
                                    <select name="" id="SiteType">
                                        <option value="Building">Building</option>
                                        <option value="Road">Road & Bridge</option>
                                    </select>
                                </td>
                            </tr>

                        </table>
                    </div>
                    <hr></hr>
                    <div>
                        <h3>Site Address (Please enter Zip Code to auto-populate City ,State and Counrty)</h3>
                        <table>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="Street">Street</label>
                                </td>
                                <td>
                                    <input type="text" id="Street"></input>
                                </td>

                                <td>
                                    <label className='labelStyle' for="City">City</label>
                                </td>
                                <td>
                                    {/* <input type="text" id="City"></input> */}
                                    <select id='City'>
                                        <option>-select-</option>
                                        <option>Patna</option>
                                        <option>Delhi</option>
                                    </select>
                                </td>
                                <td>
                                    <label className='labelStyle' for="State">State</label>
                                </td>
                                <td>
                                    <input type="text" id="State"></input>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="ZipCode">ZipCode</label>
                                </td>
                                <td>
                                    {/* <!-- <input type="text" id="ZipCode"> --> */}
                                    <select name="" id="ZipCode">
                                        <option value="110001">110001</option>
                                        <option value="110012">110012</option>
                                    </select>
                                </td>
                                <td>
                                    <label className='labelStyle' for="Country">Country</label>
                                </td>
                                <td>
                                    <input type="text" id="Country"></input>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br></br>
                    <div>
                        <h3>Work Flow </h3>
                        <table>
                            <tr>
                                <td>
                                    <label className='labelStyle' for="AEManager">AE Manager</label>
                                </td>
                                <td>
                                    {/* <!-- <input type="text" id="ZipCode"> --> */}
                                    <select name="" id="AEManager">
                                        <option value="1">-SELECT-</option>
                                        <option value="2">Raju</option>
                                        <option value="3">Shyam</option>
                                    </select>
                                </td>
                                <td>
                                    <label className='labelStyle' for="ConstructionManager">Construction Manager</label>
                                </td>
                                <td>
                                    {/* <!-- <input type="text" id="ZipCode"> --> */}
                                    <select name="" id="ConstructionManager">
                                        <option value="1">-SELECT-</option>
                                        <option value="2">Raju</option>
                                        <option value="3">Shyam</option>
                                    </select>
                                </td>
                                <td>
                                    <label className='labelStyle' for="ClientCM">Client CM</label>
                                </td>
                                <td>
                                    {/* <!-- <input type="text" id="ZipCode"> --> */}
                                    <select name="" id="ClientCM">
                                        <option value="1">-SELECT-</option>
                                        <option value="2">Raju</option>
                                        <option value="3">Shyam</option>
                                    </select>
                                </td>


                            </tr>
                        </table>
                    </div>

                    <button type='submit'>Save</button>
                    <button type='reset'>Reset</button>

                </form >
            </div >
        )
    }
}