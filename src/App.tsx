import "./App.css";
import { Button } from "./components/Events/Button";
import { Input } from "./components/Events/Input";
import { Container } from "./components/style/Container";

// Basic Types
// import { Greet } from "./components/Basic/Greet";
// import { Heading } from "./components/Basic/Heading";
// import { Oscar } from "./components/Basic/Oscar";
// import { Person } from "./components/Basic/Person";
// import { PersonList } from "./components/Basic/PersonList";
// import { Status } from "./components/Basic/Status";

function App() {
  const personName = {
    first: "pooja",
    last: "garva",
  };

  const personNames = [
    {
      first: "pooja",
      last: "garva",
    },
    {
      first: "gaurav",
      last: "garva",
    },
    {
      first: "neelam",
      last: "garva",
    },
    {
      first: "amrut",
      last: "garva",
    },
  ];

  return (
    <div className="App">
      {/* Basic Types */}

      {/* <Greet name="pooja" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList personNames={personNames} />
      <Status status="success" />
      <Heading>Hello there</Heading>
      <Oscar>
        <Heading>Pooja Garva</Heading>
      </Oscar>
      <Greet name="pooja" messageCount={10} isLoggedIn={true} /> */}

      {/* Events */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      /> */}

      {/* style prop */}
      <Container
        styles={{
          background: "blue",
          padding: "50px",
          color: "#fff",
          borderRadius: "20px",
        }}
      ></Container>
    </div>
  );
}

export default App;
