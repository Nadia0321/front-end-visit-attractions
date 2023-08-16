import './NavBar.css'
import './Place.module.css'





const NavBar = ({ children }) => {

    return (
        <nav className="NavBar">
            {children}
        </nav>

    )
}

export default NavBar