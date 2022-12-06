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

            <button class="style"
                    a href="#"
                    onClick="href='localhost:3000/profilmodif';">Modifier mes données</button>


            
            
        </div>

        
    )
}

export default Profil;