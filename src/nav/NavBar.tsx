import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">PD's Job Portal</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jobs" >Jobs</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;