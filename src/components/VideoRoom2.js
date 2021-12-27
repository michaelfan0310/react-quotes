import React, {useState} from "react";

import video1 from '../Video/Michael.mp4';
import video2 from '../Video/Schind.mp4';


function VideoRoom2(){
    const [video, setVideo]=useState(video1);
    const [toggle,setToggle]=useState(false);

       function SwitchClip(){
           setToggle(!toggle);
           if(!toggle){
           setVideo(video2);}else{
               setVideo(video1);
           }
       }
    return(
        <div className="dictionary2">
        <div className="card2">

        

       <video controls autoPlay loop muted className="video2" 
          src={video} type="video/mp4" />
        
         <source src="movie.ogg" type="video/ogg">
        </source>

        <button id="button2" onClick={SwitchClip}>Switch</button>      
       
        </div>
        </div>
    );
    
}
export default VideoRoom2;