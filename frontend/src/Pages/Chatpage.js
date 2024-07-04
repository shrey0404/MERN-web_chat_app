import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const response = await axios.get("/api/chat");
      setChats(response.data); // Access response.data to get the actual data
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {Array.isArray(chats) ? (
        chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)
      ) : (
        <div>No chats available</div>
      )}
    </div>
  );
};

export default Chatpage;
