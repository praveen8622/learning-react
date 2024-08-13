import { FormEvent, useRef, useState } from "react";

const Form = () => {
  //using ref hook
  //   const nameref = useRef<HTMLInputElement>(null);
  //   const ageref = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  // use state hook
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // for ref hook
    // if (nameref.current !== null) person.name = nameref.current.value;
    // if (ageref.current !== null) person.age = parseInt(ageref.current.value);
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* for ref hook */}
        {/* <input ref={nameref} id="name" type="text" className="form-control" /> */}

        {/* for state hook  */}
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* for ref hook  */}
        {/* <input ref={ageref} id="age" type="number" className="form-control" /> */}
        {/* for state hook  */}

        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
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
