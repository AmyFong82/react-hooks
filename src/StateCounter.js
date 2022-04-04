import React, {useState} from 'react';

const StateCounter = () => {

  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  )

}

export default StateCounter;