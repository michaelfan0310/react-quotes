import React from "react";
import Card from "./card";
import quote from "./quotes";
import "./App.css";
import Avatar2 from "./Avatar2";
import VideoRoom from "./VideoRoom.js";
import VideoRoom2 from "./VideoRoom2.js";
import VideoRoom3 from "./VideoRoom3.js";

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
    
      <h1 className="heading">Michael's <Avatar2 /> Palette</h1></div>

       <div>
      <VideoRoom />
      <VideoRoom2 />
      <VideoRoom3 />
      </div>
      
      <div>
          {quote.map(createCard)}     
      </div>
     
      <div className="pointer">
      <h5> <a href="https://michaelfan0310.github.io/react-kitchen/">React-Kitchen</a></h5>
      </div>
</div>
  );
}

export default App;
