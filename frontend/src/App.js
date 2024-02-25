import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginContextProvider from "./context/LoginContextProvider";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Register";
function App() {
  return (
    <Fragment>
      <LoginContextProvider>
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
      </LoginContextProvider>
    </Fragment>
  );
}

export default App;
