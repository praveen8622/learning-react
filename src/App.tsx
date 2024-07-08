// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
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
  const [alertVisible, setalertvisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setalertvisible(false)}>Alert: </Alert>
      )}
      <Button color="outline-danger" onClick={() => setalertvisible(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
