// function ListGroup() {
//   let items = ["Kathmandu", "Bhaktapur", "Lalitpur", "Hetauda", "Chitwan"];
//   items = [];
//   if (items.length === 0)
//     return (
//       <>
//         <h1> Lists</h1>
//         <p>No Items Found </p>
//       </>
//     );
//   return (
//     <>
//       <h1>List</h1>
//       <ul className="list-group">
//         {items.map((items) => (
//           <li key={items}>{items}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;
// above method is not a good practice as there are two headings

//conditional rendering method 2
// function ListGroup() {
//   let items = ["Kathmandu", "Bhaktapur", "Lalitpur", "Hetauda", "Chitwan"];
//   items = [];

//   return (
//     <>
//       <h1>List</h1>
//       {items.length === 0 ? <p>No item found</p> : null}
//       <ul className="list-group">
//         {items.map((items) => (
//           <li key={items}>{items}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;
// More practiced way with event handeling
// import { MouseEvent } from "react";
// function ListGroup() {
//   let items = ["Kathmandu", "Bhaktapur", "Lalitpur", "Hetauda", "Chitwan"];

//   const handleClick = (event: MouseEvent) => console.log(event);
//   return (
//     <>
//       <h1>List</h1>
//       {items.length === 0 && <p>No item found</p>}
//       <ul className="list-group  ">
//         {items.map((items) => (
//           <li className="list-group-item " key={items} onClick={handleClick}>
//             {items}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;

// // managing state

import { useState } from "react";

function ListGroup() {
  let items = ["Kathmandu", "Bhaktapur", "Lalitpur", "Hetauda", "Chitwan"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group  ">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => setSelectedIndex(index)}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
