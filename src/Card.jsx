import React from 'react'

function Card(props) {
  return (
    <div>
         <h1>demo changes</h1>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default Card