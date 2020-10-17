import React, { Component } from "react";
import { HashRouter, Route, Switch} from "react-router-dom";




import "./App.scss";

// Containers

const QRscanner=React.lazy(() => import("./views/Qrscanner/Qrscanner"));
const Successpage=React.lazy(() => import("./views/Qrscanner/Successpage"));
const Errorpage=React.lazy(() => import("./views/Qrscanner/Penaltypage"));
const Successend=React.lazy(() => import("./views/Qrscanner/Successpageend"));


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
              path="/successpage"
              name="Successpage"
              render={(props) => <Successpage {...props} />}
            />


<Route
              path="/errorpage"
              name="Errorpage"
              render={(props) => <Errorpage {...props} />}
            />

<Route
              path="/endtrip"
              name="Successend"
              render={(props) => <Successend {...props} />}
            />


        <Route
              path="/"
              name="QRscanner"
              render={(props) => <QRscanner {...props} />}
            />
          </Switch>
       </React.Suspense>
          </HashRouter>

    );
  }
}


export default App;
