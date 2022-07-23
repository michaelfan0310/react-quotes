import React from 'react';
import './Card.css';
import Avatar from "./Avatar";



function Card1(props){
 

    return (

    <div>
      <dl className="dictionary">
        <div className="card">
            <div className="top">
          
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img}/>         
              </div>
            

              
        <div className="bottom2" >
            
        {props.quote}         
             
                      
            </div>
        </div>    
        </dl> 
        {/* <button>SwithCard</button> */}
     </div>);

}

export default Card1;