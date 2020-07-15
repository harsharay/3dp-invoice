import React,{ useState } from "react"

import Invoice from "../Invoice/Invoice"

import Button from "../Button/Button"

import "./Form.styles.css"

import Input from "../Input/Input"

import FirebaseData from "../FirebaseData/FirebaseData"

const Form = () => {

    const [details, setDetails] = useState({
        customerName: "",
        productName: "",
        quantity: 0,
        indiPrice: 0,
        finalPrice: 0,
        address: "",
        displayInvoice: false,
        displayFirebaseData: false
    })

    const handleChange = e => {
        let fieldName = e.target.name
        let newValue = e.target.value
        setDetails(prevValue => {
            if(fieldName==="customerName"){
                return {
                    ...prevValue,
                    customerName : newValue
                }
            }else if(fieldName==="productName"){
                return {
                    ...prevValue,
                    productName : newValue
                }
            } else if(fieldName==="quantity"){
                return {
                    ...prevValue,
                    quantity: newValue
                }
            } else if(fieldName==="indiPrice"){
                return {
                    ...prevValue,
                    indiPrice : newValue
                }
            } else if(fieldName==="address"){
                return {
                    ...prevValue,
                    address : newValue
                }
            }
        })
    }

    const handleInvoice = () => {
        if(details.productName.length>0 && details.quantity>0 && details.indiPrice>0 && details.address.length>0){
            setDetails(prevValue => {
                return {
                    ...prevValue,
                    displayInvoice: !details.displayInvoice
                }
            })
        } else {
            alert("Enter all the details to proceed further")
        }
    }

    const handleFirebase = () => {
        setDetails(prevValue => {
            return {
                ...prevValue,
                displayFirebaseData : !details.displayFirebaseData
            }
        })
    }

    const handleCloseInvoice = () => {
        setDetails(prevValue => {
           return {
            ...prevValue,
            displayInvoice : !details.displayInvoice
           }
        })
    }

    const handleCloseFirebase = () => {
        setDetails(prevValue => {
            return {
                ...prevValue,
                displayFirebaseData : !details.displayFirebaseData
            }
        })
    }

    return (
        <div className="form">
            <h1>Fill this form</h1>
            <Input inputName="customerName" inputType="text" labelName="Customer Name" onChange={handleChange} value={details.customerName}/>
            <Input inputName="productName" inputType="text" labelName="Product Name" onChange={handleChange} value={details.productName}/>
            <Input inputName="quantity" inputType="number" labelName="Quantity" onChange={handleChange} value={details.quantity}/>
            <Input inputName="indiPrice" inputType="number" labelName="Individual Price" onChange={handleChange} value={details.indiPrice}/>
            <label htmlFor="address" className="address-label">Address</label>
            <textarea  name="address" cols="24" rows="8" onChange={handleChange} value={details.address}></textarea>
            <div className="button-group">
                <Button buttonValue="Get the invoice" onClick={handleInvoice}/>
                <Button buttonValue="View Data from Firebase" onClick={handleFirebase}/>
            </div>
            {details.displayInvoice 
            ?
            <Invoice onClick={handleCloseInvoice} details={details}/>
            :
            null}
            {details.displayFirebaseData ?
            <FirebaseData onClick={handleCloseFirebase}/>
            :
            null}
        </div>
    )
}

export default Form;