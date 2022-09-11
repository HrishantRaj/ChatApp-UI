import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./ChatBox.css";
import { format } from 'timeago.js';
import InputEmoji from 'react-input-emoji'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { SENDCHAT } from "../receiverChatReducer";

const ChatBox = () => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [currentUser, setCurrentUser] = useState("");

    const { chatObject } = useSelector((state) => state.chat);
    // const { detail } = useSelector((state) => state.receiver);

    useEffect(() => {
        setMessages(chatObject.message)
        setCurrentUser(chatObject.senderid)
        // console.log('msg updated = ' + currentUser)
    }, [chatObject]);

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    // Always scroll to last Message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])


    const dispatch = useDispatch()

    // Send Message
    const sendFunction = () => {
        const d = new Date();
        let time = d.toLocaleString('en-ZA', { dateStyle: 'short', timeStyle: 'medium' });
        console.log('time=' + time)

        const newmsg = {
            "id ": uuidv4(),
            "chatId": chatObject.chatid,
            "senderId": currentUser,
            "text": newMessage,
            "createdAt": time
        }

        dispatch(SENDCHAT(newmsg))
        setNewMessage('')
    }

    const handleSend = (e) => {
        e.preventDefault()
        sendFunction();
    }

    const scroll = useRef();
    const imageRef = useRef();
    return (
        <>
            <div className="ChatBox-container">
                {messages.length > 0 ? (
                    <>
                        {/* chat-body */}
                        <div className="chat-body" >
                            {messages.map((message) => (
                                // <>
                                <div ref={scroll}
                                    className={
                                        message.senderId === currentUser
                                            ? "message own"
                                            : "message"
                                    }
                                    key={message.id}
                                >
                                    <span>{message.text}</span>{" "}
                                    <span
                                        className={
                                            message.senderId === currentUser
                                                ? "send"
                                                : "receive"
                                        }
                                    >
                                        {format(message.createdAt)}
                                    </span>
                                </div>
                                // </>
                            ))}
                        </div>
                        {/* chat-sender */}
                        <div className="chat-sender">
                            <div onClick={() => imageRef.current.click()}>+</div>
                            <InputEmoji
                                value={newMessage}
                                onChange={handleChange}
                                cleanOnEnter
                                onEnter={sendFunction}
                            />
                            <div className="btn btn-primary" onClick={handleSend} >Send</div>
                            <input
                                type="file"
                                name=""
                                id=""
                                style={{ display: "none" }}
                                ref={imageRef}
                            />
                        </div>{" "}
                    </>
                ) : (
                    <div
                        style={{
                            backgroundColor: '#ddded9',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <span className="chatbox-empty-message" >
                            Tap on a chat to start conversation...
                        </span>
                    </div>

                )}
            </div>
        </>
    );
};

export default ChatBox;
