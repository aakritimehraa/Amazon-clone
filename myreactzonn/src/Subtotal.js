import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import {BrowserRouter as Router , Switch, Route, Link , useHistory} from 'react-router-dom'

function Subtotal() {
const history = useHistory();
    const [{basket} , dispatch] = useStateValue()
    return (
        <div className='subtotal'>
<h1>Subtotal</h1>
     
            <div>
            <p>
            Subtotal ({basket.length} items):
            <strong>{''}</strong>
            <br></br><p>
            <strong>$</strong>{getBasketTotal(basket)}</p>
            <small className='subtotal_gift'>
            <input type='checkbox' />
            this order contains a gift
            </small>
            </p>

            </div>
        
        
    
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
