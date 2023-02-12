import React from "react";

const Message = () => {
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
