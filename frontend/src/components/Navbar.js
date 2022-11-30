import {NavLink} from "react-router-dom"
import './Navbar.css';
import './pp2.jpg';
import './menu.png';

function Navbar() {
    return (
        <div className ="navigation">
        <ul>
          <h1>Marine DUPONT</h1>
        
          <div className="box">
            <img src="pp2.jpg" alt="" border-radius="50%" height="10px" margin="5px" float="left" ></img></div>
          
          <br />
         
          
            <NavLink to="/">
                <li>Accueil</li>
            </NavLink><br />

            <NavLink to="/calendrier">
                <li>Calendrier</li>
            </NavLink><br />

            <NavLink to="/profil">
                <li>Profil</li>
            </NavLink><br />

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