import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import {BsFillCartFill} from 'react-icons/bs'
import { useContext } from "react"



export const CardWidget = ()=>{

    const {cantidadCart} = useContext(CartContext)

    return (
        <Link to="/cart" className="
        cart-widget">
            <BsFillCartFill/>
            <span>{cantidadCart()}</span>
        </Link>

    )
}