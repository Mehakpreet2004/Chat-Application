
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-emerald-500" : "bg-purple-500";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="bubble component" />
        </div>
      </div>

      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-purple-500">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//       <div className='chat-image avatar'>
//         <div className='w-10 rounded-full'>
//             <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="bubble component"/>
//         </div>
//       </div>

//       <div className={`chat-bubble text-white bg-emerald-500`}>Hi Mehak</div>
//       <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-indigo-800'>12:42</div>
//     </div>
//   )
// }

// export default Message

