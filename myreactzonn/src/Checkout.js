import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal.js'
import CurrencyFormat from 'react-currency-format'
function Checkout() {
    const [{basket}] = useStateValue()
    return (
        <div className='checkout'>
        <div className='checkout_left'>

        <img className='checkout_ad' src = 'https://www.amazon.in/images/G/31/img16/vineet/emifestjuly/ICICI_ILM_640x45._CB409142168_.jpg'/>


        {basket?.length === 0 ? (
            <div>
            <h2>Basket is empty </h2>
            <p>you have no nitems in your basket , to buy one or more click on 'Add to basket' next to the item</p>
            </div>

        )
            : (
                <div>
                <h2 className='checkout_title'>your basket </h2>
                {basket.map((item) => {
                    return (
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                    )

                    })}
                    
            </div>
        )}
        </div>
        {basket?.length > 0 && (
          <div className='checkout_right'>
          <Subtotal />
          </div>  
        )}
        </div>
    )
}

export default Checkout
