import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText}
    case "TOGGLEshowTEXT":
      return { count: state.count, showText: !state.showText}
    default:
      return state;
  }
}

const CountingWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={()=>{
          dispatch({type: 'INCREMENT'});
          dispatch({type: 'TOGGLEshowTEXT'})
        }}
      >
        Increment / Hide
      </button>
      {state.showText && <p>Show Me!</p>}
    </div>
  )
}

export default CountingWithReducer;