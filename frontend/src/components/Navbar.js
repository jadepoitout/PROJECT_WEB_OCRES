import { NavLink } from "react-router-dom"
import './Navbar.css';
import image from '../components/pp2.jpg';
import './menu.png';
import { FaHome } from 'react-icons/fa';
import {AiOutlineCalendar } from 'react-icons/ai';
import {CgProfile } from 'react-icons/cg';


/*Définition de la Navbar et création des NavLinks entre les pages*/
function Navbar() {
  return (
    <div className="navigation">
      <ul>
        <div id="admin">
          <h1>Marine DUPONT</h1>
          <img src={image} id="box" alt="/" />

        </div>

        <br />

        <div>
          <NavLink to="/">
             <li> <FaHome /> Accueil</li>
          </NavLink><br />
        </div>
        <div>
          <NavLink to="/calendrier">
          
            <li> <AiOutlineCalendar /> Calendrier</li>
          </NavLink><br />
        </div>
        <div>
          <NavLink to="/profil">
            <li><CgProfile /> Profil</li>
          </NavLink><br />
        </div>
      </ul>



      <img src="menu.png" alt="menu hamburger" class="menu-hamburger"></img>

    </div>

  )

}

export default Navbar;