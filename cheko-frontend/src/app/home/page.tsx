"use client"
// import Image from "next/image";
import { Box, Divider } from '@mui/material';

import { Typography } from '@mui/material';
import MenuCard from '../../components/home/MenuCard';
import { useAppSelector } from '@/store/store';
import Categories from '@/components/home/Categories';
import MenuCardSkeleton from '@/components/home/SkeletonCard';
import { useSearchParams } from 'next/navigation';


export default function Home() {
  const { items, loading, error,cart } = useAppSelector((state) => state.menu);
  const searchParams = useSearchParams();
  const filterByFromUrl = searchParams.get('filterBy') ||""


  return (
    <>

      <Categories cart={cart}/>

      <Box
        sx={{
          width: { xs: '92%', sm: '83.333%' },
          margin: 'auto',
          display: 'flex',
          my: 4,
          alignItems: 'middle',
          gap: 3
        }}
      >
        <Typography
          sx={{
            flex: { xs: '100%', sm: 1 },
            fontSize: { xs: 22, sm: 28 }
          }}

          fontWeight="600"

        >
          {filterByFromUrl||"All"}
        </Typography>

        <Box sx={{
          display: { xs: 'none', sm: 'block' },
          flex: 10
        }}>
          <Divider
            sx={{
              alignSelf: "end",
              mt: 4,
              borderRadius: 1
            }}
          />
        </Box>
      </Box>

      {error ? (
  <p className='m-auto'>❌ {error}</p>
) : items.length === 0 ? (
  <p className='m-auto'>📭 No menu items found.</p>
) : (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)'
      },
      gap: { xs: 3, sm: 3 },
      width: { xs: '92%', sm: '83.333%' },
      mx: 'auto'
    }}
  >
    {loading
      ? Array.from({ length: 12 }).map((_, index) => (
          <MenuCardSkeleton key={index} />
        ))
      : items.map(item => (
          <MenuCard key={item.id} item={item} cart={cart.find((c)=>c.id==item.id)} />
        ))}
  </Box>
)}
    </>
  );
}