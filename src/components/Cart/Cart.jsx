import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;

    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Boroloxx</h3>
            <p>Thank for shopping</p>
        </div>
    }

    return (
        <div>
            <h2>Order Summary</h2>
            {message}
            {cart.length > 2 ? <span>Aro kino </span> : <span>Ato Kom?</span>}
            {
                cart.map( tshirt => <p
                key={tshirt._id}
                >{tshirt.name} 
                <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length <= 2 &&  <h2>Onek kom order</h2>
            }
            {
                cart.length <= 2 || <h2>Mananshoi order</h2>
            }
        </div>
    );
};

export default Cart;