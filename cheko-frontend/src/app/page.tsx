// import Image from "next/image";
import Search from "@/components/home/Search";
import ThemeToggle from "../components/home/Button";
import { AppBar, Box, Button, Container, InputAdornment, Paper, TextField, Toolbar, Typography } from "@mui/material";


export default function Home() {
  return (
    < >
    <header >
      <Box display={"flex"}> 

      
    <Box  sx={{bgcolor:"black",borderBottomRightRadius:40,width:"95%",height:"199px"} }>
        <Toolbar sx={{  px: 0 }}>
          <Typography variant="h6">Home</Typography>
          <Button color="inherit">Map</Button>
        </Toolbar>
      </Box>
        <Box justifyContent={"center"} alignItems={"center"} width={"5%"}  >

        <ThemeToggle/>
        </Box>
      </Box>
      {/* Search Section */}
      <Paper className="w-10/12">
        
      
      <Box  sx={{ display: 'flex', gap: 2, my: 3 }}>
        <TextField
          sx={{border:"none"}}
          variant="outlined"
          placeholder="Search"
          className="w-1/2"
          
          
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <SearchIcon /> */}
              </InputAdornment>
            )
          }}
        />
        <Button variant="outlined" >
          Filter
        </Button>
      </Box>
      </Paper>
    </header>
     
    </>
  );
}
