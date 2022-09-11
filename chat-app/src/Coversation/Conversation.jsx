import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import defaultImage from "../defaultProfile.png";
import { UPDATECHAT } from "../receiverChatReducer";
import { UPDATEDETAIL } from "../receiverDetailReducer";

const Conversation = ({ chatDetails }) => {

  const { chat_id, receiver_id } = chatDetails;

  const [userData, setUserData] = useState()
  const [userChat, setUserChat] = useState()

  const dispatch = useDispatch()

  const getReceiverDetails = async () => {
    const resp = await axios.get(`http://localhost:8080/user/${receiver_id}`)
    setUserData(resp.data)
  }

  const getReceiverChats = async () => {
    const resp = await axios.get(`http://localhost:8080/chat/?chatid=${chat_id}`)
    setUserChat(resp.data[0])
  }

  useEffect(() => {
    getReceiverDetails()
    getReceiverChats()
  }, [])

  const handleClick = () => {
    dispatch(UPDATEDETAIL(userData))
    dispatch(UPDATECHAT(userChat))
  }

  return (
    <div>
      <hr style={{ width: "95%", border: "0.1px solid black", marginTop: "5px", marginBottom: "5px" }} />
      <button
        style={{ border: 'none', padding: 'none', width: '100%' }}
        onClick={handleClick}
      >
        <div className="row follower conversation" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <div className="col-3">
            <img
              src={chatDetails.picture ? chatDetails.picture : defaultImage}
              className="rounded-circle"
              style={{ width: "2rem", height: "2rem" }}
            />
          </div>
          <div className="col-9 name" style={{ fontSize: '1rem' }}>
            <span>{chatDetails?.first_name} {chatDetails?.last_name}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Conversation;
