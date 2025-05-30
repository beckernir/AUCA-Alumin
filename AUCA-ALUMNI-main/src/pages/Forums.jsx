import React, { useState, useRef, useEffect } from "react";
import "../styles/Forums.css";

const Forums = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [editText, setEditText] = useState("");
  const messagesEndRef = useRef(null);

  const users = [
    { id: 1, name: "Alice", role: "Teacher", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Bob", role: "Student", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Charlie", role: "Alumni", avatar: "https://i.pravatar.cc/150?img=3" },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: randomUser.name,
        role: randomUser.role,
        avatar: randomUser.avatar,
        timestamp: new Date().toLocaleTimeString(),
        isEditing: false,
      };
      setMessages([message, ...messages]);
      setNewMessage("");
    }
  };

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const handleEdit = (id, text) => {
    setMessages(messages.map((msg) => msg.id === id ? { ...msg, isEditing: true } : msg));
    setEditText(text);
  };

  const handleCancelEdit = (id) => {
    setMessages(messages.map((msg) => msg.id === id ? { ...msg, isEditing: false } : msg));
    setEditText("");
  };

  const handleSaveEdit = (id) => {
    setMessages(messages.map((msg) =>
      msg.id === id ? { ...msg, text: editText, isEditing: false } : msg
    ));
    setEditText("");
  };

  return (
    <div className="forum-container">
      <div className="forum-header">
        <h1>Group Chat</h1>
        <p>Connect with group members and share ideas!</p>
      </div>

      <div className="messages-container">
        <div className="chat-room">
          <h2>Group Chat</h2>
          {messages.length === 0 ? (
            <p>No messages yet...</p>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === "You" ? "sent" : "received"}`}
              >
                <div className="message-header">
                  <img className="avatar" src={message.avatar} alt={message.sender} />
                  <div>
                    <span className="message-sender">{message.sender}</span>
                    <span className={`message-role ${message.role}`}>{message.role}</span>
                  </div>
                </div>

                <div className="message-content">
                  {message.isEditing ? (
                    <>
                      <textarea
                        rows="2"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        style={{ width: "100%", marginBottom: "8px" }}
                      />
                      <button onClick={() => handleSaveEdit(message.id)}>💾 Save</button>
                      <button onClick={() => handleCancelEdit(message.id)}>✖ Cancel</button>
                    </>
                  ) : (
                    <>
                      <p>{message.text}</p>
                      <div style={{ marginTop: "8px" }}>
                        <button onClick={() => handleEdit(message.id, message.text)}>✏ Edit</button>
                        <button onClick={() => handleDelete(message.id)}>🗑 Delete</button>
                      </div>
                    </>
                  )}
                </div>
                <span className="message-timestamp">{message.timestamp}</span>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="message-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Forums;
