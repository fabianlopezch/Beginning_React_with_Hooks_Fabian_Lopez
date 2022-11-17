import React from "react";
import Products from "./Components/Products";
import Button from "react-bootstrap/Button"
import Rating from "./Components/Rating";
import JumbotronComponent from "./Components/JumbotronComponent";

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
      <JumbotronComponent />
      <h1>Hello, {formatName(user)}</h1>
      {/*
      <img src={user.imageURL} />
      */}
      <br />
      <Products />
      <Button variant="primary" disabled={!isValid}>Search</Button>
      {/*
      <Rating rating="1" />
      <Rating rating="2" />
      <Rating rating="3" />
      <Rating rating="4" />
      <Rating rating="5" />
      */}
    </div>
  );
}

export default App
