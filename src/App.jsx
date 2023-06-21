import React from "react";
import Card from "./components/Card";
import quote from "./components/quotes";
import quotes from "./components/quotes2";
import "./App.css";
import Avatar2 from "./components/Avatar2";
import VideoRoom from "./components/VideoRoom.js";
import VideoRoom2 from "./components/VideoRoom2.js";
import VideoRoom3 from "./components/VideoRoom3.js";
import VideoRoom4 from "./components/VideoRoom4.js";
import VideoRoom5 from "./components/VideoRoom5.js";
import VideoRoom6 from "./components/VideoRoom6.js";
import Card1 from "./components/Card1.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonWrapper from './components/ButtonWrapper.jsx';

function createCard(quote){
    return (
       [ <Card
        key ={quote.id}
        name= {quote.name}
        img={quote.imgURL}
        sp={quote.speech} 
        sp2={quote.speech2} 
        sp3={quote.speech3} 
        sp4={quote.speech4} 
        // onClick={}
        />,
]
    );
}
class App extends React.Component{

  render(){
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
      <VideoRoom4 />
      <VideoRoom5 />
      <VideoRoom6 />
      
      
      <div className="pointer">      
      <h5> <a href="https://michaelfan0310.github.io/react-kitchen/">React-Kitchen</a></h5>
      </div>
      <ButtonWrapper />
</div>
  );
}
}
export default App;
