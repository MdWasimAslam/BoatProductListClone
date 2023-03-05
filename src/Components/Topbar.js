import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "../Components/Style.css"

export default function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="customTopBar">
      <AppBar position="static" sx={{backgroundColor:"black",alignItems:"center",minHeight:"32px"}}>
        <Toolbar>
          
          <Typography variant="p" component="div" sx={{ flexGrow: 1,color:"white" }}>
          The 1299 Store is LIVE. Everything @ ₹1299. Ends soon.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}