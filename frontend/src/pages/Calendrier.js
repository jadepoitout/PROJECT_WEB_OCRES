import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Accueil.css';
import './Calendrier.css';


function Calendrier ()
{
    return(
        <div>
            
            <Navbar />
            <h1 className="titre">Mes Dates importantes</h1>
            <div>
     <Ccalendrier>
    </Ccalendrier></div>
            
        </div>
    )
}

export default Calendrier;