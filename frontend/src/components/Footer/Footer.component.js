import React from "react";
import "./Footer.styles.css";
import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="md">
        <p>Copyright &copy; Proshop </p>
      </Container>
    </footer>
  );
};

export default Footer;
