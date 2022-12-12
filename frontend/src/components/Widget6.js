import './Widget1.css';
import Axios from "axios";
import { useState, useEffect } from "react";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  /*Graphique qui prend en compte le poids de Marine en fonction des mois de l'année*/
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    
  };

  
const Widget6 = () => {

  const [listOfUsers, setListOfUsers] = useState([]);
  const tab = [];


  useEffect(() => {
    Axios.get("http://localhost:3000/getUsers").then((response) => {
      
      setListOfUsers(response.data);

      console.log(tab)
    });

  }, []);

  tab[0] = listOfUsers.map(aou=> aou.weightj)
      tab[1] = listOfUsers.map(sep=> sep.weightf)
      tab[2] = listOfUsers.map(oct=> oct.weightm)
      tab[3] = listOfUsers.map(nov=> nov.weighta)
      tab[4] = listOfUsers.map(dec=> dec.weightma)

  const labels = ['August', 'September', 'October', 'November', 'December'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Poids 1',
        data:tab.map((poids) => poids[0]),
        /*data: ['4', '5', '3', '6', '7', '9', '4'],*/
        borderColor: 'rgba(223, 147, 59)',
        backgroundColor: 'rgba(223, 147, 59,0.8)',
      },
    ],
  };


        return (
            <div className="widget6">
    
    <Line options={options} data={data} />
            </div>
    

        );
        
    }
    
    export default Widget6;