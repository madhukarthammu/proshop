import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import Homepage from "./pages/Homepage";
import ProductDetails from "./components/ProductDetails/ProductDetails.component";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Route exact path="/" component={Homepage} />
          <Route path="/product/:id" component={ProductDetails} />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
