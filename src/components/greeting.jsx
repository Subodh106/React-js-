import React from 'react'

const greeting = () => {
    const name = "John Doe"
    const date = new Date()
  return (
    <div>
        <h1>{name}</h1>
         <p>{date.toDateString()}</p> 
    </div>
  )
}

export default greeting