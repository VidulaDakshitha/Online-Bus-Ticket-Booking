import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";




import { css } from "@emotion/core";


const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));


//for users dashboard

const DashboardUser = React.lazy(()=>import("../../views/Dashboard/DashboardUser.js"));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class DefaultLayout extends Component {
  // loading = () => (
  //   <div className="animated fadeIn pt-1 text-center">Loading...</div>
  // );

   loading = () => (
    <div>

    </div>
  );

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="app">

        <div className="shadow">
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </div>

        <div className="app-body mt-3 mb-3">

          <div className="container" >
            <Suspense fallback={this.loading()}>
              <Switch>
                <Route path="/dashboard" name="DashboardUser" render={(props) => <DashboardUser {...props} />}/>
                <Redirect from="/" to="/" />
              </Switch>
            </Suspense>
          </div>

        </div>


          <Suspense fallback={this.loading()}>
              <DefaultFooter />
          </Suspense>


      </div>
    );
  }
}

export default DefaultLayout;
