import './NavBar.css'






const NavBar = ({ children }) => {

    return (
        <nav className="NavBar">
            {children}
        </nav>

    )
}

export default NavBar