import logo from '../assets/logo.png'
import '../style/Banner.css'
import Discount from "./Discount";

function Banner() {
    const title = 'ziBraid'

    return (
        <div className='zi-banner'>
            <img src={logo} alt='ziBraids' className='zi-logo'/>
            <h1 className='zi-title'>{title}</h1>
            <h3 className='discount'><Discount/></h3>
        </div>
    )
}

export default Banner