import React from "react";
import Message from "./Message";
import { auth } from "../firebaseConfig";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

const SideBar = () => {
  const logout = () => {
    // setUser(false);
    auth.signOut();
  };
  return (
    <div className="side">
      <div className="icon">
        <div className="iconItem">
          <BsThreeDotsVertical color="white" fontSize={23}/>
          <AiOutlineSearch color="white" fontSize={23}/>
        </div>
        <MdModeEdit color="white" fontSize={23}/>
      </div>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <div className="log">
      <p onClick={logout}>LogOut</p>
      </div>
    </div>
  );
};

export default SideBar;
