import React from "react";
import ProductList from "../components/ProductList/ProductList.component";
import Header from "../components/Header/Header.component";
import Footer from "../components/Footer/Footer.component";

const Homepage = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Homepage;
