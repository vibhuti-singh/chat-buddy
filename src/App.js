import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client";
const serverURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000" // Development server URL
    : "https://8f38-113-193-214-154.ngrok-free.app"; // Production ngrok URL
const socket = socketIO.connect(serverURL);
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
