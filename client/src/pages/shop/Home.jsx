import React from "react";
import Navbar from "./Navbar";

const Home = ({ isAuthenticated, isLoading, user }) => {
  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
        user={user}
      />
    </div>
  );
};

export default Home;
