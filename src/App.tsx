import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Userr from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { Button } from "./components/Events/Button";
import { Input } from "./components/Events/Input";
import List from "./components/generics/List";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import RandomNumber from "./components/restriction/RandomNumber";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import { Container } from "./components/style/Container";
import Toast from "./components/templateliterals/Toast";

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
      {/* <Container
        styles={{
          background: "blue",
          padding: "50px",
          color: "#fff",
          borderRadius: "20px",
        }}
      ></Container> */}

      {/* state */}
      {/* <LoggedIn />
      <User />
      <Counter /> */}

      {/* context */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* context with future value */}
      {/* <UserContextProvider>
        <Userr />
      </UserContextProvider> */}

      {/* useRef */}
      {/* <DomRef />
      <MutableRef /> */}

      {/* componentprop */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* generics */}
      {/* <List
        items={["one", "two", "three"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        items={[
          {
            id: 1,
            firstName: "pooja",
            lastName: "garva",
          },
          {
            id: 2,
            firstName: "gaurav",
            lastName: "garva",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* restriction */}
      {/* <RandomNumber value={10} isPositive /> */}

      {/* template literals */}
      <Toast position="center" />
    </div>
  );
}

export default App;
