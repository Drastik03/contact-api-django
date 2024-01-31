import { useEffect, useState } from "react";
import { getAllPerson } from "../API/Person.api";
import { CardPerson } from "../components/CardPerson";
import { useNavigate } from "react-router-dom";
export function PersonList() {
  const navigate = useNavigate()
  const [person, setPerson] = useState([]);
  useEffect(() => {
    console.log("CARGADO");
    async function loadPerson() {
      const res = await getAllPerson();
      setPerson(res.data);
      console.log(res.data);
    }
    loadPerson();
  }, []);

  return (
    <div className="flex flex-col flex-wrap md:flex-row gap-4 justify-center relative mt-14 max-sm:flex max-sm:flex-col max-sm:mr-5 ">
      <div className="md:absolute -top-10">
        <h1 className="text-3xl font-bold mb-4 text-white max-sm:text-center max-sm:mx-auto md:text-left">
          Contact
        </h1>
      </div>
      <div className="h-6 w-6 rounded-full absolute left-3 -top-7 bg-green-500">
        <button className="h-6 w-6 mx-auto text-white font-bold hover:bg-green-400 rounded-full transition-all"
        onClick={()=> {
          console.log("PRESIONADO")
          navigate("/contact_create")
        }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      {person.map((persons) => (
        <CardPerson key={persons.id} person={persons} />
      ))}
    </div>
  );
}
