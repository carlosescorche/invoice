import React from 'react'
import Logo from './logo'

export default ({invoiceStore}) => {

    const {company,recipient} = invoiceStore;

    return(<div className="invoice-header">
            <div className="invoice-container">
                <Logo />
                
                <div className="col-50 txt-right">
                    <h1>{company.name}</h1>
                    <p>{company.address_1}</p>
                    <p>{company.address_2}</p>
                    <p>Nro. {company.nro}</p>
                    <br></br>
                    <p>{company.email}</p>
                    <p>{company.phone}</p>
                </div>

                <div className="invoice-recipient col-50 txt-left">
                    <h3>Recipient</h3>
                    <p>{recipient.name}</p>
                    <p>{recipient.address}</p>
                    <p>{recipient.address_2}</p>
                    <p>Rut. {recipient.rut}</p>
                    <br></br>
                    <p>{recipient.email}</p>
                    <p>{recipient.phone}</p>
                </div>

                <div className="col-50 txt-right">
                    <h2>Invoice</h2>
                    <p><b>Invoice Nro</b></p>
                    <p>{invoiceStore.nro}</p>
                    <p><b>Invoice Date</b></p>
                    <p>{invoiceStore.date}</p>
                </div>
            </div>
        </div>)
}