import React from 'react'

const CharComponent = (props) => {
  return (
    <div>
 
      <p onClick ={props.click}>Here input:  {props.char}</p>
    </div>
  );
  
}

export default CharComponent