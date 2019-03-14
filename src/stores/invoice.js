import { observable, action, computed, toJS, autorun} from 'mobx'
import Product from '../models/product'

function autoSave(store, save) {
    autorun(() => {
        const json = JSON.stringify(toJS(store));
        window.sessionStorage.setItem('invoice',json)
    });
}


class Invoice{
    @observable nro = ''
    @observable date = new Date()
    @observable company = {}
    @observable recipient = {}
    @observable products = []
   
    constructor(object){
        this.nro = object.nro
        this.date = object.date
        this.company = object.company
        this.recipient = object.recipient
        this.products = object.products.map((product,index) => new Product(index,product.description,product.hours,product.rate))
        autoSave(this);
    }

    @computed get subtotal(){
        return this.products.reduce((sum,product)  => 
            sum + parseInt(product.amount), 0
        )
    }

    @computed get tax() {
        return this.subtotal * 0.12
    }

    @computed get total() {
        return this.subtotal + this.tax
    }

    @computed get lastId(){
        return this.products[this.products.length - 1].id
    }

    @action addProduct(){
        const id = this.lastId + 1
        this.products.push(new Product(id,'',0,0))
    }
    
    @action removeProduct(id){
        if(this.products.length > 1){
            const index = this.products.indexOf(product => product.id === id)
            this.products.splice(index, 1)
        }
    }

}

export default Invoice