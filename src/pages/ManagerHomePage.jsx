import React from 'react'
import Navigation from '../components/Navigation'
import TopBar from '../components/TopBar'
import Profile from '../components/Profile'
import BookingStatistics from '../components/BookingStatistics'
import HostelCard from '../components/HostelCard'
import AddRoom from '../components/AddRoom'
const ManagerHomePage = () => {
  return (
    <>
    <div className='home-page'>
        <Navigation/>
        <TopBar/>
      <Profile/>
      <div className='bg-pale-purple rounded py-4'>
        <BookingStatistics/>
        <HostelCard/>
      </div>
      
      <div className='bg-lighter'></div>
    </div>
    <AddRoom/> 
    </>
  )
}

export default ManagerHomePage
