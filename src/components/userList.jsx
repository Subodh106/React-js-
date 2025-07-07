import React from 'react'

const UserList = (props) => {
    const user =[
        {id:1,name:"Alice",age:25},
        {id:2,name:"Bob",age:30},
        {id:3,name:"Charlie",age:35},
        {id:4,name:"David",age:28},
    ]
  return (
    <>
    <h1>User List</h1>
    {
        user.map(({name,age,id})=>(
            <div key ={id}>
                <h1>name:{name}</h1>
                <h3>age:{age}</h3>
            </div>
        ))
    }

    {/* From props data */}
    <h1>name :{props.name}</h1>
    <h3>Age :{props.age}</h3>
    </>
  )
}

export default UserList