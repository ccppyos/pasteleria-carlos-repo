import './NavBar.css' 

export const NavBar = () => {
    return(
        <header className="header">
            <h1>PASTELERIA PIALE</h1>
            <nav className="header-nav">
                <p className="header-link">Tortas</p>
                <p className="header-link">Empanadas</p>
                <p className="header-link">Cupcakes</p>
            </nav>
        </header>
    )
}


