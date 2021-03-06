import { NavLink } from 'react-router-dom'
import HeroBg from '../../assets/hero.jpeg'
import Navbar from '../Navbar'
export default function Book(){
    return(
        <div className="book-container">
            <Navbar theme="dark" booking={true}/>
            <h4>Choose Shop</h4>
            <div className="shop-cards-container">
                <NavLink to="/book/shopx" className="shop-link">
                    <div className="shop-card">
                        <div className="shop-image-container">
                            <img src={HeroBg} alt="barber-shop"/>
                        </div>
                        <div className='shop-details'>
                            <p className="shop-name">Houston Barber Plus</p>
                            <p className="shop-address">222 Tree Lane</p>
                            <p className="shop-contact">999-777-1823</p>
                        </div>
                    </div>    
                </NavLink>
            </div>
        </div>
    )
}
