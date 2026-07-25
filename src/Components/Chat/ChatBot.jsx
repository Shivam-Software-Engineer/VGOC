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

  const Base = import.meta.env.VITE_BASE_URL;

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
      const res = await axios.post(`${Base}/ai/chat`, {
        message: text,
      });

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
        className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white shadow-xl transition hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}

        {!open && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 border-2 border-white">
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
  );
};

export default ChatBot;