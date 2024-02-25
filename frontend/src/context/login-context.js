import React from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default LoginContext;
