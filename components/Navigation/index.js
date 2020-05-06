import React from "react";
import { AppBar, Typography, Button } from "@material-ui/core";
export default function Navigation() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
