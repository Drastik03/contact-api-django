import { useForm } from "react-hook-form";
import { createPerson } from "../API/Person.api";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    //create
    const formData = new FormData();
    formData.append("image_profile", data.image_profile[0]);
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    try {
      const res = await createPerson(formData);
      console.log(res.data);
    } catch (error) {
      console.error("Error al crear persona:", error);
      console.log(error.response.data);
    }
    navigate("/contact")
  });

  return (
    <div className="max-w-xl mt-5 mx-auto">
      <form
        className="mb-5 mt-5 flex flex-col"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <div
          className="w-14 h-14 mx-auto rounded-full overflow-hidden p-1 bg-gray-text cursor-pointer relative m-auto"
        >
              <input
              type="file"
              id="profileImage"
              {...register("image_profile")}
              className="w-14 h-14 rounded-full border-none bg-transparent focus:outline-none opacity-0 absolute top-0 left-0 z-50 cursor-pointer bg-icon"
            />
        </div>

        <label className="labels">Name:</label>
        <input
          type="text"
          className="inputs"
          placeholder="Name"
          {...register("first_name", { required: true })}
        />
        {errors.name && <span>Este campo es requerido</span>}
        <label className="labels">Last name:</label>
        <input
          type="text"
          className="inputs"
          placeholder="Last Name"
          {...register("last_name", { required: true })}
        />
        {errors.last_name && <span>Este campo es requerido</span>}
        <label className="labels">Email:</label>
        <input
          type="email"
          className="inputs"
          placeholder="example@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Este campo es requerido</span>}
        <label className="labels">Phone:</label>
        <input
          type="tel"
          className="inputs"
          placeholder="(123)456-7890"
          {...register("phone", { required: true })}
        />
        {errors.phone && <span>Este campo es requerido</span>}
        <button type="submit" className="mt-5 rounded-full w-[50%] m-auto h-[30%] text-white font-bold hover:bg-green-500 bg-green-600">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
