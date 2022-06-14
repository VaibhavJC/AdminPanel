import React, {Component} from "react";

export class TableRow extends Component{
    render(){
        return(
            <tr 
            onClick={() => {this.props.changeActiveUser(this.props.id)}}
            className={`data-row ${this.props.id == this.props.activeUserId ? `active` : ""}`}>
            <td className="column1">{this.props.id}</td>
            <td className="column2">{this.props.firstName}</td>
            <td className="column3">{this.props.lastName}</td>
            <td className="column4">{this.props.email}</td>
            <td className="column5">{this.props.phone}</td>
        </tr>
        )
    }
}

export default TableRow