import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
      await logout();
      console.log(currentUser);
      navigate("/");
    } catch (error) {
      console.log("couldnlt sign out");
      console.log(error);
    }
  }

  return (
    <div className="profile__container">
      <div className="info__container">
        <h1>Welcome {currentUser && currentUser.email}</h1>
        <h2> Phone Number: {currentUser && currentUser.phoneNumber}</h2>
        <h2> Your UID: {currentUser && currentUser.uid}</h2>
        <h2>
          Account Created At: {currentUser && currentUser.metadata.creationTime}
        </h2>
        <h2>
          Last signed in at:
          {currentUser && currentUser.metadata.lastSignInTime}
        </h2>
      </div>
      <div className="logout__container">
        <button className="logout__button" onClick={handleSubmit}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
