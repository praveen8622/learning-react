// import ListGroup from "./components/ListGroup";

// import { useState } from "react";
// import Button from "./components/Button";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

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
// function App() {
//   const [tags, setTags] = useState(["happy", "cheerful"]);
//   const handleClick = () => {
//     //add
//     setTags([...tags, "excited"]);
//     // remove
//     setTags(tags.filter((tag) => tag !== "happy"));
//     // update
//     setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
//   };
//   return (
//     <div>
//       {tags}
//       <Button onClick={handleClick}>click me</Button>{" "}
//     </div>
//   );
// }
// export default App;

//updating arrays of object using immer

// import { produce } from "immer";
// function App() {
//   const [bugs, setbugs] = useState([
//     { id: 1, title: " Bug1 ", fixed: false },
//     { id: 2, title: " Bug2 ", fixed: false },
//   ]);
//   const handleClick = () => {
//     console.log(bugs[0]);
//     setbugs(
//       produce((draft) => {
//         produce;
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );

//     // update
//     // setbugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//   };
//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title}
//           {bug.fixed ? "fixed" : "new"}
//         </p>
//       ))}
//       <Button onClick={handleClick}>click me</Button>{" "}
//     </div>
//   );
// }
// export default App;

// sharing  state between components
// function App() {
//   const [cartItems, setCartItems] = useState(["product1", "product2"]);

//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }
// export default App;

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "john",
//     },
//   });
//   const handleClick = () => {
//     setGame({ ...game, player: { ...game.player, name: "bob" } });
//   };
//   return (
//     <div>
//       {game.player.name}
//       <Button onClick={handleClick}>click me</Button>{" "}
//     </div>
//   );
// }
// export default App;

// expandable text exercise

function App() {
  return (
    <div>
      <ExpandableText maxChar={100}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse commodi
        iusto expedita, ducimus aperiam blanditiis maiores temporibus magnam
        ratione sit debitis, totam quae illo enim omnis rerum deserunt obcaecati
        fugit est nostrum quas quibusdam nihil. Officia minus aliquam illo
        excepturi dicta nam distinctio placeat temporibus alias, iste culpa
        perferendis reiciendis laborum illum adipisci, eaque minima cupiditate
        totam voluptates. Nobis doloribus accusamus atque perspiciatis fuga
        quibusdam, blanditiis vel impedit autem dolor maiores minima voluptatem.
        Ipsam doloribus culpa, recusandae omnis dicta repudiandae vero molestias
        incidunt facere maiores, excepturi cupiditate minus laboriosam inventore
        sit delectus. Eum dignissimos facere aliquid expedita, exercitationem
        eius atque?
      </ExpandableText>
    </div>
  );
}
export default App;
