import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Header from "./Header";
import Feedback from "./Feedback";


class AdminPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {tab: 0}
    }

     showAdminTab = (index) => {
        // e.preventDefault();
        return () => {
            console.log("clicked")
            console.log(this.state)
            const content = document.querySelector("#admin-content");
            console.log(content)
            if(content.lastElementChild){
                content.removeChild(content.lastElementChild);
            }
            // const index = 5;
            switch(index){
                case 5:
                    console.log("change state to 5");
                    this.setState(
                        {tab: 5});
                    console.log(content)
                    console.log(this.state)
                    break;
            }
        }
    }
    render(){
        return (
            <div>
                 <ButtonGroup color = "primary" aria-label="Admin Header">
                    <Button id = "rencent-account-creation" onclick = "showAdminTab(1)" className="admin-tab col-sm">Recent Account Creations</Button>
                    <Button id = "account-request" onclick = "showAdminTab(2)" className="admin-tab col-sm">Account Requests</Button>
                    <Button id = "frozen-account" onclick = "showAdminTab(3)" className="admin-tab col-sm">Frozen Accounts</Button>
                    <Button id = "all-account" onclick = "showAdminTab(4)" className="admin-tab col-sm">All Accounts</Button>
                    <Button id = "user-feedback" onClick ={this.showAdminTab(5)} className="admin-tab col-sm">User Feedbacks</Button>
                </ButtonGroup>
                <div id="admin-content">
                    {this.state.tab == 5 && <Feedback />}
                </div>
            </div>
        )
    }
}

export default AdminPage;