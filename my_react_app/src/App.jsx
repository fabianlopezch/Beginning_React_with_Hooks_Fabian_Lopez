import React from "react";
import Products from "./Components/Products";
import Button from "react-bootstrap/Button"

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

function App() {

  const user = {
    firstName: "Fabian Marcelo",
    lastName: "Lopez Chamorro",
    imageURL: "https://picsum.photos/300/250"
  };

  const isValid = false;

  return (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <br />
      <img src={user.imageURL} />
      <Products />
      <Button variant="primary" disabled={!isValid}>Default</Button>
    </div>
  );
}

export default App
