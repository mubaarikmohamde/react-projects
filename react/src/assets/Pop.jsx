function Person(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h3>{props.phone}</h3>
    </>
  );
}

function App() {
  return (
    <Person
      name="Mubaarik"
      age={20}
      phone="63*********"
    />
  );
}

export default App;