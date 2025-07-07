import React from 'react'

const Productlist = () => {
    const products = [
        {id: 1, name: "Laptop", price: 1000},
        {id: 2, name: "Phone", price: 500},
        {id: 3, name: "Tablet", price: 300},
        {id: 4, name: "Monitor", price: 200},
    ]
  return (
    <>
        <h1>Product List</h1>
        {
            products.map(({id,name,price})=>(
                <div key={id}>
                    <h2>Name :{name}</h2>
                    <h3>Price :{price}</h3>
                </div>
            ))
        }
    </>
  )
}

export default Productlist