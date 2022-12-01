import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  Typography,
  Menu,
  Paper,
  MenuList,
  Avatar,
  Tooltip,
} from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// const mainNav = [
//   {
//     display: "Trang chủ",
//     path: "/",
//   },
//   {
//     display: "Sản phẩm",
//     path: "/product",
//   },
//   {
//     display: "Danh muc",
//     path: "/catalog",
//   },
//   {
//     display: "Liên hệ",
//     path: "/contact",
//   },
//   {
//     display: "Dang ky",
//     path: "/register",
//   },
// ];
const userLogin = JSON.parse(localStorage.getItem("user"));
// console.log(userLogin);
const Nav = () => {
  //   const [userLogged, setUserLogged] = useState("");
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  //   useEffect(() => {
  //     setUserLogged(userLogin);
  //   });
  // const [anchorEl, setAnchorEl] =
  //   (React.useState < null) | (HTMLElement > null);
  // const handleMenu = (event: MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleLogout = () => {
    localStorage.removeItem("user");
    nav("/login");
    window.location.reload();
  };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const info = Object.values(userLogin).length - 1;

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Container>
        <Grid container sx={{ padding: 3 }}>
          <Grid item md={2} xs={4} sm={3}>
            <Box>
              <Link to="/" style={{ textDecoration: "none", color: "#1976d2" }}>
                <CardMedia
                  component="img"
                  image={
                    "https://1.bp.blogspot.com/-9tXdkT0JrOY/X40QNOfPtfI/AAAAAAAAPJA/oaUZyvP5PwkhLIwIGua5uJ84MhTIuWH8ACLcBGAsYHQ/w200-h113/logo-yody.png"
                  }
                  alt="green iguana"
                  style={{
                    width: "120px",
                    height: "40px",
                    marginLeft: "-35px",
                  }}
                />
              </Link>
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sm={6}>
            <Search />
          </Grid>
          <Grid item md={4} xs={2} sm={3}>
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
            {/* <ListItemIcon sx={{ color: "#fff" }}>
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
              </ListItemIcon> */}
            {/* #### */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {/* <MenuItem sx={{ display: { xs: "none", md: "block" } }}>
                {" "}
                <Typography variant="h5">
                  <Link
                    to={`/register`}
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    Đăng ký
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem sx={{ display: { xs: "none", md: "block" } }}>
                {" "}
                <Typography variant="h5">
                  <Link
                    to={`/login`}
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    Đăng nhập
                  </Link>
                </Typography>
              </MenuItem> */}
              {/* <MenuItem
                sx={{
                  marginRight: { xs: "-35px", md: "unset" },
                }}
              >
                <Link to={`/cart`}>
                  <LocalMallOutlinedIcon
                    fontSize="large"
                    sx={{ color: "#1976d2" }}
                  />
                </Link>
              </MenuItem> */}

              <MenuItem
                sx={{
                  position: "relative",
                  marginRight: { xs: "-35px", md: "unset" },
                }}
              >
                {userLogin ? (
                  <Tooltip title={userLogin.username} placement="bottom">
                    <Avatar
                      alt="Remy Sharp"
                      onClick={() => setOpen(!open)}
                      src={require(`../../public/images/${userLogin.image}`)}
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title="Login" placement="bottom">
                    <Link to="/login">
                      <AccountCircleOutlinedIcon
                        fontSize="large"
                        sx={{ color: "#1976d2" }}
                      />{" "}
                    </Link>
                  </Tooltip>
                )}
                <Paper
                  sx={{
                    width: "150px",
                    // marginLeft: "auto",
                    position: "absolute",
                    bottom: "-120px",
                    right: 0,
                    ...(open ? { display: "block" } : { display: "none" }),
                  }}
                >
                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </Paper>
              </MenuItem>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Nav;
