import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Profil.css';
import {Link } from "react-router-dom";

function Profil ()
{
    return(
        <div id="fondP">
<Navbar />
            <h1 className="titre">Mon Profil</h1>
            <p1 className="titre2">Mes données personnelles</p1>

            <Link to="/profilmodif"><button class="style">Modification de données</button></Link>
            
        </div>
    )
}

export default Profil;