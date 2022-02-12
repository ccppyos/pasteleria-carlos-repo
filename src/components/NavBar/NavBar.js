import { Link } from 'react-router-dom'
import './NavBar.scss' 

export const NavBar = () => {

    const styles ={
        textDecoration: 'none',
        color: 'black'
    }
    

    return(
        <header className="header">
            { <Link to='/' style={styles}>
                <h1>Pasteleria Piale</h1>
            </Link>}

            <nav className="header-nav">
                <Link to='/productos/empanadas' className= 'header-link'>Empanadas</Link>
                <Link to='/productos/pasteleria' className= 'header-link'>Pasteles </Link>
                <Link to='/nosotros' className= 'header-link'>Nosotros</Link>
            </nav>
        </header>
    )
}


