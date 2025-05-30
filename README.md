# Chat Application
## 📝 Project Overview
This is a real-time chat application built with a full-stack approach. The app allows users to register, login, join chat rooms, and send instant messages. It supports private messaging, group chats, and notifications for new messages, providing a smooth and interactive chatting experience.

### 🚀 Features
✅User authentication (signup, login, logout)

✅Real-time messaging with WebSocket (Socket.IO)

✅Multiple chat rooms and private messages

✅User presence status (online/offline)

✅Message notifications and read receipts

✅Responsive UI built with React

✅Backend API using Node.js and Express

✅Data storage with MongoDB

✅Secure password hashing and JWT-based authentication

## 🛠️ Technology Stack
Frontend	Backend	Database	Others
React	Node.js	MongoDB	Socket.IO
React Router	Express.js	Mongoose ORM	JWT Authentication
Styled Components or CSS	bcrypt.js		Nodemon

## 📁 Project Structure
<pre>
chat-app/
├── backend/
│   ├── controllers/         # Business logic for routes
│   ├── models/              # MongoDB schemas (User, Message, Room)
│   ├── routes/              # API routes
│   ├── middleware/          # Auth & validation middleware
│   └── server.js            # Main backend server entry point
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Pages like Login, ChatRoom, Profile
│   │   ├── context/         # React Context for global state
│   │   ├── utils/           # Utility functions
│   │   └── App.js           # Main React app component & routing
├── README.md
└── package.json
</pre>


## 💻 Installation & Setup
### Prerequisites
💡Node.js (v14+)

💡npm

💡MongoDB (local or Atlas)

## Steps
Clone the repository:
<pre>
git clone https://github.com/yourusername/chat-app.git
cd chat-app
</pre>
Setup backend:
<pre>
cd backend
npm install
</pre>
Create a .env file in the backend folder with:
<pre>
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
</pre>

Start backend server:
<pre>
npm run dev
</pre>

Setup frontend:
<pre>
cd ../frontend
npm install
npm start
</pre>

Open http://localhost:3000 in your browser.

### 🔐 Authentication Flow
Users register and login with secure password hashing.

JWT tokens are issued and stored in localStorage.

Tokens are sent with API requests for protected routes.

Backend validates JWT and authorizes users accordingly.

### 📡 Real-Time Messaging
Socket.IO manages WebSocket connections.

Users join rooms or private chats.

Messages are broadcast in real time.

Message events include sending, receiving, and typing indicators.

### 🧪 Testing
Use Postman or similar tools to test REST APIs.

Manually test real-time chat features by opening multiple browser windows.

### 🔮 Future Enhancements
Add video/audio calls

Integrate emojis and file sharing

Improve UI/UX with animations

Add message search and history export

Enable push notifications


