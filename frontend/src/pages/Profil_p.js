import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Accueil.css';
import './Profil.css';

function Profil ()
{
    return(
        <div>
            <h1 className="titre">Mon Profil</h1>
            <Navbar />
            <div> <Ccalendrier></Ccalendrier>
    </div>
            
        </div>
    )
}

export default Profil;