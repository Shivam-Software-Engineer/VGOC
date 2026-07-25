import { Bot, User } from "lucide-react";

const Message = ({ sender, text }) => {
  return (
    <div
      className={`mb-5 flex ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {/* Bot Avatar */}
      {sender === "bot" && (
        <div className="mr-2 mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white shadow-md">
          <Bot size={18} />
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-[78%] whitespace-pre-wrap rounded-3xl px-5 py-3 text-sm leading-6 shadow-md ${
          sender === "user"
            ? "rounded-br-md bg-gradient-to-r from-emerald-500 to-emerald-700 text-white"
            : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
        }`}
      >
        {text}

        <div
          className={`mt-1 text-[10px] ${
            sender === "user"
              ? "text-emerald-100"
              : "text-gray-400"
          }`}
        >
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* User Avatar */}
      {sender === "user" && (
        <div className="ml-2 mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white shadow-md">
          <User size={18} />
        </div>
      )}
    </div>
  );
};

export default Message;