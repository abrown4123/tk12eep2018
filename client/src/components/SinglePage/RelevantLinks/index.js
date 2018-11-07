import React from 'react';

const RelevantLinks = props => {
 const links = props.episode[0].links.related_to_episode;
 const LinkItems = links.map((link, i)=> {
     return (
     <li key={i}>
      <a href={link.url}>{link.title}</a><span>&nbsp;</span>{link.description}
     </li>
    );     
    });
  
    return (
     <div style={{
        border: '2px solid black',
        margin: '1px'   }}>
      Related to this episode:
      {LinkItems}
     </div>
    )
}

export default RelevantLinks