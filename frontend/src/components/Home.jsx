
import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCrousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import AppliedJobTable from './AppliedJobTable'

const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousel/>
      <AppliedJobTable/>
      <Footer/>
    </div>
  )
}

export default Home