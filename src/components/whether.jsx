import React from 'react'

const Whether = ({temperature}) => {
  if(temperature < 15){
    return <h1>It's cold outside !</h1>
  }else if(temperature >= 15 && temperature < 30){
    return <h1>It's a nice day !</h1>}
    else{
        return <h1>Its hot outside!</h1>
    }
}

export default Whether