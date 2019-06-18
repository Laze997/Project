import React from 'react'
import { Products } from '../Products/Products';
import { Expenses } from '../Expenses/Expenses';
import { NewProduct } from '../NewProduct/NewProduct';
import { EditProduct} from '../EditProduct/EditProduct'
import {Header} from '../Header/Header'
import {Route} from 'react-router-dom'



export class Portal extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/(newproduct|products|expenses|editproduct)/" component={Header} />
                <Route path="/newproduct" component={NewProduct} />
                <Route path="/products" component={Products} />
                <Route path="/expenses" component={Expenses} />
                <Route path="/editproduct" component={EditProduct}/>
            </div>

        )
    }
}