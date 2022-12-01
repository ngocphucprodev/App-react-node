import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const initialUserData = {
  username: "",
  password: "",
  email: "",
  telephone: "",
};

const Register = () => {
  const [form, setForm] = useState(initialUserData);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/store", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const handleInput = (e) => {
    console.log(form);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // <div>
    //   <h1>DANG KY</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Ho ten:
    //       <input type="text" name="username" onChange={handleInput} />
    //     </label>
    //     <label>
    //       Mat khau:
    //       <input type="text" name="password" onChange={handleInput} />
    //     </label>
    //     {/* <label>
    //       Nhap lai Mat khau:
    //       <input type="text" name="repassword" onChange={handleInput} />
    //     </label> */}
    //     <label>
    //       Email:
    //       <input type="text" name="email" onChange={handleInput} />
    //     </label>
    //     <label>
    //       So dien thoai
    //       <input type="text" name="telephone" onChange={handleInput} />
    //     </label>
    //     <label>
    //       Gioi tinh
    //       <input type="text" name="gender" onChange={handleInput} />
    //     </label>
    //     <button type="submit">Register</button>
    //   </form>
    // </div>
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
        ĐĂNG KÝ
      </Typography>
      <TextField
        fullWidth
        label="Họ và tên"
        helperText="Please enter your name"
        name="username"
        onChange={handleInput}
      />
      <TextField
        fullWidth
        label="Mật khẩu"
        helperText="Please enter your name"
        name="password"
        onChange={handleInput}
      />
      <TextField
        fullWidth
        label="Nhập lại mật khẩu"
        helperText="Please enter your name"
        name="repasswrod"
        onChange={handleInput}
      />
      <TextField
        fullWidth
        label="Email"
        helperText="Please enter your name"
        name="email"
        onChange={handleInput}
      />
      <TextField
        fullWidth
        label="Số điện thoại"
        helperText="Please enter your name"
        name="telephone"
        onChange={handleInput}
      />
      <Button fullWidth variant="outlined" type="submit" onClick={handleSubmit}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
