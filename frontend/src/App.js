import { Fragment, useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginContextProvider from "./context/LoginContextProvider";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Register";
import TodoContextProvider from "./context/TodoContextProvider";
import TodoContext from "./context/todo-context";
import LoginContext from "./context/login-context";
function App() {
  return (
    <Fragment>
      <LoginContextProvider>
        <TodoContextProvider>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/home">
              <HomePage />
            </Route>
          </Switch>
        </TodoContextProvider>
      </LoginContextProvider>
    </Fragment>
  );
}

export default App;
