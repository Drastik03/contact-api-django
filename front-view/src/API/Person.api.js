import axios from "axios";

const personApi = axios.create({
  baseURL: "http://localhost:8000/api/v1/persons/",
});

export const getPerson = (person_id) => {
  return personApi.get("/"+person_id+"/")
}

export const getAllPerson = () => {
  return personApi.get("/");
};

export const createPerson = (person) => {
  return personApi.post("/", person);
};

export const deletePerson = async (person_id) => {
   return await personApi.delete("/" + person_id+"/");

};


export const updatePerson = async (id,person) => {
  try {
    return await personApi.put(`/${id}/`, person);
    
  } catch (error) {
    console.log("ERROR EN UPDATE API"+error)
  }
};
