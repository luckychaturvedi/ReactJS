import { LOGO_URL } from "../uitils/constant";
const Header = () => {

    return(
        <div className="header-section">
            <div className="logo">
                <img src={LOGO_URL} alt="logo img" />
            </div>
            <nav className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>services</li>
                </ul>
            </nav>
        </div>
    )
   
}

export default Header;