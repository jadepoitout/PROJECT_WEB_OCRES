import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Profil.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function Profil ()
{ 
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
    

    return(
        <div id="fondP">
<Navbar />
            <h1 className="titre">Mon Profil</h1>
            <p1 className="titre2">Mes données personnelles</p1>


                    <div className="usersDisplay">
        {listOfUsers.slice(1,2).map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Surname: {user.surname}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Weight: {user.weight}</h1>
              <h1>Activity: {user.activity}</h1>
            </div>
          );
        })}
      </div>

      <div id="taille" >
        <div><input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        /></div>
        
        <div><input
          type="text"
          placeholder="Surname..."
          onChange={(event) => {
            setSurname(event.target.value);
          }}
        /></div>
         
         <div><input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        /></div>
        
        <div></div>
        <input
          type="text"
          placeholder="Weight..."
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <div></div>
        <input
          type="text"
          placeholder="Activity..."
          onChange={(event) => {
            setActivity(event.target.value);
          }}
        />
<div><button onClick={createUser}> Modification des données </button></div>
        
      </div>
           
        </div>

        
    )
}

export default Profil;