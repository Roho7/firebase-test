import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";

export default function Home() {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
