import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

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
      <Greet name="pooja" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList personNames={personNames} />
    </div>
  );
}

export default App;
