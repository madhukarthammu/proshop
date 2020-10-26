import React, { useState } from "react";
import products from "./products";
import Product from "../Product/Product.component";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const ProductList = () => {
  const [itemproducts] = useState(products);

  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}>Latest Products</h1>
        <Grid container spacing={3} direction="row">
          {itemproducts.map(({ _id, ...otherProductProps }) => (
            <Grid item xs={3}>
              <Product key={_id} id={_id} {...otherProductProps} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;
