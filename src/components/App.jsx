import React from "react";
import Card from "./card";
import contact from "./contacts";

function createCard(contact){
    return (
        <Card
        key ={contact.id}
        name= {contact.name}
        img={contact.imgURL}
        quote={contact.quote}  />
    );
}
function App() {
    console.log(contact);
  return(
    <div>
      <h1 className="heading">Quotes</h1>
          {contact.map(createCard)}     
      </div>

  );
}

export default App;
