import { useState, useEffect } from 'react'
import Banner from '../src/components/Banner'
import Cart from '../src/components/Cart'
import Footer from '../src/components/Footer'
import ShoppingList from '../src/components/ShoppingList'
import '../src/style/Layout.css'

function App() {
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <Banner/>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App