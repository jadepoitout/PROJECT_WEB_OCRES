import { NavLink } from "react-router-dom"
import './Navbar.css';
import image from '../components/pp2.jpg';
import './menu.png';

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


    /*ce qui permet d'ouvrir et fermer le menu hamburger (à chaque click)*/
    /*<script>
        const menuHamburger = document.querySelector(".menu-hamburger")
        const navigation = document.querySelector(".navigation")
        menuHamburger.addEventListener ("click", ()=>(navigation.classicList.toggle('mobile-menu')))

    </script>*/
  )

}

export default Navbar;