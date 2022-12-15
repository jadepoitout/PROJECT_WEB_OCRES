import './Widget1.css';
import React from 'react';
import { useState, useEffect } from "react";
import  image  from './male.png';
import Axios from "axios";



function Widget4 () {

  const [listofCoach, setListofCoach] = useState([]);
  const [name, setName] = useState("");
  const [contact, setSurname] = useState(0);
  const [photo, setAge] = useState("");
  const [specialite, setWeight] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/getCoachs").then((response) => {
      setListofCoach(response.data);
    });
  }, []);


  const createUser = () => {
    Axios.post("http://localhost:3000/createCoach", {
      name,
      contact,
      photo,
      specialite,
    }).then((response) => {
      setListofCoach([
        ...listofCoach,
        {
            name,
            contact,
            photo,
            specialite,
        },
      ]);
    });
  };


        return (
            <div className="widget1">
              <h3> Mon prochain coach </h3>

    
        {listofCoach.slice(listofCoach.length-1,listofCoach.length).map((user) => {
          return (
             
            <div>

               <img id="logo" src={image} />
              <p className='neon'> {user.name} - {user.specialite} </p> 
              <p className='neon'> {user.contact} </p> 

            </div>
              
              
          );
        })}
            </div>
    
    
        );
        
    }
    
    export default Widget4;