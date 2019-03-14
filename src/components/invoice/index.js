import React from 'react'
import DevTools from 'mobx-react-devtools'
import './invoice.css'

import Header from './header'
import Body from './body'

import {inject} from 'mobx-react'

export default inject('invoiceStore')(({invoiceStore}) => (
        <React.Fragment>
            <DevTools position="topRight"/>
            <Header invoiceStore={invoiceStore}/>
            <Body invoiceStore={invoiceStore}/>
        </React.Fragment> 
    ))
 

