import React, {useRef} from 'react';

function RefTutorial(){
  const inputRef = useRef(null);

  const onClick = ()=>{
    console.log(inputRef.current.value)
    inputRef.current.focus()
    inputRef.current.value = ""
  }

  return(
    <div>
      <h1>UseRef</h1>
      <input type="text" placeholder="Write here..." ref={inputRef} />
      <button onClick={onClick}>Enter</button>
    </div>
  )

}

export default RefTutorial