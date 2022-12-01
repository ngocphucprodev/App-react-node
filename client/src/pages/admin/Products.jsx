import { Button, CardMedia, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setproducts] = useState("");
  // const [remove, setRemove] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/product/show")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  const handleRemove = (id) => {
    //  const strImage = form.image;
    // const image = strImage.split("\\")[2];

    fetch(`http://localhost:4000/product/delete/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  };
  return (
    <React.Fragment>
      <div>
        <table style={{ maxWidth: "1000px", margin: "0px auto" }}>
          <Button>
            <Link to="/addproduct">Them moi</Link>
          </Button>
          <tbody>
            {products &&
              products.map((product, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <CardMedia
                        component="img"
                        image={require(`../../../public/images/${
                          product.image ? product.image : "err.png"
                        }`)}
                        alt="green iguana"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.total}</TableCell>
                    <TableCell>{product.price} Đ</TableCell>
                    <TableCell>
                      <DeleteIcon
                        onClick={() => handleRemove(product._id)}
                        sx={{ color: "#1976d2" }}
                      />
                    </TableCell>
                    <TableCell>
                      <Link to={`/products/edit/${product._id}`}>
                        <EditOutlinedIcon
                          onClick={() => console.log(product._id)}
                          sx={{ color: "#1976d2" }}
                        />
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Products;
