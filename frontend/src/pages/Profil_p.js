import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Profil.css';

function Profil ()
{
    return(
        <div id="fondP">
<Navbar />
            <h1 className="titre">Mon Profil</h1>
            <p1 className="titre2">Mes données personnelles</p1>

            <button class="style"
                    a href="#"
                    onClick="href='localhost:3000/profilmodif';">Modifier mes données</button>


            
            
        </div>
    )
}

export default Profil;