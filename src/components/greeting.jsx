import React from 'react'

const Greeting = ({timeofDay}) => {
  return (
    <div>
        {
          timeofDay==="morning" &&(
            <h1>Good morning</h1>
          )}
        {
          timeofDay==='afternoon'&&(
            <h1>Good afternoon</h1>
          )
        }
    </div>
  )
}

export default Greeting