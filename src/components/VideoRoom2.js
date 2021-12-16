import React from "react";

import video2 from '../Video/MichaelBub.mp4';

function VideoRoom2(){
    return(
        <div className="dictionary2">
        <div className="card2">
        

       <video controls autoPlay loop muted className="video2" >
          <source src={video2} type="video/mp4" >
          </source>
         <source src="movie.ogg" type="video/ogg">
        </source>
        </video>
       
        </div>
        </div>
    );
    
}
export default VideoRoom2;