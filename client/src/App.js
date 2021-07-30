import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

let socket;
const CONNECTION_PORT = "localhost:3001/";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  const connectToRoom = () => {
    socket.emit("join_room", room);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <div className="logIn">
          <div className="inputdivs">
            <input
              className="inputbox"
              type="text"
              placeholder="Name..."
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="inputbox"
              type="text"
              placeholder="Room..."
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <button onClick={connectToRoom} className="loginButton" type="submit">
            Enter Chat
          </button>
        </div>
      ) : (
        <h1>you are not logged in</h1>
      )}
    </div>
  );
}
