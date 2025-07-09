import Header from "./components/Header"
import Footer from "./components/Footer"
import Person from "./components/Person"
import Product from "./components/Product"


const App = () => {

  const myName = "Luffy"
  const multipy = (a,b)=> a*b;
  const number= [1,2,3,4,5,6,7,8,9,10]
  // const userInfo = [
  //   {
  //     name: "Luffy",
  //     age: 20,
  //     email: "monkeydluffy@gmail.com"
  //   },
  //   {
  //     name: "Zoro",
  //     age: 21,
  //     email: "roronoazoro@gmail.com"
  //   },
  //   {
  //     name: "Sanji",
  //     age: 22,
  //     email:"vinsmokesanji@gmail.com"
  //   } 
  // ]
  return (
   <>
   {/* jsx is a javasacript content which is written in { }
   <p>{2+2}</p>
    <p>{myName}</p>
    <p>My friend list {["Luffy","Zoro","Sanji","Thor"]}</p>
        {/*we can also invoke function and classes in jsx  */}
        {/*<p>2*10={multipy(2,10)}</p> */}
        <Header/>
        {number.map((number,index)=>(
          <ul key={index}>
            <li>{number}</li>
          </ul>
        ))}

        {/* {userInfo.map((user,index)=>(
          <div key={index}>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
            <h3>{user.email}</h3>
          </div>
        ))} */}
     
   
        {/* we can also write html in jsx */}
        <Footer/>

        {/* Props 
        Props are arguments passed into React components.
        Props allows us to pass data from one component to another.
        Props are passed to components via HTML attributes.
        */}
        <Person name="luffy" age={19}/>
        <Product name="Laptop" price={1000}/>

   </>
  )
}

export default App;