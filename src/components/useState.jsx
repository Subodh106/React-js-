import React from "react";
import { useState } from "react";

const UseState = ()=>{

  const [friend,setfriend]=useState(["luffy","Zoro"])
  console.log(friend)
  
  const addOneFriend=()=>{
    setfriend([...friend, "Sanji"])
    console.log(friend)
  }
  
  const removeOneFriend = ()=>{
    setfriend(friend.filter((f)=>f!=="Zoro"))
    console.log(friend)
  }

  const updateOneFriend = ()=>{
    setfriend(friend.map((f)=>{
      f==="luffy"?"Monkey D Luffy":"luffy"
    }))
    // setfriend(friend.filter(f=>f!=="luffy"))
    console.log(friend)
  }
  return(
      <>
        <section>
          {
            friend.map((f)=>{
              <li key={Math.random()}>{f}</li>
            })
          }
        </section>
        <button onClick={addOneFriend}>Add One Friend</button>
        <button onClick={removeOneFriend}>Remove One Friend</button>
        <button onClick={updateOneFriend}>Update One Friend Name</button>
      </>
    )
}


export default UseState;