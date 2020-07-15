import React,{ useState, useEffect } from 'react'

import "./FirebaseData.styles.css"

import { firestore } from "../../Firebase/Firebase.utils"

function FirebaseData({ onClick }) {

    const [data,setData] = useState([])

    const getFirebaseData = async () => {
        let response = await firestore.collection("invoices").get()
        response.docs.map(item => console.log(item.data()))
        setData(response.docs)
        
    }

    useEffect(() => {
        getFirebaseData()
    },[])

    const displayData = data.map((item,index) => {
        let { name, invoiceNumber, quantity, pricePerQuantity, finalPrice, address, status } = item.data()
        return (
            <div className="card" key={index}>
                <h1>{index+1}.{name.toUpperCase()}</h1>
                <p>Quantity:{quantity}</p>
                <p>Price per item:₹{pricePerQuantity}</p>
                <p>Final Price with GST(18%) added:₹{finalPrice}</p>
                <p>Invoice Number:{invoiceNumber}</p>
                <p>Address of the customer:{address}</p>
                <p>Status: {status.toUpperCase()}</p>
            </div>
        )
    })


    return (
        <div className="firebase-data">
            <div className="invoices-header">
                <p className="close" onClick={onClick}>CLOSE</p>
                <h1>Invoices so far...</h1>
            </div>
            <div className="card-grid">
                {data.length>0
                ?
                displayData
                :
                <h1 style={{ marginLeft: "135%" }}>Loading...</h1>
                 }
            </div>
        </div>
    )
}

export default FirebaseData
