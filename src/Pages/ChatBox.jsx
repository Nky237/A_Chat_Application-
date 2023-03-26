import React from "react";
import SendMessage from "../components/SendMessage";
import { auth } from "../firebaseConfig";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import SideBar from "../components/SideBar";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);
 
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);
  const deleteMessages = (id)=>{
   const deleted =  messages.filter(item => item.id !== id)
   setMessages(deleted)
  }
  return (
    <div className="my_Chat">
      <SideBar />
      <div className="chatty">
        ChatBox
        {messages.map((message) => (
          <div
            className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}
          >
            <img
              className="chat-bubble__left"
              src={message.avatar}
              alt="user avatar"
            />
            <div key={message.id}>
              <p className="user-name">{message.name}</p>
              <p className="user-message">{message.text}</p>
              <p className="del" onClick = {()=>deleteMessages(message.id)}>delete</p>
            </div>
          </div>
        ))}
        <SendMessage />
      </div>
    </div>
  );
};

export default ChatBox;
