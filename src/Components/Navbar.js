import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Topbar from "./Topbar";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddIcon from '@mui/icons-material/Add';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "20px",
  backgroundColor: "#EAEAEA",
  '&:hover': {
    backgroundColor: "#EAEAEA",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));







export default function Navbar() {
  const navigate = useNavigate();
  const addItem = () => {
    navigate("/add");
  };


  return (
    <>
      <Topbar />
      <Box sx={{ flexGrow: 1 }} className="customBoatNav" >
        <AppBar position="static" sx={{ background: "#FFFFFF" }} elevation={0}>
          <Stack
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 2vw",
              color:"black"
            }}
            direction="row"
            spacing={2}
          >
            <div style={{marginLeft:"20px"}} >
              <Link to="/"><img height={35} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_logo_small.webp?v=1672379935" /></Link>
            </div>
            <div>
              <Toolbar
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4vw",
                  fontWeight:"600"
                }}
              >
                <Typography variant="h8" component="div">
                  CATEGORIES
                </Typography>
                <Typography variant="h8" component="div">
                  DAILY DEALS
                </Typography>
                <Typography variant="h8" component="div">
                  GIFT WITH BOAT
                </Typography>
                <Typography variant="h8" component="div">
                  MORE
                </Typography>
              </Toolbar>
              
            </div>
                        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Earphones"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <div  >
                <PermIdentityIcon  />
                
                <Link to="/add" sx={{textDecoration:"none" ,color:"gray"  }} ><AddIcon /></Link>
            </div>
          </Stack>
        </AppBar>
      </Box>
    </>
  );
}
