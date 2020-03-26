import React from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default function Buttons() {
    return (
        <ButtonGroup color = "primary" aria-label="Admin Header">
                <Button id = "rencent-account-creation" onclick = "showAdminTab(1)" class="admin-tab col-sm">Recent Account Creations</Button>
                <Button id = "account-request" onclick = "showAdminTab(2)" class="admin-tab col-sm">Account Requests</Button>
                <Button id = "frozen-account" onclick = "showAdminTab(3)" class="admin-tab col-sm">Frozen Accounts</Button>
                <Button id = "all-account" onclick = "showAdminTab(4)" class="admin-tab col-sm">All Accounts</Button>
                <Button id = "user-feedback" onclick = "showAdminTab(5)" class="admin-tab col-sm">User Feedbacks</Button>
        </ButtonGroup>
    )
}