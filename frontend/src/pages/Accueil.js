import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import '../components/pp2.jpg';
import Widget1 from '../components/Widget1';
import './Accueil.css';
import React from "react";

class Accueil extends React.Component {


    render() {



        return (
            <div className="fondA">

                <div>
                    <h1 className="titre">Accueil</h1>
                    <Navbar />

                    <Dashboard>
                    </Dashboard>
                </div>

            </div>
        )
    }
}

export default Accueil;