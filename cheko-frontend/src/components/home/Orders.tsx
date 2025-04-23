import {  useAppSelector } from '@/store/store'
import { Button, Divider, Typography } from '@mui/material'
import React from 'react'

function Orders() {
    const {cart}=useAppSelector((state)=>state.menu)

    const fullPrice = cart.reduce((sum, c) => {
        return sum + ((c?.price || 0) * (c?.counter || 0));
      }, 0);

      const tax=0.0415*fullPrice
      const total=fullPrice+tax

      




  return (
    <>
    <div className='bg-[#111216] rounded-2xl p-2 '>

    <div className='flex justify-between  '><Typography color='gray'>Subtotal</Typography><Typography color='gray'>{fullPrice}</Typography></div>
    <div className='flex justify-between '><Typography color='gray'>Tax</Typography><Typography color='gray'>{tax.toFixed(2)}</Typography></div>

    <Divider   sx={{my:2,borderTop:"dotted 2px lightgray"}}/>
    <div className='flex justify-between mb-4 '><Typography color='white'>Total</Typography><Typography color='white'>{total}</Typography></div>
    
    <Button variant='contained' sx={{borderRadius:10}} className=' w-full '  >Place Order</Button>
    </div>
    </>
  )
}

export default Orders