import './Widget1.css';
import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import  image  from './male.png'


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
                <h3> Mon dernier coach </h3>


                
        {listofCoach.slice(listofCoach.length-2,listofCoach.length-1).map((user) => {
          return (
             
            
              <div>
              <img id="logo" src={image} />
              <p className='neon'> {user.name} -  {user.specialite}</p> 
              <p className='neon'> {user.contact} </p> 
              </div>
            
              
              
          );
        })}
      

    
            </div>
    
    
        );
        
    }
    
    export default Widget3;