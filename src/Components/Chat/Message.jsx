// import { Bot, User } from "lucide-react";

// const Message = ({ sender, text }) => {
//   return (
//     <div
//       className={`mb-3 flex ${
//         sender === "user"
//           ? "justify-end"
//           : "justify-start"
//       }`}
//     >

//       {sender === "bot" && (
//         <div className="mr-2 mt-auto flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
//           <Bot size={16} />
//         </div>
//       )}

//       <div
//         className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-[13px] leading-5 shadow ${
//           sender === "user"
//             ? "rounded-br-md bg-emerald-600 text-white"
//             : "rounded-bl-md border bg-white text-gray-800"
//         }`}
//       >

//         {text}

//         <div
//           className={`mt-1 text-[9px] ${
//             sender === "user"
//               ? "text-emerald-100"
//               : "text-gray-400"
//           }`}
//         >
//           {new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </div>

//       </div>

//       {sender === "user" && (
//         <div className="ml-2 mt-auto flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white">
//           <User size={16} />
//         </div>
//       )}

//     </div>
//   );
// };

// export default Message;