import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonWrapper.css';

function ButtonWrapper(){
return(<div className="buttonWrapper">
    
  <Button variant="outline-success" href="https://michaelfan0310.github.io/react-quote/">React</Button>{' '}

  <Button variant="outline-success" href="https://michaelfan0310.github.io/special/aquarium">Special</Button>{' '}

  <Button variant="outline-success" href="https://www.michaelfan0310.ml/vue_music">Vue</Button>{' '} 

  <Button variant="outline-success" href="https://michaelfan0310.github.io/library/">Library</Button>{' '}  

  <Button variant="outline-success" href="https://michaelfan0310.github.io/news/pandemic.html">News</Button>{' '}     

  <Button variant="outline-success" href="https://michaelfan0310.github.io/michael2020/CSSPhotoGallery.html">Moments</Button>{' '}  

 

  <Button variant="outline-success" href="https://michaelfan0310.github.io/blog/simon/">Game</Button>{' '}       
     
    </div>
);
}

export default ButtonWrapper;