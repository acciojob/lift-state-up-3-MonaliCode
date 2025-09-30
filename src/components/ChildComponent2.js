import React from 'react'

const Child2 = ({selectedOptions,setSelectedOptions}) => {
  return (
    <div>
        <h1>Child Component 2</h1>
        <button onClick={() => setSelectedOptions("Option 2")}>Option 2</button>
    </div>
  )
}

export default Child2