// import ListGroup from "./components/ListGroup";

import Button from "./components/Button";

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

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("clicked button")}>
        My Button
      </Button>
    </div>
  );
}
export default App;
