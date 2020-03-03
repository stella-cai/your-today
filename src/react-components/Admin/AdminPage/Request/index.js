import React from 'react';
export default function Request(props) {
    const request = props.request
    const setRequest = props.setRequest
    const removeFromScreen = props.removeFromScreen
    const approve = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setRequest, request)
    }
    const disapprove = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setRequest, request)
    }

    return (
        <div>
                {request.map((r, index) => (
                <p key = {index}>{r.user} {r.reason} {r.date} <button onClick = {()=> approve(index, r.id)}>Approve</button> <button onClick = {()=> disapprove(index, r.id)}>Disapprove</button></p>
                ))}
        </div>
    )
}