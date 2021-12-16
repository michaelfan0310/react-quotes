import React from "react";
import Card from "./card";
import quote from "./quotes";
import "./App.css";
import VideoRoom from "./VideoRoom.js";
import VideoRoom2 from "./VideoRoom2.js";

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
  return(<div>
    <div>
      <h1 className="heading">Quotes</h1>
          {quote.map(createCard)}     
      </div>
      <VideoRoom />
      <VideoRoom2 />
</div>
  );
}

export default App;
