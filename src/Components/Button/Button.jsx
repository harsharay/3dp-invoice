import React from 'react'

import "./Button.styles.css"

function Button({ buttonValue, onClick }) {
    return (
        <div>
            <button onClick={onClick}>{buttonValue}</button>
        </div>
    )
}

export default Button
