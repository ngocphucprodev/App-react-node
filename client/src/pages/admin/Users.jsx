import { CardMedia, TableCell, TableRow } from "@mui/material";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const Users = () => {
  const [users, setUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/show")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <React.Fragment>
      <div>
        <table style={{ maxWidth: "1000px", margin: "0px auto" }}>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <CardMedia
                        component="img"
                        image={require(`../../../public/images/${
                          user.image ? user.image : "err.png"
                        }`)}
                        alt="green iguana"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.username}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.gender} </TableCell>
                    <TableCell>{user.telephone} </TableCell>
                    <TableCell>
                      <DeleteIcon
                        onClick={() => console.log(user._id)}
                        sx={{ color: "#1976d2" }}
                      />
                    </TableCell>
                    <TableCell>
                      {/* <Link to={`/products/edit/${product._id}`}> */}
                      <EditOutlinedIcon
                        onClick={() => console.log(user._id)}
                        sx={{ color: "#1976d2" }}
                      />
                      {/* </Link> */}
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

export default Users;
