
import { useEffect } from 'react';
import useConversation from '../../zustand/useConversation';
import MessageInput from "./MessageInput";
import Messages from './Messages';
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from '../../context/AuthContext';


const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  useEffect(() => {
    //cleanup function
    return () => setSelectedConversation(null)
  },[setSelectedConversation]) 
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text text-gray-100'>To:</span>{" "}
            <span className='text-emerald-500 font-bold'>{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-indigo-800 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName}❄️</p>
        <p>Select the chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
}


// import React from 'react';
// import Messages from './Messages';
// import MessageInput from "./MessageInput";
// import { TiMessages } from "react-icons/ti";

// const NoChatSelected = () => {
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-indigo-800 font-semibold flex flex-col items-center gap-2'>
//         <p>Welcome 👋 Mehak Sarwara❄️</p>
//         <p>Select the chat to start messaging</p>
//         <TiMessages className='text-3xl md:text-6xl text-center' />
//       </div>
//     </div>
//   );
// }

// const MessageContainer = () => {
//   const noChatSelected = true;

//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//       {noChatSelected ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           <div className='bg-slate-500 px-4 py-2 mb-2'>
//             <span className='label-text text-gray-100'>To:</span>{" "}
//             <span className='text-emerald-500 font-bold'>Mehak</span>
//           </div>
//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );
// }

// export default MessageContainer;

