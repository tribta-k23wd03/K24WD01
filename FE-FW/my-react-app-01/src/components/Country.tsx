import List from "./List";

function Country() {
  let items = [
    "Sapa",
    "Tokyo",
    "Fuji",
    "Bangkok",
    "Cambodia",
    "Thailand",
    "Newyork",
  ];
  const handleSelectedItem = (item: String) => console.log(item);
  return (
    <div>
      <List
        items={items}
        heading={"Countries"}
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default Country;
