import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  ImageListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextCart } from "../context/ContextApiProducts";

const ProductDetail = ({ product }) => {
  const { dispatch } = useContext(ContextCart);
  const [image, setImage] = useState(product.image);
  console.log(image);
  const gallerys = Object.values(product.gallery);
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));

  return (
    <React.Fragment>
      <Grid container sx={{ mt: 15 }}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box>
              <CardMedia
                component="img"
                sx={{ height: "auto", objectFit: "cover" }}
                image={require(`../../public/images/${
                  image ? image : "err.png"
                }`)}
                alt="Live from space album cover"
                // onClick={changImage}
              />

              <ImageListItem sx={{ display: { xs: "none", md: "flex " } }}>
                <CardActionArea>
                  <img
                    src={require(`../../public/images/${gallerys[1]}`)}
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "cover",
                      padding: "10px 10px 0px",
                    }}
                    onClick={() => setImage(gallerys[1])}
                  />
                </CardActionArea>
                <CardActionArea>
                  <img
                    src={require(`../../public/images/${gallerys[2]}`)}
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "cover",
                      padding: "10px 10px 0px",
                    }}
                    onClick={() => setImage(gallerys[2])}
                  />
                </CardActionArea>

                <CardActionArea>
                  <img
                    src={require(`../../public/images/${gallerys[3]}`)}
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "cover",
                      padding: "10px 10px 0px",
                    }}
                    onClick={() => setImage(gallerys[3])}
                    // onClick={changImage}
                  />
                </CardActionArea>
              </ImageListItem>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", marginTop: { xs: "15px" } }}>
              <CardContent sx={{ paddingTop: "0px" }}>
                <Typography component="div" variant="h5">
                  {product.name}
                </Typography>

                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="subtitle1">
                    {product.price} VNĐ
                  </Typography>
                  <Rating name="size-large" defaultValue={4} size="large" />
                </Box>
                <Divider />
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Chọn kích thước
                </Typography>
                <Stack direction="row" spacing={2}>
                  {product.size.map((item) => {
                    return (
                      <Avatar
                        sx={{
                          backgroundColor: "unset",
                          border: "1px solid #1976d2",
                          color: "black",
                        }}
                      >
                        {item}
                      </Avatar>
                    );
                  })}
                </Stack>
                {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Chọn số lượng
                </Typography>
                <TextField
                  type="number"
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                /> */}
                {/* <TableCell>
                  <Button
                    // onClick={() => {
                    //   if (cart.quantity > 1) {
                    //     dispatch({ type: "DECREASE", payload: cart });
                    //   }
                    // }}
                    onClick={() => updateQuantity("minus")}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  {quantity}
                  <Button
                    // onClick={() =>
                    //   dispatch({ type: "INCREASE", payload: cart })
                    // }
                    onClick={() => updateQuantity("plus")}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </TableCell> */}

                <Box sx={{ mt: 5 }}>
                  {isLoggedIn ? (
                    <Link to={`/cart`} style={{ textDecoration: "none" }}>
                      <Button
                        startIcon={<ShoppingCartTwoToneIcon />}
                        variant="outlined"
                        onClick={() =>
                          dispatch({
                            type: "ADD",
                            payload: { product, quantity: 1 },
                          })
                        }
                      >
                        Add to cart
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      startIcon={<ShoppingCartTwoToneIcon />}
                      variant="outlined"
                      onClick={() => alert("Đăng nhập để mua hàng")}
                    >
                      Add to cart
                    </Button>
                  )}
                </Box>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Mô Tả Sản phẩm
                </Typography>
                {product.description.split("/").map((item) => {
                  return (
                    <Box>
                      <Typography variant="subtitle1" component="li">
                        {item}
                      </Typography>
                      <Divider />
                    </Box>
                  );
                })}
              </CardContent>
            </Box>
          </Grid>
        </Grid>
        {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          SẢN PHẨM NỔI BẬT
        </Typography>
        <Grid container wrap="nowrap" spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={12}>
            <ProductCard />
          </Grid>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default ProductDetail;
