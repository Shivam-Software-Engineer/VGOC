import {
  Bot,
  Phone,
  MessageSquareMore,
  Send,
} from "lucide-react";

import Message from "./Message";

const ChatWindow = ({
  messages,
  input,
  setInput,
  sendMessage,
  loading,
  bottomRef,
}) => {
  return (
    <div className="fixed bottom-24 right-6 z-[9999] flex h-[650px] w-[390px] flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.18)] max-sm:bottom-20 max-sm:right-2 max-sm:h-[82vh] max-sm:w-[95%]">

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 p-5 text-white">

        <div className="flex items-center gap-4">

          <div className="relative">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-emerald-600 shadow-lg">
              <Bot size={28} />
            </div>

            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-lime-400"></span>

          </div>

          <div>
            <h2 className="text-lg font-bold">
              VGOC Assistant
            </h2>

            <p className="text-xs text-white/90">
              Online • Usually replies instantly
            </p>
          </div>

        </div>

      </div>

      {/* Contact Buttons */}

      <div className="grid grid-cols-2 border-b bg-white">

        <a
          href="tel:+919823550155"
          className="flex items-center justify-center gap-2 border-r py-3 transition hover:bg-gray-50"
        >
          <Phone size={18} />
          Call
        </a>

        <a
          href="https://wa.me/919823550155"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 py-3 text-white transition hover:bg-green-600"
        >
          <MessageSquareMore size={18} />
          WhatsApp
        </a>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto bg-slate-100 px-4 py-5">

        {messages.map((msg, index) => (
          <Message
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

        {loading && (
          <Message
            sender="bot"
            text="🤖 Typing..."
          />
        )}

        <div ref={bottomRef} />

      </div>

      {/* Quick Buttons */}

      <div className="flex gap-2 overflow-x-auto border-t bg-white px-3 py-3">

        {[
          "Interior",
          "AC Repair",
          "Plumbing",
          "Quotation",
        ].map((item) => (
          <button
            key={item}
            onClick={() => sendMessage(item)}
            className="whitespace-nowrap rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition-all hover:bg-emerald-600 hover:text-white"
          >
            {item}
          </button>
        ))}

      </div>

      {/* Input */}

      <div className="border-t bg-white p-4">

        <div className="flex items-center gap-3 rounded-full border border-gray-300 bg-gray-100 px-3 py-2">

          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="flex-1 bg-transparent px-2 text-sm outline-none"
          />

          <button
            onClick={() => sendMessage()}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white transition-all hover:scale-105"
          >
            <Send size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ChatWindow;