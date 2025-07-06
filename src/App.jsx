import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"

const App = () => {
    class Animal{
      constructor(name , type){
        this.name = name;
        this.type = type;
      }
    }

    class Dog extends Animal{
      constructor(name,type,breed){
        super(name,type);
        this.breed = breed;
    }
  }

  const myDog = new Dog("Buddy", "Dog", "Golden Retriever");
  const myCat = new Animal("Whiskers", "Cat");

  return (
   <>
    <Header />
    <MainContent />
    <Footer />
    <div>
       <h1>New repo in react js</h1>
      </div>
   </>
  )
}

export default App