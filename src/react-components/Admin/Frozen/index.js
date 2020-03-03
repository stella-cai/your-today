import React from 'react';
export default function Frozen(props) {
    const frozen = props.frozen
    const setFrozen = props.setFrozen
    const removeFromScreen = props.removeFromScreen
    const unFrozen = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setFrozen, frozen)
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