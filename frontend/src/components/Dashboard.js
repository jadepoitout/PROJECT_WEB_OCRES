import './Dashboard.css';
import React from 'react';
import Widget1 from '../components/Widget1';


function Dashboard(props) {
    return (
        <div className='body'>
            <div className='form'>


                <Widget1>
                </Widget1>

                <Widget1>
                </Widget1>

                <Widget1>
                </Widget1>


            </div>

        </div>
    );
}

export default Dashboard;