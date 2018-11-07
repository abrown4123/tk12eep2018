import React from 'react';

const Closer = props => {
 return (
  <div 
   style={{
    border: '2px solid black',
    margin: '1px'   }}>   
   <p>{props.episode[0].description.long.paragraphs[1]} </p>
   <p>{props.episode[0].description.long.paragraphs[2]} </p>
  </div>
 )
}

export default Closer;