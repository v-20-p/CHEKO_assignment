import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import MenuItem from "@/interfaces/MenuInterface";
import MenuDialog from "./menuDialog";
import { useColorMode } from "@/config/MuiThemeProvider";
import { useDispatch } from "react-redux";
import { decrementItemCounter, incrementItemCounter } from "@/slice/menuSlice";
import { motion } from "framer-motion";

interface MenuCardProps {
  item: MenuItem;
  cart: MenuItem | undefined;
}

function MenuCard({ item,cart }: MenuCardProps) {
  const [open, setOpen] = useState(false);
  const [largeSize, setLargeSize] = useState(false);
  const { mode } = useColorMode();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const cardVariants = {
    small: { 
      gridRow: "span 1", 
      gridColumn: "span 1",
      transition: { duration: 0.001, ease: "easeInOut" }
    },
    large: { 
      gridRow: "span 2", 
      gridColumn: "span 2",
      transition: { duration: 0.001, ease: "easeInOut" }
    }
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#f5c9e0", color: "black" },
    tap: { scale: 0.95 },
    initial: { scale: 1 }
  };

  const counterVariants = {
    increment: { scale: [1, 1.3, 1], transition: { duration: 0.01 } },
    decrement: { scale: [1, 0.7, 1], transition: { duration: 0.01 } }
  };

  return (
    <motion.div
      initial="small"
      animate={largeSize ? "large" : "small"}
      variants={cardVariants}
    >
      <Paper
        component={motion.div}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        elevation={0}
        sx={{
          borderRadius: 2,
          p: 1,
          height: "100%",
          position: "relative"
        }}
      >
        {largeSize && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Button
              onClick={() => setLargeSize(false)}
              variant="contained"
              component={motion.button}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              sx={{
                minWidth: 35,
                height: 35,
                padding: 0,
                fontSize: 18,
                fontWeight: "bold",
                position: "relative",
                top: -15,
                left: -20
              }}
            >
              {"<"}
            </Button>
          </motion.div>
        )}
        
        <MenuDialog item={item} setOpen={setOpen} open={open} cart={cart} />
        <Box
          display="flex"
          gap={2}
          alignItems={largeSize ? "flex-start" : "center"}
          flexDirection="row"
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={imageVariants}
          >

            <Box
              component={motion.div}
              layout
              transition={{ duration: 0.3 }}
              width={138}
              height={largeSize ? 159 * 2 : 138}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                flexShrink: 0
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                objectFit=""
                onClick={handleClickOpen}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </motion.div>

          <Box
            component={motion.div}
            layout
            transition={{ duration: 0.3 }}
            flex={1}
            width={largeSize ? "100%" : "auto"}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                component={motion.h3}
                whileHover={{ scale: 1.03 }}
                fontWeight="bold"
                fontSize={largeSize ? 24 : 21}
                onClick={() => setLargeSize(!largeSize)}
                sx={{
                  "&:hover": {
                    textDecoration: "underline"
                  },
                  cursor: "pointer"
                }}
              >
                {item.name}
              </Typography>
              <Typography fontSize={13} color="gray">
                {item.calorie} Cal
              </Typography>
              <Chip
                component={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                label="Best Sale"
                size="small"
                sx={{
                  backgroundColor: "#D9F0E5",
                  color: "#3AA68B",
                  fontWeight: "bold",
                  mt: 0.5,
                  mb: 1,
                  px: 2,
                  borderRadius: 2,
                  ...(!largeSize && {
                    position: "relative",
                    right: 70,
                    top: 10
                  })
                }}
              />
            </Box>
            <Box
              component={motion.div}
              layout
              transition={{ duration: 0.3 }}
              mt={largeSize ? 28 : 5}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                component={motion.p}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
                
                fontWeight="bold"
                fontSize={22}
                color="pink"
              >
                {item.price} SR
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Button
                  component={motion.button}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => dispatch(decrementItemCounter({ id: item.id }))}
                  variant={mode === "dark" ? "outlined" : "contained"}
                  sx={{
                    minWidth: 35,
                    height: 35,
                    padding: 0,
                    backgroundColor: mode === "dark" ? "transparent" : "primary.main",
                    fontSize: 28
                  }}
                >
                  -
                </Button>
                <Typography
                  component={motion.p}
                  key={item.counter || 0}
                  animate={item.counter&& item.counter > 0 ? "increment" : "decrement"}
                  variants={counterVariants}
                  fontSize={12}
                  fontWeight="bold"
                >
                  {cart?.counter || 0}
                </Typography>
                <Button
                  component={motion.button}
                  variants={buttonVariants}
                  whileHover="hover" 
                  whileTap="tap"
                  onClick={() => dispatch(incrementItemCounter({ id: item.id }))}
                  variant={mode === "dark" ? "outlined" : "contained"}
                  sx={{
                    minWidth: 35,
                    height: 35,
                    padding: 0,
                    backgroundColor: mode === "dark" ? "transparent" : "primary.main",
                    fontSize: 24
                  }}
                >
                  +
                </Button>
              </Box>
            </Box>
          </Box>
          {largeSize && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              flex={1}
            >
              <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
                {item.description}
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </motion.div>
  );
}

export default React.memo(MenuCard);