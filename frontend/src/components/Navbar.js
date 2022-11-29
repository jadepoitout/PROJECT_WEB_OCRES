import "./Navbar.css";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <div className ="navigation">
          <ul>
            <NavLink to="/">
                <li>Accueil</li>
            </NavLink>

            <NavLink to="/calendrier">
                <li>Calendrier</li>
            </NavLink>

            <NavLink to="/profil">
                <li>Profil</li>
            </NavLink>

          </ul>

        </div>
    )

    }
    
    export default Navbar;