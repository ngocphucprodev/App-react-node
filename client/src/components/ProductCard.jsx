import { Container } from "@mui/material";
import React, { useContext } from "react";
import { ContextProduct } from "../context/ContextApiProducts";
import ViewCart from "./ViewCart";

const ProductCard = (props) => {
  const products = useContext(ContextProduct);

  return (
    <React.Fragment>
      {products && <ViewCart products={products} />}
    </React.Fragment>
  );
};

export default ProductCard;
