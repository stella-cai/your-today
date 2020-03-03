import React from 'react';
export default function Frozen(props) {
    const frozen = props.frozen
    const setFrozen = props.setFrozen
    const removeFromScreen = props.removeFromScreen
    const addToScreen = props.addToScreen
    const all = props.all
    const setAll = props.setAll
    const unFrozen = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        let item = {id: frozen[index].id, user: frozen[index].user}
        removeFromScreen(index, setFrozen, frozen)
        addToScreen(setAll, all, item)
    }
    const ignore = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setFrozen, frozen)
    }

    return (
        <div>
                {frozen.map((f, index) => (
                <p key = {index}>{f.user} {f.reason} {f.date} <button onClick = {()=> unFrozen(index, f.id)}>Unfrozen</button> <button onClick = {()=> ignore(index, f.id)}>Ignore</button></p>
                ))}
        </div>
    )
}