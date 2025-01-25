import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="h-[100dvh] w-full flex items-center justify-center">
      <h1>Welcome, {user.username}!</h1>
    </div>
  );
};

export default Home;
