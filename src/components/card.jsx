import { exp } from "prelude-ls";
import React, {useState} from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import './card.css';

function Card(props){
    const quoteOriginal=props.quote;
    const quoteAdd=props.quote3;
    const [toggle, setToggle]=useState(false);
    const [quote, setQuote]=useState(quoteOriginal);
    
    // const [card, setCard]=useState({
    //     name:props.name,
    //     img:props.img,
    //     quote:quote
    // });

    function switchQuote(){
        const quoteNew=props.quote2;
        setToggle(!toggle);
        { if (!toggle){
        setQuote(quoteNew);  }
    else if(toggle) {setQuote(quoteOriginal); }}      
    }
    
    function switchCard(){
        
        const quoteAdd2=props.quote4;
        setToggle(!toggle);

        if(!toggle){
        setQuote(quoteAdd);
        // $('.bottom').css('color','red');
    }
        else{setQuote(quoteAdd2);} 
         
    }

return (
    <div>
       <dl className="dictionary">
        <div className="card">
            <div className="top">
            <dt>
                <h2 className="name">{props.name}</h2></dt>
                <Avatar img={props.img}/>
                <button               
                onClick={switchCard}       
                >Q2
                </button>

                <button               
                onClick={switchQuote}     
                >Q1
                </button>
                {/* <button               
                onClick={switchCard}     
                >Q3
                </button> */}
            </div>
            <div className="bottom">
              <dd >
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