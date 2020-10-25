import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetails from "./components/ProductDetails/ProductDetails.component";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route path="/product/:id" component={ProductDetails} />
      </BrowserRouter>
    </>
  );
};

export default App;
