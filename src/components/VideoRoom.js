import React from "react";

import video from '../Video/Teheran.mp4';

function VideoRoom(){
    return(
       <video controls autoPlay loop muted>
          <source src={video} type="video/mp4" >
          </source>
         <source src="movie.ogg" type="video/ogg">
        </source>
        </video>
    );
    
}
export default VideoRoom;