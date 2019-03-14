import React from 'react'
import Cell from './cell'
import {observer,inject} from 'mobx-react'

@inject('invoiceStore')
@observer
class Table extends React.Component{
    
    handleAdd = (event) => {
        this.props.invoiceStore.addProduct()
        event.preventDefault();
    }

    handleRemove(event,id){
        this.props.invoiceStore.removeProduct(id)
        event.preventDefault();
    }

    render(){
        const {invoiceStore} = this.props
        
        return(
            <table className="invoice-table">
                <thead>
                    <tr>
                        <th width="100px"></th>
                        <th width="50%">TASK</th>
                        <th width="15%">HOURS</th>
                        <th width="15%">RATE</th>
                        <th width="20%">AMOUNT</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        invoiceStore.products.map(product => (
                            <tr key={product.id}>
                                <td><a href="/" onClick={(e) => this.handleRemove(e,product.id)} className="options"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></a></td>
                                <Cell product={product} col="description"/> 
                                <Cell product={product} col="hours"/> 
                                <Cell product={product} col="rate"/> 
                                <Cell product={product} col="amount"/>
                            </tr>
                        ))
                    }

                    <tr>   
                        <td><a href="/" onClick={this.handleAdd} className="options"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></a> </td>
                        <td className="not-border txt-right"><b>SUBTOTAL</b></td>
                        <td></td>
                        <td></td>
                        <td><b>{(invoiceStore.subtotal).toFixed(2)} USD</b></td>
                    </tr>

                    <tr>
                        <td className="not-border txt-right" colSpan="2"><b>TAX 12%</b></td>
                        <td></td>
                        <td></td>
                        <td><b>{(invoiceStore.tax).toFixed(2)} USD</b></td>
                    </tr>
                    <tr>
                        <td className="not-border txt-right" colSpan="2"><b>TOTAL</b></td>
                        <td></td>
                        <td></td>
                        <td><b>{(invoiceStore.total).toFixed(2)} USD</b></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table