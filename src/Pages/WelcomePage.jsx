import React, { useEffect, useState } from 'react'
import Google from '../assets/Images/google.png'
import Logo from '../assets/Images/Reactt.png'
import { auth, provider } from "../firebaseConfig";
import {signInWithPopup} from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";

const WelcomePage = () => {
 
  
  const handleClick =()=>{
    // signInWithPopup(auth, provider)
    signInWithRedirect(auth, provider);
  //   setUser(true)
    
}

     
  return (
    <div className='welcome'>
       <div className="wel-nav">
        <h1>React Chat</h1>
        <button>
        <img src={Google} onClick={handleClick}
        type = "button"
        />
        </button>
        </div> 
        <div className="welBody">
            <h1>Welcome to React Chat App</h1>
            <img src={Logo} className ='Logo' />
            <p>Sign in with google to chat with your fellow react developers</p>
            <button onClick={handleClick}>
            <img src={Google} />
            </button>
        </div>
    </div>
  )
}

export default WelcomePage