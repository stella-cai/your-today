import React from 'react';
export default function All(props) {
    const feedback = props.feedback
    const setFeedback = props.setFeedback
    const removeFromScreen = props.removeFromScreen
    const read = (index, id) => {
        // Some codes that communicate with the backend... (That's why we need ID here.)
        removeFromScreen(index, setFeedback, feedback)
    }

    return (
        <div>
                {feedback.map((f, index) => (
                <p key = {index}>{f.user} : {f.content}<button onClick = {()=> read(index, f.id)}>Read</button> </p>
                ))}
        </div>
    )
}