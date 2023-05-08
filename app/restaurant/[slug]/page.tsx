import Navbar from '@/app/components/navbar'
import Link from 'next/link'
import React from 'react'
import Header from './components/header'
import RestaurantNavBar from './components/RestaurantNavBar'
import Title from './components/title'
import Rating from './components/rating'
import Description from './components/description'
import Images from './components/images'
import Reviews from './components/reviews'
import ReservationCard from './components/reservationCard'

export default function RestuarantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>

  )
}
