import React, { useState } from "react";
import { auth, provider } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const handleLogInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };
  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        placeholder="email"
        id="email"
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(password);
        }}
      />
      <button onClick={handleLogIn}>Sign In</button>
      <button onClick={handleLogInWithGoogle}>Sign In With Google</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
