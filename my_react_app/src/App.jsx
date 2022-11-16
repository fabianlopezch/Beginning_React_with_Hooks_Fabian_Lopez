import React from "react";
import Products from "./Components/Products";

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

function App() {

  const user = {
    firstName: "Fabian Marcelo",
    lastName: "Lopez Chamorro",
    imageURL: "https://picsum.photos/300/250"
  };

  return (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <br />
      <img src={user.imageURL} />
      <Products />
    </div>
  );
}

export default App
