import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "./config/firebase";
import Home from "./Home";
import "./App.css";
import Login from "./Login";

function App() {
  const user = useAuthState(auth);
  console.log(auth.currentUser);

  return <>{auth.currentUser ? <Home /> : <Login />}</>;
}

export default App;
