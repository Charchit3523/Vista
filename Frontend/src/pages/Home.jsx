import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Image from '../components/Image'


function Home() {
  return (
    <div>
      <Image/>
      <LatestCollection/>
      <BestSeller/>
      
      <OurPolicy/>
    </div>
  )
}

export default Home
