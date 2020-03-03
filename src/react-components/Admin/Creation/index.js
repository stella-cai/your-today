import React from 'react';
export default function Creation(props) {
    const creation = props.creation
    const setCreation = props.Creation
    return (
        <div>
                {creation.map((eachCreation, index) => (
                <p key = {index}>{eachCreation.user} {eachCreation.date}</p>
                ))}
        </div>
    )
}