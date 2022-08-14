import { useState } from 'react'
import '../style/Cart.css'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, itemType) => acc + itemType.amount * itemType.price,
        0
    )

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button close'
                onClick={() => setIsOpen(false)}
            >
                Close
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Cart</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}₽ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}₽</h3>
                    <button onClick={() => updateCart([])}>Clean the cart</button>
                </div>
            ) : (
                <div>Your cart is empty</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Open the cart
            </button>
        </div>
    )
}

export default Cart