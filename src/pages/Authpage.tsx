import React from "react";
import Register from "../components/Register";
import LogIn from "../components/LogIn";

const AuthPage: React.FC = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
          <Register />
          <LogIn />
        </div>
      </div>
    );
  };
  
  export default AuthPage;