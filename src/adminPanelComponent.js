import React from "react";
import "./style.css";
import axios from "axios";
import TableRow from "./tableRow";
import InfoWrapper from "./InfoWrapper";

class AdminPanelCompo extends React.Component {

    state = {
        userData: [],
        activeUserIndex: 2,
        activeUserId : "",
        typedUserName : "",
        filteredUsers : []
    }

    componentDidMount() {
        axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
            .then((resp) => {
                this.setState({ userData: resp.data, activeUserId: resp.data[2].id })
            })
    }

    changeActiveUser = (id) =>{
        let activeUserIndex = this.state.userData.findIndex( (user, i) => {
            if(user.id == id){
                return true
            }
        })
        this.setState({activeUserId : id, activeUserIndex})
    }

    inputChanged = (e) => {
        let typedUserName = e.target.value
        let filteredUsers =  this.state.userData.filter( (user,i) => {
            if(user.firstName.toLowerCase().includes(typedUserName.toLowerCase())){
                return true
            }
        })
        this.setState({typedUserName, filteredUsers})
    }

    render() {
        return (

            <main>

                <div id="table-section">

                    <form action="/">
                        <input 
                        type="text" 
                        onChange={this.inputChanged}
                        placeholder="Enter something" 
                        name="search-box" 
                        id="search-box" 
                        value={this.state.typedUserName}
                        />
                    </form>

                    <div id="table-wrapper">

                        <div id="table-headers">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="column1">Id</th>
                                        <th className="column2">FirstName</th>
                                        <th className="column3">LastName</th>
                                        <th className="column4">Email</th>
                                        <th className="column5">Phone</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <div id="table-data">
                            <table>
                                <tbody>
                                    {this.state.filteredUsers.length < 1 && this.state.typedUserName == "" ?
                                        this.state.userData.map((user, i) => {
                                        return <TableRow
                                            changeActiveUser = {this.changeActiveUser}
                                            activeUserId = {this.state.activeUserId}
                                            id={user.id}
                                            firstName={user.firstName}
                                            lastName={user.lastName}
                                            email={user.email}
                                            phone={user.phone}
                                        />
                                    }) :    this.state.filteredUsers.map((user, i) => {
                                        return <TableRow
                                            changeActiveUser = {this.changeActiveUser}
                                            activeUserId = {this.state.activeUserId}
                                            id={user.id}
                                            firstName={user.firstName}
                                            lastName={user.lastName}
                                            email={user.email}
                                            phone={user.phone}
                                        />
                                    }) }
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

                   { this.state.userData.length > 0 ?
                   <InfoWrapper
                        activeUserDetails={this.state.userData[this.state.activeUserIndex]}
                    /> : ""}

            </main>

        )
    }
}

export default AdminPanelCompo