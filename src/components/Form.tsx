import { FormEvent, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

// const Form = () => {
//   //using ref hook
//   //   const nameref = useRef<HTMLInputElement>(null);
//   //   const ageref = useRef<HTMLInputElement>(null);
//   //   const person = { name: "", age: 0 };

//   // use state hook
//   const [person, setPerson] = useState({
//     name: "",
//     age: "",
//   });

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     // for ref hook
//     // if (nameref.current !== null) person.name = nameref.current.value;
//     // if (ageref.current !== null) person.age = parseInt(ageref.current.value);
//     console.log(person);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         {/* for ref hook */}
//         {/* <input ref={nameref} id="name" type="text" className="form-control" /> */}

//         {/* for state hook  */}
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, name: event.target.value })
//           }
//           value={person.name}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         {/* for ref hook  */}
//         {/* <input ref={ageref} id="age" type="number" className="form-control" /> */}
//         {/* for state hook  */}

//         <input
//           value={person.age}
//           onChange={(event) =>
//             setPerson({ ...person, age: event.target.value })
//           }
//           id="name"
//           type="text"
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// using hook-form
interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
