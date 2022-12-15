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
    Axios.get("http://localhost:3000/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3000/createUser", {
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
    
        {listOfUsers.map((user) => {
          return (
              <p>En moyenne : <h2 className='neon'> {user.activity} </h2> </p>
          );
        })}
            </div>
    
    
        );
    }
    
    export default Widget2;