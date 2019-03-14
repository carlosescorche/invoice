import {observable,action, computed} from 'mobx'

class Product{
    id;
    @observable description = ''
    @observable hours = 0
    @observable rate = 0
    
    constructor(id,description,hours,rate){
        this.id = id
        this.description = description
        this.hours = hours
        this.rate = rate
    }

    @computed
    get amount(){
        return parseInt(this.hours) * parseInt(this.rate)
    }

    @action
    setField(key,value){
        this[key] = value
    }
}

export default Product