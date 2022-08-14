import { useState } from 'react'
import '../style/ShoppingList.css'
import {productList} from "./ProductList";
import ItemList from './ItemList'
import Categories from './Categories'

function ShoppingList({ cart, updateCart }) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = productList.reduce(
        (acc, item) =>
            acc.includes(item.category) ? acc : acc.concat(item.category),
        []
    )

    function addToCart(name, price) {
        const currentItemSaved = cart.find((item) => item.name === name)
        if (currentItemSaved) {
            const cartFilteredCurrentItem = cart.filter(
                (item) => item.name !== name
            )
            updateCart([
                ...cartFilteredCurrentItem,
                { name, price, amount: currentItemSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <ul className='lmj-plant-list'>
                {productList.map(({ id, cover, name, price, category }) =>
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <ItemList
                                cover={cover}
                                name={name}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Add</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList