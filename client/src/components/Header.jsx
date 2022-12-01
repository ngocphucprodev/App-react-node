import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { textAlign } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import Nav from "./Nav";
const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/product",
  },
  {
    display: "Danh muc",
    path: "/catalog",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
  {
    display: "Dang ky",
    path: "/register",
  },
];
// const userLogin = JSON.parse(localStorage.getItem("user"));
// console.log(userLogin);
const Header = () => {
  // const [userLogged, setUserLogged] = useState("");

  // useEffect(() => {
  //   setUserLogged(userLogin);
  // });

  return (
    <Box>
      <AppBar component="nav">
        <Container>
          <Grid container sx={{ padding: 1, justifyContent: { xs: "center" } }}>
            <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h7">Phone: 0825 818 595</Typography>
                {/* <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              {mainNav.map((item, index) => (
                <Link key={index} to={item.path} sx={{ color: "#fff" }}>
                  {item.display}
                </Link>
              ))}
            </Box> */}
                <Divider
                  sx={{ height: 28, m: 0.5, borderColor: "white" }}
                  orientation="vertical"
                />
                <Typography variant="h7">
                  Email: ngocphuc1399@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item md={8} sx={{ textAlign: "right" }}>
              {/* <Box>
                <Typography variant="h7">
                  {userLogged && userLogged.username}
                </Typography>
                <Link to={`login`}>
                  <Tooltip
                    title="Open settings"
                    onClick={() => {
                      setUserLogged("");
                      localStorage.removeItem("user");
                    }}
                  >
                    <IconButton sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                </Link>
              </Box> */}
              <ListItemIcon sx={{ color: "#fff" }}>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemIcon sx={{ color: "#fff" }}>
                {" "}
                <FacebookIcon />
              </ListItemIcon>
              <ListItemIcon sx={{ color: "#fff" }}>
                {" "}
                <InstagramIcon />
              </ListItemIcon>
              <ListItemIcon sx={{ color: "#fff" }}>
                {" "}
                <YouTubeIcon />
              </ListItemIcon>
            </Grid>
          </Grid>
        </Container>
        <Nav />
      </AppBar>
    </Box>
  );
};

export default Header;
