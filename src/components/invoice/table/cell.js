import React from 'react'

export default class Cell extends React.Component{
    
    textField = React.createRef()
    
    state = {
        editing : false
    }

    handleEdit = (event) => {
        this.setState((state) => ({editing : !state.editing}))
        event.preventDefault();
    }

    handleSubmit = (event) => {
        if (this.textField.current.type === 'number'){
            // no permitir ingresar e + - = ,
            if ([69, 187, 188, 189, 190].includes(event.keyCode)){ event.preventDefault(); return;}
        }

        // al presionar enter o escape se guarda el valor
        if (![13, 27].includes(event.keyCode)) return;

        const val = this.textField.current.value

        if(val)
            this.props.product.setField(this.props.col,val)

        this.handleEdit(event)

        event.preventDefault();
    }

    render(){

        const {product,col} = this.props
        
        const label = () =>{
                if (col === 'amount')
                    return (product[col]).toFixed(2) + ' USD'
                if (col === 'rate')
                    return <a href="/" onClick={this.handleEdit} title="click for edit">{product[col]} USD</a>
                if (col ==='description' && product[col].length === 0)
                    return <a href="/" onClick={this.handleEdit} title="click for edit"><em>Empty, click for edit</em></a>
                else
                    return <a href="/" onClick={this.handleEdit} title="click for edit">{product[col]}</a>
        }

        return (
            <td>
                {
                    !this.state.editing ?

                            label()
                                
                        :
                        <input 
                            ref={this.textField}
                            name={col} 
                            type={col !== 'description' ? 'number' : 'text'}
                            placeholder={col.charAt(0).toUpperCase() + col.slice(1)} 
                            defaultValue={product[col]}
                            onKeyDown={this.handleSubmit}
                            autoFocus={true}
                            onBlur={this.handleEdit}
                            />
                }
            </td>
        )
    }
    
}