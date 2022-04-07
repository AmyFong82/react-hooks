import React, {useRef, useEffect, useLayoutEffect} from 'react';

function LayoutEffectTutorial(){
  const inputRef = useRef(null);

  // useLayoutEffect will always run before useEffect no matter where it's location is.
  useLayoutEffect(()=> {
    console.log(inputRef.current.value)
  }, [])

  // useEffect runs when the page is loaded the first time.
  useEffect(() => {
    inputRef.current.value = "Hello!"
  }, [])

  return(
    <div>
      <input ref={inputRef} value="Amy" />
    </div>
  )
}

export default LayoutEffectTutorial