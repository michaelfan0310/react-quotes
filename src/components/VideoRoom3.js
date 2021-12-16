import React from "react";

import video3 from '../Video/OutOfAfrica.mp4';

function VideoRoom3(){
    return(
        <div className="dictionary2">
        <div className="card2">
        

       <video controls autoPlay loop muted className="video3">
          <source src={video3} type="video/mp4" >
          </source>
         <source src="movie.ogg" type="video/ogg">
        </source>
        </video>
       
        </div>
        </div>
    );
    
}
export default VideoRoom3;