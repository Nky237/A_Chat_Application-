import React, { useState } from 'react'
import { auth, db } from "../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({scroll}) => {
    const [val, setValue] = useState('')
    const sendMessage = async (e) => {
        e.preventDefault();
        if (val.trim() === "") {
          alert("Enter valid message");
          return;
        }
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
          text: val,
          name: displayName,
          avatar: photoURL,
          createdAt: serverTimestamp(),
          uid,
        });
        setValue("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
      };
      
  return (
    <form onSubmit={(e) => sendMessage(e)} className='chat'>
         <p>{val}</p>
        <div className='chatText'>
             <input type="text" value= {val} onChange={(e)=>setValue(e.target.value)} />
             <button type='submit'>Submit</button>
        </div>
       
    </form>
  )
}

export default SendMessage