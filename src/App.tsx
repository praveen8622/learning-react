import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Kathmandu", "Bhaktapur", "Lalitpur", "Hetauda", "Chitwan"];
  const handelSelectItem = (items: string) => {
    console.log(items);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handelSelectItem}
      />{" "}
    </div>
  );
}

export default App;
