import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { navigate } from "@reach/router";

export default (props) => {
  const { id } = props;
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [pet, setPet] = useState();
  const [errors, setErrors] = useState([]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/get/" + id).then((res) => {
      setPet(res.data);
      setType(res.data.type);
      setDesc(res.data.desc);
      setSkill1(res.data.skill1);
      setSkill2(res.data.skill2);
      setSkill3(res.data.skill3);
      setLoaded(true);
    });
  }, []);
  const updatePet = (pet) => {
    axios
      .put("http://localhost:8000/api/pets/" + id, pet)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Pet Shelter</h1>
      <a href="/">back to home</a>
      {loaded && (
        <div>
          <h3>Edit {pet.name}</h3>
          <Form
            onSubmitProp={updatePet}
            initialName={pet.name}
            initialType={pet.type}
            initialDesc={pet.desc}
            initialSkill1={pet.skill1}
            initialSkill2={pet.skill2}
            initialSkill3={pet.skill3}
            errors={errors}
          />
        </div>
      )}
    </div>
  );
};
