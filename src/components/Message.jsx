import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = (message) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  console.log(message);
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="src/img/john.jpg" alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello, how are you?</p>
        <img src="src/img/john.jpg" alt="" />
      </div>
    </div>
  );
};

export default Message;
