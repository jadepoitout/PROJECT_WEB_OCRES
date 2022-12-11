import './Dashboard.css';
import { NavLink } from "react-router-dom"
import React from 'react';
import Widget1 from '../components/Widget1';
import '../pages/Coachmodif.js';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';
import Widget5 from './Widget5';
import Widget6 from './Widget6';

/*Appel des différents Widgets sur le Dashboard principal*/
function Dashboard(props) {
    return (
        <div id='fondD'>
            <div className='orga1'>

            <Widget2>
                </Widget2>

                <Widget1>
                </Widget1>                

                <Widget3>
                </Widget3>

                <Widget4>
                </Widget4>
                
          <NavLink to="/coachmodif">
          <button className="style-button"> Modifier mes derniers coaches</button>
          </NavLink>
                

            </div>
            <div className='orga2'>                


                <Widget5>
                </Widget5>

                <Widget6>
                </Widget6>

                


            </div>

        </div>
    );
}

export default Dashboard;