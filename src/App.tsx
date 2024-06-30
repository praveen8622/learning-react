import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Kathmandu", "Bhaktapur", "Lalitpur", "Hetauda", "Chitwan"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />{" "}
    </div>
  );
}

export default App;
