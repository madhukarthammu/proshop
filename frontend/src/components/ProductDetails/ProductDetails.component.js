import { Container, Grid } from "@material-ui/core";
import React from "react";
import products from "../ProductList/products";
import Rating from "../Rating/Rating.component";
import "./ProductDetails.styles.css";

const ProductDetails = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id);

  return (
    <Container>
      <Grid container spacing={3} direction="row">
        <Grid item xs={12} md={6}>
          <img src={product.image} alt={product.name} />
        </Grid>
        <Grid item xs={12} md={3}>
          <div style={{ marginBottom: 10 }}>
            <span className="productName">{product.name}</span>
          </div>
          <Rating
            rating={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <p>{product.description}</p>
          <h1>${product.price}</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <table>
            <tr>
              <td>Price:</td>
              <td>${product.price}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{product.countInStock > 0 ? "IN STOCK" : "OUT OF STOCK"}</td>
            </tr>
            <tr>
              <td colspan="2" style={{ textAlign: "center" }}>
                <button type="button">ADD TO CART</button>
              </td>
            </tr>
          </table>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
