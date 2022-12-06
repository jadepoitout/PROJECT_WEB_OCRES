import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Accueil.css';
import './Profilmodif.css';

import { useState, useEffect } from "react";
import Axios from "axios";

function Profilmodif () {

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
        <div>


            <Navbar />
            <div> <Ccalendrier></Ccalendrier></div>



        </div>
    )
}

export default Profilmodif;