import React, { Component } from "react";

export class InfoWrapper extends Component{
    render(){
        return(
            <div id="info-wrapper">
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
        <div id="info-content">
            <div><b>User selected:</b> {this.props.activeUserDetails.firstName} {this.props.activeUserDetails.lastName}</div>
            <div>
                <b>Description: </b>
                <textarea cols="50" rows="5" readonly>
                    {this.props.activeUserDetails.description}
                </textarea>
            </div>
            <div><b>Address:</b> {this.props.activeUserDetails.address.streetAddress}</div>
            <div><b>City:</b>  {this.props.activeUserDetails.address.city}</div>
            <div><b>State:</b>  {this.props.activeUserDetails.address.state}</div>
            <div><b>Zip:</b> {this.props.activeUserDetails.address.zip}</div>
        </div>
    </div>
        )
    }
}

export default InfoWrapper