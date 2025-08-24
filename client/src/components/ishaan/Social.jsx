"use client"

import { useState, useEffect, useRef } from "react"
import { useAuth } from "../Authentication/context/AuthContext"
import { fetchMessages, sendMessage, deleteMessage, fetchUsers } from "./social.api.service.js"
import { handleDeleteMessage } from "./chat.handlers.js" // Only need this now
import s from "./Social.module.css"
import Message from "./components/Message.jsx"
import Profile from "./components/Profile.jsx"
import io from "socket.io-client"
import upload_icon from "./icons/upload.png"

function Social() {
  const { user } = useAuth()
  const [messages, setMessages] = useState([])
  const [textMessage, setTextMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [users, setUsers] = useState([])

  const socket = useRef(null)
  const fileInputRef = useRef()
  const chatRef = useRef(null)

  // Socket.io setup
  useEffect(() => {
    socket.current = io()

    socket.current.on("chat message", (msg) => {
      setMessages((prevMessages) => (Array.isArray(prevMessages) ? [...prevMessages, msg] : [msg]))
    })

    socket.current.on("typing", (data) => {
      setIsTyping(data.typing)
    })

    socket.current.on("delete message", (messageId) => {
      setMessages((prevMessages) => prevMessages.filter((message) => message._id !== messageId))
    })

    return () => socket.current.disconnect()
  }, [])

  // Fetch messages
  useEffect(() => {
    const loadMessages = async () => {
      setLoading(true)
      try {
        const data = await fetchMessages()
        setMessages(data)
      } catch (error) {
        setError(error.message)
      }
      setLoading(false)
    }
    loadMessages()
  }, [])

  // Fetch users
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const userList = await fetchUsers()
        setUsers(userList)
      } catch (error) {
        console.error("Failed to load users:", error)
      }
    }
    loadUsers()
  }, [])

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async (message, picture = "") => {
    try {
      const newMessage = await sendMessage(message, picture, user?.username || "user")
      setTextMessage("")
      socket.current.emit("chat message", newMessage)
      socket.current.emit("typing", { typing: false })
    } catch (error) {
      setError(error.message)
    }
  }

  const handleTextMessageChange = (e) => {
    setTextMessage(e.target.value)
    socket.current.emit("typing", { typing: e.target.value.length > 0 })

    // Auto-resize textarea
    const textarea = e.target
    textarea.style.height = "auto"
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  const handleTextKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      if (textMessage.trim() !== "") {
        handleSendMessage(textMessage)
      }
    }
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        handleSendMessage("", reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div id={s.main}>
      <div className={`${s.main1}`}>
        <header id={`${s.head}`}>People</header>
        <hr style={{ border: "none", borderTop: "2px solid black", width: "103%", margin: `0 -3%` }} />
        <div id={s.profiles}>
          {users.length > 0 ? (
            users.map((username) => <Profile key={username} name={username} />)
          ) : (
            <p>No users registered yet</p>
          )}
        </div>
      </div>

      <div className={`${s.main2}`}>
        <div className={`${s.chat}`} ref={chatRef}>
          {loading ? (
            <p>Loading messages...</p>
          ) : error ? (
            <p>{error}</p>
          ) : messages.length > 0 ? (
            messages.map((message, index) => (
              <Message
                key={message._id}
                id={message._id}
                message={message.message}
                photo={message.picture}
                name={message.user}
                onDelete={() =>
                  handleDeleteMessage(index, messages, deleteMessage, setMessages, setError, socket.current)
                }
              />
            ))
          ) : (
            <p>No messages yet.</p>
          )}
          {isTyping && <p>Someone is typing...</p>}
        </div>

        <div id={s.bottom}>
          <input type="file" style={{ display: "none" }} onChange={handleFileUpload} ref={fileInputRef} />
          <img
            src={upload_icon}
            alt="Upload file"
            className={s.bottom_icon}
            onClick={() => fileInputRef.current.click()}
          />
          <textarea
            id={s.enter_text}
            placeholder="Type a message..."
            value={textMessage}
            onChange={handleTextMessageChange}
            onKeyDown={handleTextKeyDown}
          />
        </div>
      </div>
    </div>
  )
}

export default Social
