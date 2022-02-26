import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import {BsFillCartFill} from 'react-icons/bs'
import { useContext } from "react"



export const CardWidget = ()=>{

    const {cantidadCart,cart} = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length === 0 ? 'cart-hidden' : ''}`}>
            <BsFillCartFill/>
            <span>{cantidadCart()}</span>
        </Link>

    )
}