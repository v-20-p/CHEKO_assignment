import React, { useCallback, useEffect, useState } from "react";

import CategoryCard from "../../components/home/CategoryCard";

import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import { Box, Divider, SvgIcon } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import MenuItem from "@/interfaces/MenuInterface";
import api from "@/config/ApiConfig";


function Categories({cart}:{ cart: MenuItem[]; }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openOrders,setOpenOrders]=useState(false)
  const filterByFromUrl = searchParams.get("filterBy") || "";

  const [filterBy, setFilterBy] = useState(filterByFromUrl);
  const handleSearch = useCallback(
    (category: string) => {
      if (category === filterBy) return;

      setFilterBy(category);

      router.push(`?filterBy=${category}`);
    },
    [filterBy, router]
  );
  const [list, setList] = useState<MenuItem[]>([]); // default to empty array

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get<MenuItem[]>("/menu");
        setList(response.data); // assuming you're using Axios
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <Box className="flex justify-center">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          mt: { xs: 4, sm: 8 },
          gap: { xs: 2, sm: 3 },
          width: { xs: "92%", sm: "83.333%" },
        }}
      >
        <Box
          onClick={() => handleSearch("Breakfast")}
          style={{ cursor: "pointer", flex: 1 ,
                  boxShadow:
            filterBy === "Breakfast" ? "0 0 6px 1px #f5cbdf" : "none",
          borderRadius: 20,}}
        >
          <CategoryCard
            color="#f5cbdf"
            name="BreakFast"
            counter={list.filter((l=>l.category=="Breakfast")).length}
            Icon={
              <BakeryDiningIcon
                sx={{ height: 24, width: 24, color: "black" }}
              />
            }
          />
        </Box>

        <Box
          onClick={() => handleSearch("Drinks")}
          style={{ cursor: "pointer", flex: 1,
            boxShadow:
            filterBy === "Drinks" ? "0 0 12px 2px #cddfed" : "none",
          borderRadius: 20,
           }}
        >
          <CategoryCard
            color="#cddfed"
            name="Drinks"
            counter={list.filter((l=>l.category=="Drinks")).length}
            Icon={
              <LocalCafeRoundedIcon
                sx={{ height: 24, width: 24, color: "black" }}
              />
            }
          />
        </Box>

        <Box
          onClick={() => handleSearch("Soups")}
          style={{ cursor: "pointer", flex: 1 ,
            boxShadow:
            filterBy === "Soups" ? "0 0 12px 2px #e7dee3" : "none",
          borderRadius: 20,
          }}
        >
          <CategoryCard
            color="#e7dee3"
            name="Soups"
            counter={list.filter((l=>l.category=="Soups")).length}
            Icon={
              <SvgIcon sx={{ height: 24, width: 24 }}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_170)">
                    <path
                      d="M7.57687 6.293C5.89187 4.609 7.28487 3.007 7.58187 2.703C6.70687 1.839 7.05187 2.182 6.16287 1.293C4.87387 2.582 3.81087 5.354 6.16287 7.706L7.57687 6.293Z"
                      fill="black"
                    />
                    <path
                      d="M9.27394 5.293L10.6879 6.706C12.6739 4.72 11.7769 2.38 10.6879 1.293L9.26794 2.701C9.56794 3.011 10.4529 4.113 9.27394 5.293Z"
                      fill="black"
                    />
                    <path
                      d="M21.8689 12H3.8689C3.3159 12 2.8689 12.448 2.8689 13C2.8689 18.515 7.3549 23 12.8689 23C18.3829 23 22.8689 18.515 22.8689 13C22.8689 12.448 22.4219 12 21.8689 12Z"
                      fill="black"
                    />
                    <path
                      d="M19.8699 2.99999C18.2629 2.19599 14.7189 8.49599 13.3889 11H18.3429C19.3349 8.82999 21.4339 3.78299 19.8699 2.99999Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_170">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.868896)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </SvgIcon>
            }
          />
        </Box>
        <Box
          onClick={() => handleSearch("Sushi")}
          style={{ cursor: "pointer", flex: 1,
            boxShadow:
            filterBy === "Sushi" ? "0 0 12px 2px #d1d0ef" : "none",
          borderRadius: 20,
           }}
        >
          <CategoryCard
            color="#d1d0ef"
            name="Sushi"
            counter={list.filter((l=>l.category=="Sushi")).length}
            Icon={
              <SvgIcon sx={{ height: 24, width: 24 }}>
                <svg
                  width="35"
                  height="34"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_179)">
                    <path
                      d="M16.6466 6H8.64661C3.90061 6 2.64661 11.233 2.64661 14C2.64661 14.404 2.89061 14.768 3.26261 14.922C3.91761 15.196 4.19161 14.831 4.64661 14.442V15C4.64661 16.654 5.99261 18 7.64661 18H17.6466C19.3006 18 20.6466 16.654 20.6466 15V14.442C21.0916 14.823 21.3826 15.192 22.0306 14.922C22.4026 14.768 22.6466 14.404 22.6466 14C22.6466 11.233 21.3926 6 16.6466 6ZM20.3776 11.81C19.5906 11.368 18.6386 11 17.6466 11H17.1246L18.1816 8.358C19.4686 9.028 20.0846 10.525 20.3776 11.81ZM10.3246 8H12.1696L10.9696 11H9.12461L10.3246 8ZM14.3246 8H16.1696L14.9696 11H13.1246L14.3246 8ZM8.14661 8.057L6.94461 11.061C6.20961 11.182 5.51361 11.473 4.91561 11.81C5.27761 10.224 6.14461 8.336 8.14661 8.057ZM18.6466 15C18.6466 15.551 18.1976 16 17.6466 16H7.64661C7.09561 16 6.64661 15.551 6.64661 15V13.204C6.98061 13.079 7.32161 13 7.64661 13H17.6466C17.9716 13 18.3126 13.079 18.6466 13.204V15Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_179">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.646606)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </SvgIcon>
            }
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Divider orientation="vertical" variant="middle" flexItem />
        </Box>

        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            width: "100%",
          }}
        >
          <Divider orientation="horizontal" variant="middle" sx={{ my: 1 }} />
        </Box>
        <Box
          onClick={() => setOpenOrders(!openOrders)}
          style={{ cursor: "pointer", flex: 1 ,
            boxShadow:
            openOrders ? "0 0 12px 2px #d0e9e3" : "none",
          borderRadius: 20,
          }}>

        
        <CategoryCard
          color="#d0e9e3"
          name="Orders"
          openOrders={openOrders}
          counter={cart.reduce((sum,c)=>sum+(c.counter||0),0)}
          Icon={
            <>
         
            <SvgIcon sx={{ height: 24, width: 24 }}>
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3_137)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4387 6C16.6721 6 15.9991 5.27925 15.9991 4.5V1.52325V1.52175L19.598 6H17.4387ZM15.9991 12.012H9.52129C9.12399 12.012 8.80153 11.676 8.80153 11.2627C8.80153 10.8487 9.12399 10.5135 9.52129 10.5135H15.9991C16.3965 10.5135 16.7189 10.8487 16.7189 11.2627C16.7189 11.676 16.3965 12.012 15.9991 12.012ZM15.9991 15.7583H9.52129C9.12399 15.7583 8.80153 15.4223 8.80153 15.009C8.80153 14.595 9.12399 14.2598 9.52129 14.2598H15.9991C16.3965 14.2598 16.7189 14.595 16.7189 15.009C16.7189 15.4223 16.3965 15.7583 15.9991 15.7583ZM14.5596 22.5H3.7632C3.00745 22.5 2.32368 21.7642 2.32368 21V6C2.32368 4.88475 3.20467 4.5 4.48296 4.5V18C4.48296 19.5443 5.83899 21 7.36201 21C7.36201 21 15.1657 20.9917 16.0056 20.9917C16.0056 21.9015 15.4327 22.5 14.5596 22.5ZM15.9991 0.0232487C15.9099 0.0232487 7.36201 0 7.36201 0C5.83899 0 4.48296 1.45575 4.48296 3L3.65164 3.02025C2.12862 3.02025 0.884155 4.45575 0.884155 6V21C0.884155 22.5443 2.24019 24 3.7632 24H14.5596C16.0826 24 17.4387 22.5443 17.4387 21H18.1584C19.6814 21 21.0375 19.5443 21.0375 18V6.01725L15.9991 0.0232487Z"
                    fill="#111216"
                    />
                </g>
                <defs>
                  <clipPath id="clip0_3_137">
                    <rect
                      width="20.1533"
                      height="24"
                      fill="white"
                      transform="translate(0.884155)"
                      />
                  </clipPath>
                </defs>
              </svg>
              
            </SvgIcon>

            </>
          }
        />

          </Box>
      </Box>
    </Box>
  );
}

export default Categories;
