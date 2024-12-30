import { useState } from "react";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "alice", age: 25 },
    { name: "bob", age: 30 },
    { name: "rishabh", age: 21 },
    { name: "niyati", age: 19 },
  ]);

  return (
    <>
      <ul>
        {users.map((person, index) => (
          <li key={index}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
          </li>
        ))}
      </ul>
      <h2>total students: {users.length}</h2>
      as this was deriveed from  a state variable its called derived state vairable 
      
    </>
  );
};
