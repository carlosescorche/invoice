import InvoiceStore from './invoice'
import object from '../data/invoice'

function getData(){
    return window.sessionStorage.getItem('invoice') ? JSON.parse(window.sessionStorage.getItem('invoice')) : object 
}

const stores = {
    invoiceStore : new InvoiceStore(getData())
}

export default stores