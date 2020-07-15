import React from 'react'

import "./Invoice.styles.css"
import { firestore } from "../../Firebase/Firebase.utils"

function Invoice({ onClick, details }) {

    let { productName, quantity, indiPrice, address } = details

    let totalPrice = quantity * indiPrice
    let finalPrice = totalPrice + (totalPrice*0.18)

    //InvoiceNumber
    let now = new Date()
    let invoiceNumber = `${now.getFullYear()}${now.getMonth()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`


    const handleFirestoreAdd = async () => {
        await firestore.collection("invoices").add({
            address: address,
            createdAt: now,
            finalPrice: finalPrice,
            name: productName,
            pricePerQuantity: indiPrice,
            quantity: quantity,
            invoiceNumber: invoiceNumber
        })
    }

    return (
        <div className="display-invoice">
            <div className="invoice-container">
                <p className="close" onClick={onClick}>CLOSE</p>
                <h2>Invoice</h2>
                <p><span>{productName.toUpperCase()}</span></p>
                <p>Quantity: <span>{quantity}</span></p>
                <p>Price per item: <span>₹{indiPrice}</span></p>
                <p>Total Price: <span>₹{totalPrice}</span></p>
                <p>Final Price with GST(18%) added: <span>₹{finalPrice}</span></p>
                <p>Invoice Number: <span>{invoiceNumber}</span></p>
                <p>Address of the customer: <span>{address}</span></p>
                <button onClick={handleFirestoreAdd} className="firebase-button">Add to Database</button>
            </div>
        </div>
    )
}

export default Invoice
