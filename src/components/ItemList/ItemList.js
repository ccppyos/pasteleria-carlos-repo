import { Contenedor } from "../Contenedor/Contenedor"
import { Item } from "../Item/Item"




export const ItemList = ({productos} ) => {

    return(
        <Contenedor>
            <h2>Nuestros productos</h2>
            <hr/>
            <div className="row">
                {productos.map( (ele)=> <Item key={ele.id}{...ele}{...ele}/>)}                
            </div>
        </Contenedor>
    )

}