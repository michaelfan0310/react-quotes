
import React, {useState, useEffect,useRef} from "react";

import video1 from '../Video/1900.mp4';
import video2 from '../Video/19002.mp4';
import video3 from '../Video/19003.mp4';

function VideoRoom4(){   

    const [video, setVideo]=useState(video1); 
    
   function switchVideo(){
  //  video2 = React.useRef(null);
  // useEffect(() => {
    
  //   // video2.current = 'values';
  //   video2.load();
  //   console.log(video.current);
     
  // }, []);
       
     setVideo(video2); 

    }; 
       function switchVideoAgain(){
 
       
     setVideo(video3); 

    };
     function switchVideoBack(){
  
       
     setVideo(video1); 

    }; 
    //   const videoRef = React.useRef(); 
    return(
        <div className="dictionary2">
        <div className="card2">        

       <video controls autoPlay loop muted className="video4" 
           src={video} type="video/mp4"  />          
         <source src="movie.ogg" type="video/ogg">
        </source>
        {/* </video> */}
        <button 
        onClick={switchVideo}
         
        id="vbutton" >Switch</button>
        <button 
        onClick={switchVideoAgain}
         
        id="vbutton2" >2</button>
        <button 
        onClick={switchVideoBack}
         
        id="vbutton3" >3</button>
        </div>
        </div>
    );
    
}
export default VideoRoom4;