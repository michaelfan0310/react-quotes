import { exp } from "prelude-ls";
import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import './card.css';

function Card(props){
return (
    <div>
       <dl className="dictionary">
        <div className="card">
            <div className="top">
            <dt>
                <h2 className="name">{props.name}</h2></dt>
                <Avatar img={props.img}/>
                {/* <button class="btn"></button> */}
            </div>
            <div className="bottom">
              <dd>
              <Detail 
                detailInfo={props.quote}
               />
               </dd>
             
                
            </div>
        </div>
        </dl>
    </div>
);
}

export default Card;