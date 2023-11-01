import React,{useContext} from 'react'
import DataContext from '../utils/DataContext'
import SearchRoom from './SearchRoom'
import {FaSignOutAlt, FaBell} from 'react-icons/fa'
const TopBar = () => {
    let {hostel} = useContext(DataContext)
  return (
    <div className='d-flex align-items-center justify-content-between px-5 bg-lighter mx-2 my-1' style={{borderRadius:100}}>
      <span>{hostel.hostelname}</span>
      <span className="d-flex align-items-center justify-content-between ">
      <SearchRoom/>
      <span className='last-div d-flex align-items-center justify-content-between'>
        <small>SignOut</small>
      <FaSignOutAlt className='last-div mx-3'/>
      </span>
      
      </span>
    </div>
  )
}

export default TopBar
