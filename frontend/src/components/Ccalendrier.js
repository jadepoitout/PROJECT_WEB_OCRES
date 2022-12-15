//https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/

import './Ccalendrier.css';
import Calendar from 'react-calendar'
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';


function Ccalendrier(props) {

    const [value, onChange] = useState(new Date());
    new Date(2022, 12, 21);
    new Date(2022, 12, 28);

    console.log(value);
    

    return (
        <div id='fond'>
            
            <div id="orga">

            <div id="essai">

            <Calendar onChange={onChange} 
                      selectRange={true}
                      defaultValue={value} />
                      </div>
            </div>

           
        </div>
    );
}

export default Ccalendrier;