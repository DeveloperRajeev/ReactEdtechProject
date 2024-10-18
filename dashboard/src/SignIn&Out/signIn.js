import React, { useState } from "react";
import { browserRouter, Router, Route, redirect } from "react-router-dom";
import StyleSignIn from "./styledSignIn";
import Meeting from "../MainContent/meeting";
import NavBar from "../NavBar/index";
function SignIn() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [signInpopup, setSignInpopup] = useState(false);
  const [password, setPassword] = useState("");
  const email = ["jaimaasharda1998@gmail.com", "sanjeevMishra@gmail.com"];
  const [userName, setUserName] = useState("");
  const RegsteredEmail = email.includes(userName);
  const [signOut, setSignOut] = useState(true);
  // const [RegsteredEmail, setRegsteredEmail] = useState(false);

  const handleSubmit = () => {
    if (RegsteredEmail) {
      // setWelcomeMessage (`welcome ${userName}`);
      setUserName(userName);
      setIsSignIn(true);
      setSignOut(true);
      <NavBar />;
      // setSignInpopup(false);
      // <Meeting/>
    } else {
      alert("Please enter valid email");
    }
  };
  console.log(email.includes(userName));
  console.log(userName);

  const handleSignInModal = () => {
    setSignInpopup(true);
  };
  const handleSignOut = () => {
    setSignInpopup(true);
    setIsSignIn(false);
    setUserName("");
  };

  return (
    <>
    
        {signInpopup && signInpopup && !isSignIn ? (
          <StyleSignIn>
            <input
              type="text"
              style={{ textAlign: "center" }}
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              style={{ textAlign: "center" }}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </StyleSignIn>
        ) : (
          "NA"
        )}
        
    
      { <StyleSignIn>
    { !signInpopup &&  <button onClick={handleSignInModal}>Sign In</button> }
    
  
  </StyleSignIn>  }

      <div>{isSignIn ? <Meeting userName={userName} /> : null}</div>
      <div>
        {isSignIn && signInpopup ? <button> {userName}</button> : null}
        {isSignIn && signOut ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          "NA"
        )}
      </div>
    </>
  );
}
export default SignIn;
