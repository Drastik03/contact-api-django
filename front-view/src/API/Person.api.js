import axios from "axios";

const personApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/persons/",
});

export const getAllPerson = () => {
  return personApi.get("/");
};

export const createPerson = (person) => {
  return personApi.post("/", person);
};

export const putPerson = (person) => {
  return personApi.post("/", person);
};

export const updatePerson = (id,person) => {
  try {
    return personApi.post("/"+id+"/", person);
  } catch (error) {
    console.log("Error en actualizar"+error)
  }
};
