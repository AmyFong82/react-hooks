import React, {useContext} from 'react';
import { AppContext } from './ContextTutorial';

function Login(){
  const {setUsername} = useContext(AppContext)

  return(
    <div>
      <h2>Please enter your username:</h2>
      <input
        onChange={(event) =>{
          setUsername(event.target.value)
        }}
      />
    </div>
  )
}

export default Login;