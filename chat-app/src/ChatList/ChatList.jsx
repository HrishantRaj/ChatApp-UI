import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Conversation from "../Coversation/Conversation";

function ChatList({ chatListDetails: chats }) {

  const [list,setList] = useState([])

  useEffect(()=>{
    setList(chats)
  },[chats])


  return (
    <div style={{ maxHeight: "75vh" }}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ paddingTop: '5px', paddingBottom: '5px' }}
            >
              <strong>Active Chats ({list.length})</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                maxHeight: "65vh",
                overflow: "scroll",
                overflowX: "hidden",
                padding: "1px",
              }}
            >
              <Conversation chatDetails={chats[0]} />
              <Conversation chatDetails={chats[1]} />
              <Conversation chatDetails={chats[2]} />
              <Conversation chatDetails={chats[3]} />
              <Conversation chatDetails={chats[4]} />
              <Conversation chatDetails={chats[5]} />
              <Conversation chatDetails={chats[6]} />
              <Conversation chatDetails={chats[7]} />
              <Conversation chatDetails={chats[8]} />
              <Conversation chatDetails={chats[9]} />
              <Conversation chatDetails={chats[10]} />
              <Conversation chatDetails={chats[11]} />
              <Conversation chatDetails={chats[12]} />
              <Conversation chatDetails={chats[13]} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ paddingTop: '5px', paddingBottom: '5px' }}
            >
              <strong>Archived Chats</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                maxHeight: "60vh",
              }}
            >
              Archived chats will be present here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
