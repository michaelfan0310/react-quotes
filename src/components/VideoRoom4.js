
import React, {useState} from "react";

import video1 from '../Video/1900.mp4';
import video2 from '../Video/19002.mp4';


function VideoRoom4(){  

    const videoRef = React.useRef();

React.useEffect(() => {
  if (!video2.current) {
    return
  
//    const newVideo=video2;
    // video everytime it changes
   (video2.load());
} [videoRef]},)

    const [video, setVideo]=useState(video1);    
function switchVideo(){    
       
       setVideo(video2);
    }; 

 
    return(
        <div className="dictionary2">
        <div className="card2">        

       <video controls autoPlay loop muted className="video3" >
          <source src={video} type="video/mp4" >
          </source>
         <source src="movie.ogg" type="video/ogg">
        </source>
        </video>
        <button 
        onClick={switchVideo}
         
        id="vbutton" >Switch</button>
        
        </div>
        </div>
    );
    
}
export default VideoRoom4;