// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Button from "./components/Button";

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

// function App() {
//   let items = ["Kathmandu", "Bhaktapur", "Lalitpur", "Hetauda", "Chitwan"];
//   const handelSelectItem = (items: string) => {
//     console.log(items);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handelSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [alertVisible, setalertvisible] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setalertvisible(false)}>Alert: </Alert>
//       )}
//       <Button color="outline-danger" onClick={() => setalertvisible(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// }
// export default App;

// updating objects
// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });
//   const handleClick = () => {
//     console.log(drink);
//     setDrink({ ...drink, price: 6 });
//   };
//   return (
//     <div>
//       <Button onClick={handleClick}>click me</Button>{" "}
//     </div>
//   );
// }
// export default App;

//updating nested object
// function App() {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "sanfrancisco",
//       zip: 34567,
//     },
//   });
//   const handleClick = () => {
//     setCustomer({ ...customer, address: { ...customer.address, zip: 56789 } });
//   };
//   return (
//     <div>
//       {customer.address.zip}
//       <Button onClick={handleClick}>click me</Button>{" "}
//     </div>
//   );
// }
// export default App;

// updating arrays
function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleClick = () => {
    //add
    setTags([...tags, "excited"]);
    // remove
    setTags(tags.filter((tag) => tag !== "happy"));
    // update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  return (
    <div>
      {tags}
      <Button onClick={handleClick}>click me</Button>{" "}
    </div>
  );
}
export default App;
