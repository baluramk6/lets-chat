import React, { useContext } from "react";
import { FaVideo, FaUserPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "../context/ChatContext";

export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <FaVideo />
          <FaUserPlus />
          <FiMoreHorizontal />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
