import { NavLink } from "react-router-dom"
import './Navbar.css';
import image from '../components/pp2.jpg';
import './menu.png';

/*Définition de la Navbar et création des NavLinks entre les pages*/
function Navbar() {
  return (
    <div className="navigation">
      <ul>
        <div id="admin">
          <h1>Marine DUPONT</h1>
          <img src={image} id="box" alt="/" ></img>

        </div>

        <br />

        <div>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink><br />
        </div>
        <div>
          <NavLink to="/calendrier">
            <li>Calendrier</li>
          </NavLink><br />
        </div>
        <div>
          <NavLink to="/profil">
            <li>Profil</li>
          </NavLink><br />
        </div>
      </ul>



      <img src="menu.png" alt="menu hamburger" class="menu-hamburger"></img>

    </div>

  )

}

export default Navbar;