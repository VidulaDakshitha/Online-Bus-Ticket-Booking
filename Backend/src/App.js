import React, { Component } from "react";
import { HashRouter, Route, Switch} from "react-router-dom";




import "./App.scss";

// Containers

const QRscanner=React.lazy(() => import("./views/Qrscanner/Qrscanner"));
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
