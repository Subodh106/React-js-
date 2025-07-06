import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"

const App = () => {

  const myName = "Luffy"
  const multipy = (a,b)=> a*b;
  return (
   <>
   {/* jsx is a javasacript content which is written in { } */}
   <p>{2+2}</p>
    <p>{myName}</p>
    <p>My friend list {["Luffy","Zoro","Sanji","Thor"]}</p>
        {/*we can also write function in jsx  */}
        <p>2*10={multipy(2,10)}</p>
   </>
  )
}

export default App