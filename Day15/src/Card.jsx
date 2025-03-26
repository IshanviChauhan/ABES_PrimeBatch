import React from 'react'

function Card({title, desc}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <button>Click Me</button>
    </div>
  )
}

export default Card