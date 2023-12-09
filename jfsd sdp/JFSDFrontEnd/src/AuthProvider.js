import React, { useState } from "react";


const AuthProvider = ({ children }) => {
  const [lgnbtn, setLgnBtn] = useState("Login");

  const handleLogin = () => {
    if (lgnbtn === "Login") {
      setLgnBtn("Logout");
    } else {
      setLgnBtn("Login");
    }
  };

  // Pass handleLogin function as a prop to children
  return React.Children.map(children, (child) =>
    React.cloneElement(child, {handleLogin})
  );
};

export default AuthProvider;