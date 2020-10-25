import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./Header.styles.css";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="appbar">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              PROSHOP
            </Typography>
            <Button color="inherit">Cart</Button>
            <Button color="inherit">SignIn</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
