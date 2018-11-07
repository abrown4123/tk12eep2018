import React from 'react';

const Title = (props) => {
 return (
  <h2 style={{
   border: '2px solid black',
   margin: '1px'   }}>{props.episode[0].title}</h2>
 )
}

export default Title