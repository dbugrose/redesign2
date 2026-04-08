import Calendar from '@/app/components/Calendar'
import Footer from '@/app/components/Footer'
import GuestArtisans from '@/app/components/GuestArtisans'
import MarketDays from '@/app/components/MarketDays'
import NavComponent from '@/app/components/NavComponent'
import Values from '@/app/components/Values'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavComponent/>
       <MarketDays/> 
       <GuestArtisans/>
       <Calendar/>
       <Values/>
       <Footer/>
    </div>
  )
}

export default page