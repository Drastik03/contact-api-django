import { useEffect, useState } from "react";
import { getAllPerson } from "../API/Person.api";
import { CardPerson } from "../components/CardPerson";
export function PersonList() {
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
      <div className="absolute -top-10">
      <h1 className="text-3xl font-bold mb-4 text-white max-sm:text-center max-sm:mx-auto md:text-left">Contact</h1>

      </div>
      {person.map((persons) => (
        <CardPerson key={persons.id} person={persons}/>
      ))}
    </div>
  );
}
