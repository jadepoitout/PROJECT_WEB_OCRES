import './Widget1.css';
import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import  image  from './Coach1.png'


function Widget3 () {

  const [listofCoach, setListofCoach] = useState([]);
  const [name, setName] = useState("");
  const [contact, setSurname] = useState("");
  const [photo, setAge] = useState("");
  const [specialite, setWeight] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/getCoachs").then((response) => {
      setListofCoach(response.data);
    });
  }, []);

  
        return (
            <div className="widget1">
                

                <div className="usersDisplay">
        {listofCoach.slice(0,1).map((user) => {
          return (
             
            <ul className='dispo'>

               <img id="logo" src={image} />
              <p className='neon'> {user.name} </p> 
              <p className='neon'> {user.contact} </p> 
              <p className='neon'> {user.specialite} </p> 

            </ul>
              
              
          );
        })}
      </div>

    
            </div>
    
    
        );
        
    }
    
    export default Widget3;