import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

type ListType = {
  id: number;
  firstName: string;
  lastName: string;
};

const List = <T extends ListType>({ items, onClick }: ListProps<T>) => {
  return (
    <>
      <h2>List of items</h2>
      {items.map((item, i) => (
        <p key={item.id} onClick={() => onClick(item)}>
          {typeof item == "object" ? item.firstName : item}
        </p>
      ))}
    </>
  );
};

export default List;
