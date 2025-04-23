"use client";
import { useColorMode } from "@/config/MuiThemeProvider";

import { Box, Paper } from "@mui/material";

import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import Orders from "./Orders";

interface CategoryCardProps {
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: ReactElement<any, any>;
  name: string;
  counter: number;
  openOrders?:boolean
}

function CategoryCard({ color, Icon, name, counter,openOrders }: CategoryCardProps) {
  const { mode } = useColorMode();


  return (
    <Paper
      elevation={0}
      
      sx={{
        bgcolor: mode === "dark" ? color : "costom.card",
        display: "flex",
        p: 1,
        px: 2,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 3,
        position:"relative"
      }}
    >
      {name=="Orders"&&            
      <Box position={"absolute"} sx={{width:200 ,top:80,zIndex:999999,right:5}} >
{openOrders&& openOrders &&
<Orders/>
}
</Box>}
      <Box
        sx={{ bgcolor: mode === "light" ? color : "", borderRadius: 5, p: 2 }}
      >
        {Icon}
      </Box>
      <Typography fontSize={18} color="black" fontWeight={"bold"}>
        {name}
      </Typography>
      <Typography fontSize={18} color="black" >
        {counter}
      </Typography>
    </Paper>
  );
}

export default CategoryCard;
