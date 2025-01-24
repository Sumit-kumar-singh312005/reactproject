// components/Sidebar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div style={{ width: "200px", backgroundColor: "#f4f4f4", padding: "20px" }}>
      <button onClick={() => navigate("/students")}>Students Page</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
