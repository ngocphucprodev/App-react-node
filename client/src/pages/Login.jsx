import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/ContextApiProducts";
const Login = () => {
  const nav = useNavigate();
  const authdata = useContext(AuthContext);
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  // console.log(isLoggedIn);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    // console.log(form);
    authdata(form);
    await nav("/products");
    await window.location.reload();
  };
  // console.log(form);
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography
        sx={{ mt: 4, mb: 2, textAlign: "center" }}
        variant="h5"
        component="div"
      >
        ĐĂNG NHẬP
      </Typography>
      <TextField
        fullWidth
        label="Email"
        name="email"
        helperText="Please enter your name"
        onChange={handleInput}
      />
      <TextField
        fullWidth
        label="Email"
        name="password"
        helperText="Please enter your name"
        onChange={handleInput}
      />

      <Button fullWidth onClick={handleSubmit} variant="outlined" type="submit">
        LOGIN
      </Button>
    </Box>
  );
};

export default Login;
