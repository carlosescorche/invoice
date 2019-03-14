import React from 'react'
import TableInvoice from './table'

export default ({ invoiceStore }) => {
    return(
    <div className="invoice-body">
        <div className="invoice-container">
            
            <TableInvoice/>

            <div className="note-1">
                <p className="txt-light"> Transfer the amount to the business account below. Please include invoice number on your check. <br></br> <b>BANK:</b> ITAU <b>IBAN:</b>  GB82-1111-2222-3333 </p>
            </div>

            <div className="note-2">
                <p><b>NOTE</b></p>
                <p className="txt-light">All amounts are in dollars. Please make the payment within 15 days from the issue of date of this invoice. Tax is not charged on the basis of paragraph 1 of Article 94 of the Value Added Tax Act (I am not liable for VAT).</p><p className="txt-light"> Thank you for you confidence in my work.</p>
            </div>

            <div className="footer">
                <p className="txt-primary">{invoiceStore.company.name}</p>
                <p>{invoiceStore.company.email}</p>
            </div>
        </div>
    </div>
    )
}