import React, { useState } from 'react';
export default function All(props) {
    const all = props.all
    const setAll = props.setAll
    const removeFromScreen = props.removeFromScreen
    const addToScreen = props.addToScreen
    const frozen = props.frozen
    const setFrozen = props.setFrozen
    //const [frozenReason, setFrozenReason] = React.useState("")
    const toFrozen = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        let inputs = document.querySelectorAll('input')
        let item = {id: all[index].id, user: all[index].user, reason: inputs[index].value}
        removeFromScreen(index, setAll, all)
        addToScreen(setFrozen, frozen, item)
    }

    return (
        <div>
                {all.map((a, index) => (
                <p key = {index}>{a.user} {a.reason} {a.date} <input id = {index}></input> <button onClick = {()=> toFrozen(index, a.id)}>Frozen</button> </p>
                ))}
        </div>
    )
}