import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

function Add() {
  const [products, setProducts] = useState({
    image: "",
    name: "",
    price: "",
    discount:"",
    mrp:""
  });
  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/addproduct", products);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(products);
  return (
    <div>
      <Navbar />

      <Stack
        spacing={2}
        mt={2}
        sx={{ backgroundColor: "FFFF", padding: "10px", textAlign: "center" }}
      >
        <div>
          <span style={{ fontSize: "30px", fontWeight: "600" }}>
            Add Product
          </span>
        </div>
        <div>
          <div>
            <TextField
              id="outlined-basic"
              label="Image Url"
              variant="outlined"
              onChange={handleChange}
              name="image"
              sx={{ width: "25%" }}
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              name="name"
              sx={{ width: "25%" }}
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              onChange={handleChange}
              name="price"
              sx={{ width: "25%" }}
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <TextField
              id="outlined-basic"
              label="Discount"
              variant="outlined"
              onChange={handleChange}
              name="discount"
              sx={{ width: "25%" }}
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <TextField
              id="outlined-basic"
              label="MRP"
              variant="outlined"
              onChange={handleChange}
              name="mrp"
              sx={{ width: "25%" }}
            />
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", width: "200px" }}
            onClick={handleClick}
          >
            Submit
          </Button>
        </div>
      </Stack>

      {/* <h1>Add Book Form</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <button onClick={handleClick}>Submit</button> */}
    </div>
  );
}

export default Add;
