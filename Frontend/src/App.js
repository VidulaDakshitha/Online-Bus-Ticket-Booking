import React, { Component } from "react";
import { HashRouter, Route, Switch} from "react-router-dom";




import "./App.scss";
import ConfirmEmail from "./views/Pages/Confirem/ConfiremEmail";
import VerifyUser from "./views/Pages/VerifyUser";

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));


const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));
const ForgotPassword=React.lazy(() => import("./views/Pages/ForgotPassword/ForgotPassword"));
const ResetPassword=React.lazy(() => import("./views/Pages/ResetPassword/ResetPassword"));

const loading = () => (
  <div>
  </div>
);


class App extends Component {
  render() {
    return (

    <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/confirm"
              name="Confirm Email Page"
              render={(props) => <ConfirmEmail {...props} />}
            />

            <Route
              exact
              path="/verify"
              name="verify Email Page"
              render={(props) => <VerifyUser {...props} />}
            />
            <Route
              exact
              path="/"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/forgotpassword"
              name="forgot password"
              render={(props) => <ForgotPassword {...props} />}
            />

              <Route
              exact
              path="/resetpassword"
              name="reset password"
              render={(props) => <ResetPassword {...props} />}
            />

            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />


             <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />


          </Switch>
       </React.Suspense>
          </HashRouter>

    );
  }
}


export default App;
