Workbook tasks:

1) Explain props vs state precisely

    Props are values passed from a parent component to a child component. They are read-only, meaning the child component cannot modify them. Props are mainly used to pass data or functions between components.

    State, on the other hand, is data that belongs to a component itself. It is managed internally using hooks like useState and can be updated whenever the component needs to respond to user actions or other events. 
    
    In short, props are external and immutable within the receiving component, while state is internal and mutable.

2) Render a list with correct, stable keys

When rendering a list in React, every item should have a unique and stable key prop. React uses keys to identify which items changed, were added, or were removed, making updates efficient and preventing bugs.

Correct: Use a unique ID

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
user.id is unique.It doesn't change between renders.

3) Build a controlled input with useState

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

4) Lift state up between two components

Lifting state up means moving state to the parent component so two child components can share it.

import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <Input setText={setText} />
      <Display text={text} />
    </>
  );
}

function Input({ setText }) {
  return (
    <input onChange={(e) => setText(e.target.value)} />
  );
}

function Display({ text }) {
  return <p>{text}</p>;
}
