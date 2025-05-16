// import logo from './logo.svg';
// import './App.css';
import MainPage from './pages/main-page';
// import Header from './component/header';


function App() {
  const id ={
    name:"voivek",
    course : "b.tect",
    address :{
      city: "kejfoiej",
      district: "kjhfojfioj"
    },
    nearByvillage :["kjrfhoirje","iefhuoejf","elfkjoeijf","euhfoiehfoi"],
    getData : new Date(),
    getDob : ()=>{ console.log("my dob 254756847687")}
  }

  return (
    <div className="App">


      <MainPage  dataa={id}/>
    </div>
  );
}

export default App;
