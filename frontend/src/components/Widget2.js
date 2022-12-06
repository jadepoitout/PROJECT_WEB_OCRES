import './Widget1.css';
import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";

function Widget2() {
   
    const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [activity, setActivity] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      surname,
      age,
      weight,
      activity,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          surname,
          age,
          weight,
          activity,
        },
      ]);
    });
  };
    
        return (
            <div className="widget1">

<h3> Fréquence d'activité physique par semaine </h3>
    
    <div className="usersDisplay">
        {listOfUsers.slice(1,2).map((user) => {
          return (
             
              <p>En moyenne : <h1 className='neon'> {user.activity} </h1> </p>
          );
        })}
      </div>
            </div>
    
    
        );
    }
    
    export default Widget2;