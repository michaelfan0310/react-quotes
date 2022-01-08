import React from 'react';
import './Card.css';
import Avatar from "./Avatar";



function Card1(props){
  //  const quoteOriginal=props.quote;
  //   const quoteAdd=props.quote3;
  //   const [toggle, setToggle]=useState(false);
  //   const [quote, setQuote]=useState(quoteOriginal);
  //   const [iscard, setCard]=useState(false);
  
    // function switchQuote(){
    //     const quoteNew=props.quote2;
    //     setToggle(!toggle);
    // if (!toggle){
    //     setQuote(quoteNew);  
    //     $('.info').css('color','#998CEB');}
    // else 
    //     {setQuote(quoteOriginal); 
    //     $('.info').css('color','#116530');
    // }
      
    // }

    return (

    <div>
      <dl className="dictionary">
        <div className="card">
            <div className="top">
          
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img}/>         
              </div>

                {/* <button className="button3"           
                onClick={switchCard}       
                >S2
                </button>

                <button               
                onClick={switchQuote}     
                >Switch
                </button> */}
        <div className="bottom2" >
            
        {props.quote}                
             
                      
            </div>
        </div>
        
        </dl> 
     </div>);

}

export default Card1;