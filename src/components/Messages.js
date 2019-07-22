import React from "react";
import messagesCSS from "./../assets/styles/AdminSCSS/messages.css";

const Message = (msg) => {
    return (
        <div className="message container">
            <div className="notification is-link">{msg}</div>
        </div>
    );
};

export default Message;