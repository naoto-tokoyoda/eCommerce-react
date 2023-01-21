import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating }) => {

    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id:id,
        })
    }

  return (
    <div className="checkoutProduct">
        <img src={image} 
            alt="" 
            className="checkoutProduct__image" 
        />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
             {title}
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_,index) => (
                      <p key={index}>⭐</p>
                    ))
                }
            </div>
            <button onClick={removeFromCart} >Remove</button>
        </div>
    </div>
  )
}

export default CheckoutProduct