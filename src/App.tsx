import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      {/* <Greet name="pooja" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList personNames={personNames} /> */}
      <Status status="success" />
      <Heading>Hello there</Heading>
      <Oscar>
        <Heading>Pooja Garva</Heading>
      </Oscar>
      <Greet name="pooja" messageCount={10} isLoggedIn={true} />
    </div>
  );
}

export default App;
