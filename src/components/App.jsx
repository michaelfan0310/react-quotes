import React from "react";
import Card from "./card";
import quote from "./quotes";

function createCard(quote){
    return (
        <Card
        key ={quote.id}
        name= {quote.name}
        img={quote.imgURL}
        quote={quote.quote}  />
    );
}
function App() {
    console.log(quote);
  return(
    <div>
      <h1 className="heading">Quotes</h1>
          {quote.map(createCard)}     
      </div>

  );
}

export default App;
