'use client';

import { useRef, useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import Profile from "./Profile";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  // Ref for the chat container
  const chatContainerRef = useRef(null);

  // Load the user's chat history from localStorage
  useEffect(() => {
    const savedChatHistory = JSON.parse(localStorage.getItem("chatHistory"));
    if (savedChatHistory) {
      setChatHistory(savedChatHistory);
    }
  }, []);

  // Scroll to the bottom of the chat area whenever chatHistory updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Load the user's chat history from localStorage
  useEffect(() => {
    const savedChatHistory = JSON.parse(localStorage.getItem("chatHistory"));
    if (savedChatHistory) {
      setChatHistory(savedChatHistory);
    }
  }, []);

  // Handle emoji selection
  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false); // Close picker after selection
  };

  const handleSendMessage = (e) => {
    if (e.key === "Enter" && message.trim()) {
      e.preventDefault();

      const newMessage = { name, email, content: message };
      const updatedChatHistory = [...chatHistory, newMessage];
      setChatHistory(updatedChatHistory);
      localStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
      const data = { name, email, message };
      onSubmit(data); // Call the centralized email-sending function
      setMessage(""); // Clear the input field
    }
  };

  // Clear chat history
  const handleDeleteChat = () => {
    const confirmed = window.confirm("Would you like to delete chat history?");
    if (confirmed) {
      setChatHistory([]); // Clear the state
      localStorage.removeItem("chatHistory"); // Remove from localStorage
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-w-2300 mt-4">

      <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black w-1/2 h-256 rounded-[32px] border-8 border-gray-700 overflow-hidden text-black mx-auto">
      
        {/* Background filter */}
        <div>
          <div className="relative w-full h-full bg-gradient-to-b from-gray-800 to-black">
            <div className="absolute top-20 left-10 w-40 h-40 bg-blue-900/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-900/40 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="flex flex-row h-full">
          {/* Side Pannel */}
          <div className="flex flex-col bg-neutral-700 w-1/3">
            <div className="flex justify-center items-center gap-2 h-24 p-4 bg-gray-300">
              <input 
                className="rounded-md w-36 min-w-28 h-7 p-2"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="rounded-md h-7 p-2 min-w-28"
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            {/* Chat List */}
            <div className="flex flex-row gap-4 items-center bg-neutral-500 h-24">
                <div className="ml-2"></div>
                <Profile />
                <div className="flex flex-col">
                  <span className="text-md text-white">Ryan Jung</span>
                  <span className="text-sm text-neutral-400">
                    {chatHistory.length > 0
                    ? "You: " + (chatHistory[chatHistory.length - 1].content.length > 20
                      ? chatHistory[chatHistory.length - 1].content.substring(0, 20) + "..."
                      : chatHistory[chatHistory.length - 1].content)
                    : "and shoot me a message!"}
                  </span>
                </div>
            </div>
          </div>

          {/* Right Area */}
          <div className="flex flex-col w-full">
            {/* Main profile above chat */}
            <div className="flex justify-start items-center w-full h-24 bg-neutral-200 p-7">
              <Profile />
              <span className="ml-3 font-bold text-lg">Ryan Jung</span>
              {/* Delete Chat Button */}
              <div className="flex justify-end ml-auto">
                <button
                  onClick={handleDeleteChat}
                  className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
                >
                  Delete Chat
                </button>
              </div>
            </div>
            
            {/* Main Chat Area with Chat Bubbles */}
            <div
              ref={chatContainerRef} 
              className="w-full h-full bg-gradient-to-b from-gray-800 to-black p-3 pt-4 max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-700"
            >
              <div className="flex flex-col space-y-3">
                {/* Default instruction messages */}
                <div className="self-start text-center bg-zinc-500 text-white p-2 rounded-3xl min-w-14 inline-block ml-14">
                  Hey, it's Ryan!
                </div>
                <div className="self-start text-center bg-zinc-500 text-white p-2 rounded-3xl min-w-14 inline-block ml-14">
                  Enter your name and email above...
                </div>
                <div className="flex flex-row gap-1 items-center ml-1">
                  <div className="scale-75">
                    <Profile />
                  </div>
                  <div className="self-start text-center bg-zinc-500 text-white p-2 rounded-3xl min-w-14 inline-block">
                    and shoot me a message!
                  </div>
                </div>
              </div>

              {/* User message */}
              <div className="flex flex-col space-y-3 justify-end text-center">
                {chatHistory.map((msg, index) => (
                    <div key={index} className="self-end bg-sky-500 text-white p-2 rounded-3xl min-w-12">
                      {msg.content}
                    </div>
                  ))}
              </div>
            </div>

            {/* Chat Input with Emoji Button */}
            <div className="flex justify-center items-center h-24 px-4 relative">
              <div className="flex items-center bg-gray-300 rounded-3xl w-full relative">
                {/* Emoji Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowEmojiPicker((prev) => !prev)}
                    className="p-2 pl-4 text-gray-600 hover:text-gray-800"
                  >
                    😊
                  </button>
                  
                  {/* Emoji Picker */}
                  {showEmojiPicker && (
                    <div className="absolute bottom-12 left-0">
                      <EmojiPicker onEmojiClick={onEmojiClick} />
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <input 
                  className="rounded-3xl w-full h-10 p-2 pl-3 outline-none bg-transparent"
                  type="text"
                  placeholder="Message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleSendMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
