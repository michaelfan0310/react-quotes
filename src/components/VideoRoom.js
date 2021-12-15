import React from "react";

function VideoRoom(){
    return(
       <video id="video" controls preload="auto">
          <source src={"../audioVideo/Teheran.mp4"} type="video/mp4" >
          </source>
         <source src="movie.ogg" type="video/ogg">
        </source>
        </video>
    );
    
}
// export default VideoRoom;