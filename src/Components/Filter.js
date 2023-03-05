import React from 'react'
import Stack from '@mui/material/Stack';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Filter() {
  return (
    <>
    <span style={{fontSize:"10px"}} >Home &#60; Immortal Gaming </span>
    <div>
    <span style={{fontSize:"25px",fontWeight:"bold"}} >Immortal Gaming </span>
    </div>
    <Stack direction="row" spacing={2} justifyContent={"space-between"} sx={{alignItems:"center"}} mt={5}>
        <div style={{display:"flex",alignItems:"flex-start"}} >
            <span><FilterListIcon/></span>
            <span style={{marginLeft:"5px",fontWeight:"600",fontSize:"15px"}} >Show Filters</span>
        </div>
        <div style={{
            display:"flex",
            alignItems:"center"
        }}>
            <span>Sort By</span>
            <span style={{marginLeft:"5px", fontWeight:"600" ,fontSize:"15px"}} >Featured</span>
            <span style={{marginLeft:"5px"}} ><KeyboardArrowDownIcon/></span>
        </div>
      </Stack>
    </>
  )
}

export default Filter