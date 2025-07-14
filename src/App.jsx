import Header from "./components/Header"
import Footer from "./components/Footer"
import Person from "./components/Person"
import Product from "./components/Product"
import Whether from "./components/whether"
import UserStatus from "./components/UserStatus"
import Greeting from "./components/greeting"
import "./index.css"
import { FaCartArrowDown } from "react-icons/fa";
import StyleCard from "./components/StyleCard"
import UseState from "./components/useState"

const Validpassword =()=> <h1>Valid password</h1>
const Invalidpassword =()=> <h1>Invalid password</h1>

const Password = ({isValid})=> {
  if(isValid){
    return <Validpassword />
  }else{
    return <Invalidpassword />
  }
}


 const Copy=()=>{

  const handlecopy = (e)=>{
    console.log("Text is copied");
  }
  return (
    <p onCopy={handlecopy}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor deleniti quasi quaerat distinctio dolores fugiat asperiores error voluptatem qui rem molestiae, delectus ratione iusto facere vitae voluptate, dolorum saepe itaque.
    </p>
  )
 }


 const Move =()=>{
  const handlemove =()=>{
    console.log("Mouse move event fired")
  }
  return (
    <>
      <p onMouseMove={handlemove} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magnam qui itaque odio dolorem, veritatis perferendis hic cupiditate quod facilis error, repellendus velit vitae saepe, distinctio nesciunt! Ducimus, eligendi perferendis?</p>
    </>
  )
 }


const App = () => {

  const myName = "Luffy"
  const multipy = (a,b)=> a*b;
  const number= [1,2,3,4,5,6,7,8,9,10]
  const userInfo = [
    {
      name: "Luffy",
      age: 20,
      email: "monkeydluffy@gmail.com"
    },
    {
      name: "Zoro",
      age: 21,
      email: "roronoazoro@gmail.com"
    },
    {
      name: "Sanji",
      age: 22,
      email:"vinsmokesanji@gmail.com"
    } 
  ]


  const cart =['Iphone', 'Macbook', 'iPad', 'Airpods', 'Apple Watch', 'Apple TV', 'HomePod', 'AirTag', 'Magic Mouse', 'Magic Keyboard']
  
  const handleClick =()=>{
    console.log("Button is clicked")
  }

  const handlecopy =()=>{
    console.log("Text is copied")
  }

  return (
   <>
   {/* jsx is a javasacript content which is written in { } */}
   <p>{2+2}</p>
    <p>{myName}</p>
    <p>My friend list {["Luffy","Zoro","Sanji","Thor"]}</p>
        {/*we can also invoke function and classes in jsx  
        *<p>2*10={multipy(2,10)}</p> 
        <Header/>
        {number.map((number,index)=>(
          <ul key={index}>
            <li>{number}</li>
          </ul>
        ))}

        {userInfo.map((user,index)=>(
          <div key={index}>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
            <h3>{user.email}</h3>
          </div>
        ))} 
     
   
        {/* we can also write html in jsx */}
        <Footer/>

        {/* Props 
        Props are arguments passed into React components.
        Props allows us to pass data from one component to another.
        Props are passed to components via HTML attributes.
        */}
        <Person name="luffy" age={19}/>
        <Product name="Laptop" price={1000}/>

        {/* Conditional rendering
          Conditional rendering allows us to dynamically display UI components or content  based on sepecific conditons. This enables us to create more interactive and responsive user experieces. */}
        <h1>Conditional rendering</h1>
        <Password isvalid ={true}/>
        <Password isvalid ={false}/>
    
          <h1>Cart <FaCartArrowDown /></h1>
          {cart.length >0 && <h1>You have {cart.length} in your Cart</h1>}
          {cart.length >0&&<ul>
            <h4>Product</h4>
            {cart.map((items , index)=>(
              <li key={index}>{items}</li>
            ))}
          </ul>}

          <Whether temperature={40} />
          <UserStatus isloggedIn={true} isAdmin={false}/>
          <Greeting timeofDay="morning" />

        {/*Inline css */}
        <h1 style={{color:"red",backgroundColor:"black",fontFamily:"sans-serif"}}>Inline style</h1>


        <StyleCard />

        {/* Adding events  */}
        <button onClick={()=>console.log(`Button is clicked`)} >click</button>
        <button onClick={handleClick}>Functon btn</button>

        <p onCopy={handlecopy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, veniam.</p>

        <Copy />

        {/* <Move /> */}

        {/* STATE
          State is a way to state and manage data that can change over time and affects how the component renders. We define state using the useState Hook, which allows you to set a initial value and provides a way to update that state.
        */}

        {/* HOOKS
          Hooks are a new addition in React 16.8 . They let you use state and other React features without writing a class
         */}

        {/* useState Hook 
            UseState Hook allows us to track state in functional component. State generally refers to data or properties that needs to be tracking in an application

            const[variable which store value in state , function to update the value in state] = useState(initialValue)
        */}
        <UseState/>
   </>
  )
}

export default App;