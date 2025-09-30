import React from 'react'

const Child1 = ({selectedOptions, setSelectedOptions }) => {
  return (
    <div>
        <h1>Child Component 1</h1>
        <button onClick={() => setSelectedOptions("Option 1")}>Option 1</button>

    </div>
  )
}

export default Child1