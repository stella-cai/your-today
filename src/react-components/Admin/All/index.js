import React from 'react';
export default function All(props) {
    const all = props.all
    const setAll = props.setAll
    const removeFromScreen = props.removeFromScreen
    const frozen = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setAll, all)
    }

    return (
        <div>
                {all.map((a, index) => (
                <p key = {index}>{a.user} {a.reason} {a.date} <button onClick = {()=> frozen(index, a.id)}>Frozen</button> </p>
                ))}
        </div>
    )
}