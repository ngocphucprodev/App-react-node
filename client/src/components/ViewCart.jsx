import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ViewCart = ({ products }) => {
  return (
    <Grid container rowSpacing={10} spacing={2}>
      {products.map((product, index) => {
        return (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: "unset" }}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  src=require("../../public/images/logo.png")
                  alt="green iguana"
                /> */}
                <CardMedia
                  component="img"
                  image={require(`../../public/images/${
                    product.image ? product.image : "err.png"
                  }`)}
                  alt="green iguana"
                  sx={{
                    maxHeight: { xs: "150px", sm: "330px", md: "330px" },
                    maxWidth: "250px",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    sx={{
                      minHeight: "50px",
                      maxWidth: "240px",
                      fontSize: { xs: "10px" },
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price} Đ
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {product.image ? (
                  <Link
                    to={`/product/${product._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="outlined">XEM THÊM</Button>
                  </Link>
                ) : (
                  <Link style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      onClick={() => alert("San pham dang cap nhat")}
                    >
                      XEM THÊM
                    </Button>
                  </Link>
                )}
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ViewCart;
