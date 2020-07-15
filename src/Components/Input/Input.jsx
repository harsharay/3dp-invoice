import React from "react"

import "./Input.styles.css"

const Input = ({ inputName, labelName, inputType, onChange, value, ...additionalData }) => {
    return (
        <div className="form-element">
            <label htmlFor={inputName}>{labelName}</label><br/>
            <input type={inputType} name={inputName} value={value} onChange={onChange}/>
        </div>
    )
}

export default Input;