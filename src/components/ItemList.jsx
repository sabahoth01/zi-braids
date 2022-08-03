import '../style/ItemList.css'


function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function ItemList({ cover, name,  price }) {
    return (
        <li className='lmj-plant-item' onClick={() => handleClick}>
            <span className='lmj-plant-item-price'>{price}₽</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
        </li>
    )
}

export default ItemList