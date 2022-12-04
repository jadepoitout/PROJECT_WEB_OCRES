import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import '../components/pp2.jpg';
import Widget1 from '../components/Widget1';
import './Accueil.css';

function Accueil() {
    return (
        <div >
            <h1 className="titre">ACCUEIL</h1>
            <Navbar />
            

            <div>
                <Dashboard>
                </Dashboard>
            </div>

        </div>
    )
}

export default Accueil;