// import React from "react";
// import { Header, Icon } from "semantic-ui-react";

// const HeaderNew = (props) => (
//   <>
//     <Header as="h1">
//       <Icon name="angle left" />
//       <Header.Content className="ui center align">
//         {props.pageTitle}
//       </Header.Content>
//     </Header>
//   </>
// );

// export default HeaderNew;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";

export default function HeaderNew(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIosNew />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {props.pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
