import { useContext } from "react"
import CartContext from "../Context/CartContext"
import { Link } from "react-router-dom"
import cart from "../Navbar/Img/cart.jpg"
import './CartWidget.css'



const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/Cart' className="CartWidget">
            <img className="cart" src={cart}/>
            <span>{totalQuantity() || '' }</span>
            
            





        </Link>
    )
}

export default CartWidget;