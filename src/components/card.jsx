import { exp } from "prelude-ls";
import React, {useState} from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import './card.css';
import $ from "jquery";
import VideoRoom from "./VideoRoom";
// import $ from 'jquery';

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
    if (!toggle){
        setQuote(quoteNew);  
        $('.info').css('color','#998CEB');}
    else 
        {setQuote(quoteOriginal); 
        $('.info').css('color','#116530');
    }
      
    }
    
    function switchCard(){
        
      const quoteAdd2=props.quote4;
        setToggle(!toggle);

        if(!toggle){        
        setQuote(quoteAdd);
          $('.info').css('color','#1e81b0');          

    }
        else{            
            setQuote(quoteAdd2);
            $('.info').css('color','#3B0000');  
            // $('.info').css('font-weight','bold');       
    }          
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
                >S2
                </button>

                <button               
                onClick={switchQuote}     
                >Switch
                </button>
              
            </div>
            <div className="bottom" >
              <dd >
              <Detail 
            //   style={{color:toggle?"blue":"green"}}
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