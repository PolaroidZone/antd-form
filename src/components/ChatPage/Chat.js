import React, { useState, useEffect } from "react";
import {
  ChatColumn,
  MessageListColumn,
  MessageRight,
  MessageLeft,
  MessageListHeader,
  MessageListTitle,
  MessageForm,
  Col9,
  Col3,
  Col4,
  MessageInput,
  MessageButton,
} from "./Chat.styled";
import { db } from "../../firebase/firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

const Chat = ({ selectedPermit, selectedPermitID }) => {
  const [user] = useState("FAEeClhWXRSpEvOwbbAvGhebW5u2");
  const [message, setMessage] = useState();
  const [permit, setPermit] = useState();
  const [messageList, setMessageList] = useState([]);

  const fetchData = async (applicationIDChat) => {
    try {
      if (selectedPermitID) {
        onSnapshot(doc(db, "import_permit", selectedPermitID), (document) => {
          setPermit(document.data().application_number);
          console.log(document.data().application_number);
        });
        const msgColl = query(
          collection(db, "import_permit", selectedPermitID, "chat"),
          orderBy("timestamp")
        );
        onSnapshot(msgColl, (querySnapshot) => {
          // setMessage(querySnapshot.docs.map((msg) => msg.data()));
          const messageList = querySnapshot.docs.map((msg) => msg.data());
          setMessageList(messageList);
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const pushData = async (message) => {
    const messageRef = doc(db, "import_permit", selectedPermitID, "chat");
    addDoc(messageRef, {
      senderId: user,
      text: "attempt at sending a message",
      timestamp: Date().now,
    });
  };

  useEffect(() => {
    if (selectedPermitID) {
      onSnapshot(doc(db, "import_permit", selectedPermitID), (document) => {
        setPermit(document.data().application_number);
        console.log(document.data().application_number);
      });
      const msgColl = query(
        collection(db, "import_permit", selectedPermitID, "chat"),
        orderBy("timestamp")
      );
      onSnapshot(msgColl, (querySnapshot) => {
        // setMessage(querySnapshot.docs.map((msg) => msg.data()));
        const messageList = querySnapshot.docs.map((msg) => msg.data());
        setMessageList(messageList);
      });
    }
    console.log("Date: ", Date().now);
  }, [selectedPermitID]);

  const submitForm = () => {
    setMessageList((oldArray) => [
      ...oldArray,
      {
        senderId: user,
        text: "message",
        timestamp: "Date().now,",
      },
    ]);
  };

  // console.log(Date().now);
  // console.log(message);
  // console.log("Permit List (State): ", permitList);
  return (
    <ChatColumn>
      <MessageListColumn>
        <div>
          {messageList.map((message) => {
            return (
              <div
                key={message + message.timestamp}
                style={{ overflow: "hidden" }}
              >
                {message.senderId === user ? (
                  <MessageRight>{message.text}</MessageRight>
                ) : (
                  <MessageLeft>{message.text}</MessageLeft>
                )}
              </div>
            );
          })}
        </div>
      </MessageListColumn>
      <div>
        <MessageForm onSubmit={(e) => submitForm}>
          <Col9>
            <MessageInput
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type a message..."
            />
          </Col9>
          <Col3>
            <MessageButton type="submit">Send</MessageButton>
          </Col3>
        </MessageForm>
      </div>
    </ChatColumn>
  );
};

export default Chat;
