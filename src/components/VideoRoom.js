import React from "react";

import video from '../Video/Teheran.mp4';

function VideoRoom(){
    return(
        <div className="dictionary2">
        <div className="card2">
        

       <video controls autoPlay loop muted>
          <source src={video} type="video/mp4" >
          </source>
         <source src="movie.ogg" type="video/ogg">
        </source>
        </video>
       
        </div>
        </div>
    );
    
}
export default VideoRoom;