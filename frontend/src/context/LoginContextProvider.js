import LoginContext from "./login-context";

const LoginContextProvider = (props) => {
  let isLoggedIn = false;
  const login = (tokenId) => {
    localStorage.setItem("token", tokenId);
    isLoggedIn = true;
  };
  const logout = () => {
    localStorage.clear();
    isLoggedIn = false;
  };
  const loginContext = {
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
  };
  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
