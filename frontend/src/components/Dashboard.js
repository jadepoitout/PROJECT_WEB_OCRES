import './Dashboard.css';
import React from 'react';
import Widget1 from '../components/Widget1';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';
import Widget5 from './Widget5';
import Widget6 from './Widget6';


function Dashboard(props) {
    return (
        <div id='fondD'>
            <div className='orga'>


                <Widget1>
                </Widget1>

                <Widget2>
                </Widget2>

                <Widget3>
                </Widget3>

                <Widget4>
                </Widget4>


            </div>
            <div className='orga'>


                <Widget5>
                </Widget5>

                <Widget6>
                </Widget6>

                


            </div>

        </div>
    );
}

export default Dashboard;