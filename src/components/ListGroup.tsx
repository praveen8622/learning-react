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
function ListGroup() {
  let items = ["Kathmandu", "Bhaktapur", "Lalitpur", "Hetauda", "Chitwan"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
