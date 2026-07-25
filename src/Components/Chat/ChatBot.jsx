import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./ChatWindow";

const ChatBot = () => {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to VGOC Interior.\nHow can I help you today?",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const Base=import.meta.env.VITE_BASE_URL

  const sendMessage = async (text = input) => {

    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);

    setInput("");
    setLoading(true);

    try {

      const res = await axios.post(
        `${Base}/ai/chat`,
        {
          message: text,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: res.data.reply,
        },
      ]);

    } catch {

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong.",
        },
      ]);

    }

    setLoading(false);

  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] group flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white shadow-[0_15px_40px_rgba(16,185,129,.45)] transition-all duration-300 hover:scale-110 hover:rotate-6"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
  
        {!open && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-red-500">
            <span className="absolute inset-0 animate-ping rounded-full bg-red-500"></span>
          </span>
        )}
      </button>
  
      {open && (
        <ChatWindow
          messages={messages}
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          loading={loading}
          bottomRef={bottomRef}
        />
      )}
    </>
  );}

export default ChatBot;