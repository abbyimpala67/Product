import Header from "./containers/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
   <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing}></Route>
          <Route
            path="/product/:productId"
            exact
            component={ProductDetail}
          ></Route>
          <Route> 404 Not Found!</Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;


