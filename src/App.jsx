import react, { useState } from 'react'
import { auth } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from './Pages/ChatBox';
import './App.css'
import WelcomePage from './Pages/WelcomePage'


function App() {
  // const [user, setUser] = useState(false)
const [user] = useAuthState(auth);  


  return (
    <div className="App">
        
      {!user? <WelcomePage  />  : <ChatBox /> }
       
    </div>
  )
}

export default App
