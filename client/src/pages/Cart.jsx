import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Typography,
} from "@mui/material";

import React, { useContext } from "react";
import { ContextCart } from "../context/ContextApiProducts";
// import cartEmty from "../../public/images/cartEmty.jpg";

const Cart = () => {
  const { carts, dispatch } = useContext(ContextCart);
  const total = carts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <React.Fragment>
      {/* <Typography gutterBottom variant="h5" component="div">
        ĐƠN HÀNG CỦA BẠN
        {carts.length > 0 && (
          <div className="total">
            <h2>{total}</h2>
          </div>
        )}
      </Typography> */}
      <Grid container sx={{ justifyContent: "space-around" }}>
        <Grid md={8}>
          {total ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {carts &&
                    carts.map((cart, index) => {
                      return (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>
                            <CardMedia
                              component="img"
                              image={require(`../../public/images/${cart.image}`)}
                              alt="green iguana"
                              style={{ width: "100px", height: "100px" }}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {cart.name}
                            <TableCell>{cart.price}Đ</TableCell>
                          </TableCell>

                          <TableCell sx={{ width: "150px" }}>
                            <Button
                              onClick={() => {
                                if (cart.quantity > 1) {
                                  dispatch({ type: "DECREASE", payload: cart });
                                }
                              }}
                            >
                              <RemoveIcon fontSize="small" />
                            </Button>
                            {cart.quantity}
                            <Button
                              onClick={() =>
                                dispatch({ type: "INCREASE", payload: cart })
                              }
                            >
                              <AddIcon fontSize="small" />
                            </Button>
                            <TableCell sx={{ paddingLeft: "35px" }}>
                              {cart.price * cart.quantity}.000 Đ
                            </TableCell>
                          </TableCell>

                          <TableCell>
                            <Button
                              variant="outlined"
                              startIcon={<DeleteIcon />}
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE",
                                  payload: cart,
                                })
                              }
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  <Box
                    sx={{
                      display: { xs: "contents", sm: "contents", md: "none" },
                    }}
                  >
                    <TableRow>
                      <TableCell>
                        <Typography gutterBottom variant="h7" component="div">
                          TỔNG TIỀN
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {total ? total + ".000 VND" : ""}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                          {carts.length} Sản phẩm
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Button size="small" color="primary">
                          THANH TOÁN
                        </Button>
                      </TableCell>
                    </TableRow>
                  </Box>
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell>
                      <CardMedia
                        component="img"
                        image={"http://maytot.com.vn/upload/image/cart.png"}
                        alt="green iguana"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Bạn chưa có đơn hàng
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
        <Grid md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TỔNG TIỀN
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {total ? total + ".000 VND" : ""}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                THANH TOÁN
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Cart;
