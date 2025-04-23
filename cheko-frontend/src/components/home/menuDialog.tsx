/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@/interfaces/MenuInterface';
import Image from 'next/image';
import { Box, Chip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import { useColorMode } from '@/config/MuiThemeProvider';

import { useDispatch } from 'react-redux';
import { decrementItemCounter, incrementItemCounter } from '@/slice/menuSlice';

interface MenuCardProps{ 
    item: MenuItem;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    open: boolean;
    cart: MenuItem | undefined
 }
export default function MenuDialog({item,setOpen,open,cart}:MenuCardProps) {
    const { mode } = useColorMode();
    const dispatch=useDispatch()
    
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
            sx: {
              borderRadius: 5, 
              p:1,
              minWidth:100
            },
          }}
         
      >
        <DialogTitle id="alert-dialog-title">
            <Box display={"flex"} gap={2} alignItems={"center"}>

          <Typography fontSize={24}>
            
            {item.name}</Typography>
          <Chip
            label="Best Sale"
           
            sx={{
              backgroundColor: '#D9F0E5',
              color: '#3AA68B',
              p:0,
              borderRadius:2,
              height:20,
              width:78,
              fontSize:11
            }}
          />
            </Box >
            <Typography fontSize={15}>
                
            {item.calorie} cal
                </Typography>  
        </DialogTitle>
        <IconButton
          aria-label="close"
          size='small'
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 28,
            top: 28,
            color: "white",
            bgcolor:theme.palette.grey[500]
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" fontSize={13} mb={4} >
            {item.description}
          </DialogContentText>
          <Box        
          height={318}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
          }}>

          <Image
            src={item.image}
            alt="Breakfast"
            // width={100}
            // height={100}
            fill

            style={{ objectFit: 'cover' }}
           
          />
          </Box>
        </DialogContent>
        <DialogActions>
        <Box  display="flex" gap={6} justifyContent="space-between" alignItems="center">
            <Typography fontWeight="bold" fontSize={22} color="pink">
              {item.price} SR
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Button
              onClick={()=>dispatch(decrementItemCounter({ id: item.id }))}
                variant={mode==="dark"?"outlined":"contained"}
                sx={{
                  minWidth: 35,
                  height:35,
                  padding: 0,
                  backgroundColor: 'secondary',
                
                  fontSize:28,
                  '&:hover': { backgroundColor: '#f5c9e0', color:"black" },
                }}
              >
                -
              </Button>
              <Typography fontSize={12} fontWeight="bold">{cart?.counter||0}</Typography>
              <Button
              onClick={()=>dispatch(incrementItemCounter({ id: item.id }))}
                variant={mode==="dark"?"outlined":"contained"}
                sx={{
                  minWidth: 35,
                  height:35,
                  padding: 0,
                  backgroundColor: 'secondary',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { border: '5px solid' },},
                
                  fontSize:24,
                  '&:hover': { backgroundColor: '#f5c9e0', color:"black" },
                }}
              >
                +
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
