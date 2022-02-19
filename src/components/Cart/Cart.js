import { useContext } from "react"
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import {Button, Card} from "react-bootstrap"

export const Cart = () => {
    
    const {eliminarItem,cart, totalCart,vaciarCart} = useContext(CartContext)

    return (
        <>
        {
            cart.length === 0 ? 
                <div className="mx-4">
                    <h1> Tu canasta está vacía</h1> 
                    <Link to={"/"}>
                        <Button className="my-4" variant="primary">Regresar a comprar</Button>
                    </Link>
                </div>
                :
            <div className="container my-5">
                <h2> Compras realizadas</h2>
                <hr/>
                {
                    cart.map(
                        (item) => (
                            <div key={item.id}>
                                <h4>{item.nombre}</h4>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio total: ${item.cantidad*item.precio}</p>
                                <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                                    <BsFillTrashFill/>
                                </button>

                            </div>
                        )
                     )
                }
                 <h2> Total: ${totalCart()} </h2>
                 <div className="my-2">
                    <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
                </div>
            </div>
        }
        </>     
    )

}