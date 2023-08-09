import { Name } from "./Person.types";

type PersonProps = {
  personNames: Name[];
};

export const PersonList = (props: PersonProps) => {
  return (
    <div>
      <ul>
        {props.personNames.map((name) => (
          <li key={name.first}>
            {name.first} {name.last}
          </li>
        ))}
        {/* <li>Pooja Garva</li>
        <li>Gaurav Garva</li>
        <li>Neelam Garva</li>
        <li>Amrut Garva</li> */}
      </ul>
    </div>
  );
};
