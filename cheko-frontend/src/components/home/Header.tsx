"use client"
import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, InputAdornment, Paper, SvgIcon, TextField,  Typography } from "@mui/material";
import ThemeToggle from './Button';
import { useSearchParams,useRouter, usePathname } from 'next/navigation';
import { fetchMenu } from '@/slice/menuSlice';
import { useAppDispatch } from '@/store/store';
import FilterAutocomplete from './FilterAutoComplete';





function Header() {
  const router=useRouter()
  const dispatch=useAppDispatch()
  const pathname = usePathname()
  console.log(pathname)

const searchParams = useSearchParams();
  const searchFromUrl = searchParams.get('search') ||""
  const filterByFromUrl = searchParams.get('filterBy') ||""

const [search, setSearch] = useState(searchFromUrl)
const [filterBy, setFilterBy] = useState(filterByFromUrl)
const handleSearch = () => {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (filterBy) params.set("filterBy", filterBy);

  router.push(`?${params.toString()}`);
};

useEffect(() => {

  dispatch(fetchMenu({
    search: searchFromUrl,
    filterBy: filterByFromUrl,
  }));
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchFromUrl, filterByFromUrl, dispatch]);
  return (
    <>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
        <Box 
          sx={{ 
            bgcolor: "black", 
            borderBottomRightRadius: { xs: 20, md: 40 }, 
            width: { xs: '100%', md: '95%' }, 
            height: { xs: 'auto', sm: 'auto', md: '130px' },
            pb: { xs: 10, md: 0 }
          }}
        >
          <Box className="flex ml-30 gap-2 ">

              <Box 
                className="flex items-end justify-center" 
                onClick={()=>{router.push("/home")}}
                bgcolor={pathname!="/home" ?"black":"primary.main"}
                sx={{
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10, 
                  
                  px: { xs: 2, md: 4 },
                  pb: 1,
                  minHeight: { xs: 50, md: 30 },
                  minWidth: { xs: 40, md: 30 },
                  width: { xs: '100%', sm: 'auto' },
                  cursor:"pointer"  
                }}
              >
                <Typography 
                  textAlign="center" 
                  
                  sx={{
                    color:(pathname!="/home" ?"white":'black'),
                    fontSize: { xs: 14, sm: 16, md: 16 ,p:0 }
                  }}
                >
                  Home
                </Typography>
              </Box>
              
              <Box 
                onClick={()=>{router.push("/map")}}
                bgcolor={pathname!="/map" ?"black":"primary.main"}
                className="flex items-end justify-center" 
                sx={{
                  
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10, 
                  px: { xs: 2, md: 4 },
                  pb: 1,
                  minHeight: { xs: 50, md: 43 },
                  minWidth: { xs: 30, md: 60 },
                  width: { xs: '100%', sm: 'auto' },
                  cursor:"pointer"
                }}
              >
                <Typography 
                  
                  sx={{
                    color:(pathname!="/map" ?"white":'black'),
                    fontSize: { xs: 14, sm: 16, md: 16 }
                  }}
                >
                  Map
                </Typography>
              </Box>
           
          </Box>
          
          {/* Search Section */}
          <Paper 
            sx={{ 
              position: "absolute", 
              top: { xs: 120, sm: 130, md: 90 }, 
              left: "50%", 
              transform: "translateX(-50%)", 
              borderRadius: "20px",
              width: { xs: '90%', sm: '85%', md: '83.333%' },
              zIndex:999
            }}
            elevation={0}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 1, sm: 2 }, 
                height: { xs: 'auto', sm: '62px' }, 
                alignItems: "center",
                py: { xs: 2, sm: 0 }
              }}
            >
              <TextField
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { border: 'none' },
                    '&:hover fieldset': { border: 'none' },
                    '&.Mui-focused fieldset': { border: 'none' },
                    '& input': {
                      fontSize: { xs: '14px', sm: '15px', md: '16px' },
                      '::placeholder': {
                        opacity: 4,
                      },
                    },
                  },
                  width: { xs: '100%', sm: '50%' }
                }}
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon 
                        color="primary"
                        sx={{ 
                          fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' } 
                        }}
                      >
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.2" clipPath="url(#clip0_3_10)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.25374 16.8093C4.92937 16.8093 1.42382 13.365 1.42382 9.10938C1.42382 4.85375 4.92937 1.40253 9.25374 1.40253C13.5781 1.40253 17.0844 4.85375 17.0844 9.10938C17.0844 13.365 13.5781 16.8093 9.25374 16.8093ZM21.7855 20.7969L16.1074 15.2075C17.5938 13.5919 18.5075 11.4606 18.5075 9.10938C18.5075 4.07687 14.3646 0 9.25374 0C4.14287 0 0 4.07687 0 9.10938C0 14.135 4.14287 18.2119 9.25374 18.2119C11.462 18.2119 13.4874 17.4488 15.0783 16.1769L20.779 21.7868C21.0574 22.0618 21.5077 22.0618 21.7855 21.7868C22.0639 21.5187 22.0639 21.0719 21.7855 20.7969Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_3_10">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
              />
              
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Divider orientation="vertical" variant="middle"  />
              </Box>
              
              <Box sx={{ display: { xs: 'block', sm: 'none' }, width: '100%' }}>
                <Divider orientation="horizontal" variant="middle" sx={{ my: 1 }} />
              </Box>
              
              <FilterAutocomplete 
        filterBy={filterBy} 
        setFilterBy={setFilterBy} 
      />
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: { xs: 'center', sm: 'flex-end' },
                  width: { xs: '100%', sm: '16.667%' },
                  pr: { xs: 0, sm: 2 },
                  mt: { xs: 1, sm: 0 }
                }}
              >
                <Button 
                onClick={handleSearch}
                  sx={{
                    px: { xs: 2, md: 4 },
                    fontSize: { xs: 12, sm: 13, md: 15 },
                    fontWeight: "400",
                    width: { xs: '100%', sm: 'auto' }
                  }} 
                  variant="contained" 
                  size="medium"
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
        
        <Box 
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-end', md: 'center' },
            alignItems: { xs: 'flex-end', md: 'center' },
            width: { xs: '100%', md: '5%' },
            height: { xs: 'auto', md: 130 },
            pt: { xs: 0, md: 0 },
            pr: { xs: 2, md: 0 },
            

          }}
        >
          <ThemeToggle />
        </Box>
      </Box>
    </>
  )
}

export default Header