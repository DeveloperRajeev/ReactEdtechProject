import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn&Out/signIn';
import Pentool from './pentool';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/index';
import Meeting from './MainContent/meeting';

function App(userName) {

  // const[isSignIn, setIsSignIn] = useState(false);
  // const [userName, setUserName] = useState("");

  return (
    <>
   
      <>
    <div className="App">
      
      
      <SignIn  /> 
      
      {/* <NavBar/> */}
      
      

       
        
     
    </div>
    </>
    
    </>
  );
 
}

export default App;
