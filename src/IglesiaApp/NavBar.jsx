import { Link, NavLink } from "react-router-dom"


export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark borde-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="img-navbar" src="/logo_ITDG.png" alt="" /> Tiempo de Gloria </Link>
                
                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink 
                            className={ ({ isActive }) => `nav-link me-3 ${ isActive ? 'active' : ''}`}
                            to="/">
                            Inicio
                        </NavLink>
    
                        <NavLink 
                            className={ ({ isActive }) => `nav-link me-3 ${ isActive ? 'active' : ''}`}
                            to="about">
                            Nuestra Iglesia
                        </NavLink>
    
                        <NavLink 
                            className={ ({ isActive }) => `nav-link me-3 ${ isActive ? 'active' : ''}`}
                            to="ubicaciones">
                            Ubicacion
                        </NavLink>
                        
                    </ul>
                </div>
            </div>
        </nav>
      )
}
