import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Accueil.css';
import './Profilmodif.css';

function Profilmodif () {

    return(
        <div>

            <input type="text"/>
            <input type="text"/>
            <input type="number"/>
            <input type="number"/>
            <input type="number"/>

            <Navbar />
            <div> <Ccalendrier></Ccalendrier></div>


        </div>
    )
}

export default Profilmodif;