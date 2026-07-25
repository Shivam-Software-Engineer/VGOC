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
    <div className="fixed bottom-24 right-5 z-[9998] flex h-[560px] w-[360px] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl max-sm:bottom-0 max-sm:right-0 max-sm:left-0 max-sm:h-[75vh] max-sm:w-full max-sm:rounded-b-none">

      {/* Header */}

      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-3 text-white">

        <div className="flex items-center gap-3">

          <div className="relative">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600">

              <Bot size={20} />

            </div>

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border border-white bg-lime-400"></span>

          </div>

          <div>

            <h2 className="text-sm font-semibold">
              VGOC Assistant
            </h2>

            <p className="text-[11px] opacity-90">
              Online
            </p>

          </div>

        </div>

      </div>

      {/* Contact */}

      <div className="grid grid-cols-2 text-sm">

        <a
          href="tel:+919823550155"
          className="flex items-center justify-center gap-2 border-r py-2 hover:bg-gray-50"
        >
          <Phone size={16} />
          Call
        </a>

        <a
          href="https://wa.me/919823550155"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 py-2 text-white hover:bg-green-600"
        >
          <MessageSquareMore size={16} />
          WhatsApp
        </a>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto bg-gray-100 px-3 py-3">

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

      <div className="flex gap-2 overflow-x-auto border-t bg-white px-2 py-2">

        {[
          "Interior",
          "AC Repair",
          "Plumbing",
          "Quotation",
        ].map((item) => (
          <button
            key={item}
            onClick={() => sendMessage(item)}
            className="whitespace-nowrap rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700 hover:bg-emerald-600 hover:text-white"
          >
            {item}
          </button>
        ))}

      </div>

      {/* Input */}

      <div className="border-t bg-white p-3">

        <div className="flex items-center rounded-full border bg-gray-100 px-2 py-1">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask something..."
            className="flex-1 bg-transparent px-2 text-sm outline-none"
          />

          <button
            onClick={() => sendMessage()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Send size={16} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ChatWindow;