import './Widget1.css';
import React from 'react';
import { useState, useEffect } from "react";
import  image  from './Coach2.PNG';
import Axios from "axios";



function Widget4 () {

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
    
    <div>
        {listofCoach.slice(listofCoach.length-1,listofCoach.length).map((user) => {
          return (
             
            <ul>

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
    
    export default Widget4;