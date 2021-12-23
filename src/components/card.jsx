import { exp } from "prelude-ls";
import React, {useState} from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import './card.css';

function Card(props){
    const quoteOriginal=props.quote;
    const [quote, setQuote]=useState(quoteOriginal);

    function switchCard(){
        const quoteNew=props.quote2;
        setQuote(quoteNew);        
    }

    function switchCardBack(){
        
        setQuote(quoteOriginal);        
    }
  
// const [isMousedOver, setMouseOver] = useState(false);

//  function handleMouseOver() {
//     setMouseOver(true);
//   }
//    function handleMouseOut() {
//     setMouseOver(false);
//   }
return (
    <div>
       <dl className="dictionary">
        <div className="card">
            <div className="top">
            <dt>
                <h2 className="name">{props.name}</h2></dt>
                <Avatar img={props.img}/>
                <button               
                onClick={switchCardBack}       
                >Q2
                </button>

                <button               
                onClick={switchCard}     
                >Q1
                </button>
                {/* <button               
                onClick={switchCard}     
                >Q3
                </button> */}
            </div>
            <div className="bottom">
              <dd>
              <Detail 
                detailInfo={quote}
               />
               </dd>
             
                
            </div>
        </div>
        </dl>
    </div>
);
}

export default Card;