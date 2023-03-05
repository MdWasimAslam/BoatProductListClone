import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Container } from "@mui/system";
import { Button, CssBaseline } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Filter from "../Components/Filter";
import Grid from "@mui/material/Unstable_Grid2";
import "./Style.css";
const products = require("../Product")


function Home() {
  return (
    <div>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="l">
        <Box mt={2}>
          <Filter />

          {/* Products Listing */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              
             {products.map((value,index)=>{
              return(
                <Grid xs={2} sm={4} md={4}>
                <Card
                  sx={{ display: "flex" }}
                  className={"customProductCard"}
                  elevation={0}
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#E7E7E7",
                      padding: "30px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={value.image}
                      alt="Boat"
                    />
                  </div>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h7" fontWeight={600}>
                        {value.titile}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        fontWeight={600}
                      >
                        {value.price}{" "}
                        <span
                          style={{
                            color: "#2CA142",
                            fontSize: "14px",
                            marginLeft: "3px",
                          }}
                        >
                          {value.discount}
                        </span>
                        <span
                          style={{
                            color: "gray",
                            fontSize: "10px",
                            marginLeft: "7px",
                          }}
                        >
                          <s>{value.mrp}</s>
                        </span>
                      </Typography>
                      <div
                        style={{
                          width: "120%",
                          display: "flex",
                          height: "25px",
                          backgroundColor: "#F1EFEF",
                          borderRadius: "30px",
                          border: "1px solid grey",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            color: "#2CA142",
                            fontSize: "15px",
                            marginLeft: "7px",
                          }}
                        >
                          &#9733;
                        </span>
                        <span style={{ fontSize: "13px", marginLeft: "5px" }}>
                          Be the first to review
                        </span>
                      </div>
                      <div>
                        <span style={{ fontSize: "11px" }}>
                          ₹15 Extra Discount on UPI
                        </span>
                      </div>
                      <div>
                        <Button
                          sx={{
                            backgroundColor: "red",
                            color: "white",
                            width: "100%",
                            marginTop: "10px",
                          }}
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              )
             })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
