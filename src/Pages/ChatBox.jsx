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
  doc,
  deleteDoc
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
    return () => unsubscribe();
  }, []);

  const deleteMessage = (id) => {
    deleteDoc(doc(db, "messages", id)).then(() => {
      setMessages(messages.filter((message) => message.id !== id));
    }).catch((error) => {
      console.error("Error deleting message: ", error);
    });
  };
  

  const scroll = useRef();

  return (
    <div className="my_Chat">
      <SideBar />
      <div className="chatty">
        ChatBox
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${
              message.uid === user.uid ? "right" : ""
            }`}
          >
            <img
              className="chat-bubble__left"
              src={message.avatar}
              alt="user avatar"
            />
            <div className="my_message">
              <p className="user-name">{message.name}</p>
              <p className="user-message">{message.text}</p>
              <p className="del" onClick={() => deleteMessage(message.id)}>
                delete
              </p>
            </div>
          </div>
        ))}
        <main className="chat-box">
          {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
          <span ref={scroll}></span>
          <SendMessage scroll={scroll} />
        </main>
      </div>
    </div>
  );
};

export default ChatBox;
