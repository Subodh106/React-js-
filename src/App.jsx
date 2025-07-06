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
      <h1>{myDog.name}</h1>
      <h1>{myDog.type}</h1>
      <h1>{myDog.breed}</h1>
      <h1>{myCat.name}</h1>
      <h1>{myCat.type}</h1>
      <h1>{myCat.breed}</h1>
      <h1>{myCat.breed ? myCat.breed : "No breed specified"}</h1>
      <h1>{myDog.breed ? myDog.breed : "No breed specified"}</h1>
      <h1>{myDog instanceof Dog ? "myDog is a Dog" : "myDog is not a Dog"}</h1>
      <h1>{myCat instanceof Dog ? "myCat is a Dog" : "myCat is not a Dog"}</h1>
      <h1>{myDog instanceof Animal ? "myDog is an Animal" : "myDog is not an Animal"}</h1>
      <h1>{myCat instanceof Animal ? "myCat is an Animal" : "myCat is not an Animal"}</h1>
      <h1>{myDog instanceof Object ? "myDog is an Object" : "myDog is not an Object"}</h1>
      <h1>{myCat instanceof   Object ? "myCat is an Object" : "myCat is not an Object"}</h1>
    </div>
   </>
  )
}

export default App