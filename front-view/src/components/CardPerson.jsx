import { getPerson,deletePerson } from "../API/Person.api";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
export function CardPerson({ person }) {
  const navigate = useNavigate()
  const handleUpdate = async () => {
    const id_person = await getPerson(person.id)
    console.log(id_person.data.id)
    const id = id_person.id
    console.log("Valor de id_person.id:", id);

    navigate(`/contact_create/${id_person.data.id}`);

  };
  const handleDelete = async () => {
    const id = await getPerson(person.id)
    console.log(id.data.id)
    if (window.confirm("Buscas eliminar este registro?")) {
      const res = await deletePerson(id.data.id)
      console.log(res)
      navigate("/")
    }
  };
  return (
    <div className="md:w-[31%] px-5 mt-3 ml-3 bg-black-gray rounded-md overflow-hidden">
      <div className="w-16 h-16 mx-auto mt-3 flex items-center">
        <img
          className="w-full h-full object-cover rounded-full border-2 border-gray-100"
          src={person.image_profile}
          alt="Person Image"
        />
      </div>

      
      <h2 className="text-3xl font-bold text-white py-3">
        {person.first_name} {person.last_name}
      </h2>
      <span className="text-sm font-bold text-white py-2">Email</span>
      <p className="text-gray-text">{person.email}</p>
      <span className="text-sm font-bold text-white py-2">Phone</span>
      <p className="text-gray-text mb-5">{person.phone}</p>
      <div className="mt-4 flex mb-4 font-bold justify-between items-start">
        
        <button className="text-white m-2  bg-green-600 hover:bg-green-400 w-[40%] rounded-full"
        onClick={handleUpdate}>
          Edit
        </button>
        <button className="text-white m-2 bg-red-600 hover:bg-red-500 w-[40%] rounded-full"
        onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
