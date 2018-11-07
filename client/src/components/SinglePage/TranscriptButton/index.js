import React from "react";

const TranscriptButton = props => {
 return (
  <div style={{
   border: '2px solid black',
   margin: '1px'   }}>
  <button onClick={props.click}> show transcript </button>
  {props.children}
  </div>
 )
}

export default TranscriptButton