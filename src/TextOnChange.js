import React, {useState} from 'react';

const TextOnChange = () => {
  const [inputValue, setInputValue] = useState("Amy")

  const onChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue)
  }

  return(
    <div>
      <input placeholder="type here" onChange={onChange} />{inputValue}
    </div>
  )
}

export default TextOnChange;