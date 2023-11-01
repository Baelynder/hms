import React, {useContext} from 'react'
import{FaPhone, FaEnvelope} from 'react-icons/fa'
import DataContext from '../utils/DataContext'
import { motion } from 'framer-motion'
const Profile = () => {
    let {manager} = useContext(DataContext)
  return (
    <motion.div  drag transition={{repeat:Infinity}} className=' d-flex flex-column align-items-center justify-content-between py-5 profile bg-lighter rounded'>
      <div className="profile-image d-flex align-items-center justify-content-center">
      <img src={manager.image} alt="" />
      </div>
      <small>{manager.name}</small>
      <small className='text-secondary'><FaPhone className='mx-2 purple'/>{manager.contact}</small>
      <small className='text-secondary'><FaEnvelope className='mx-2 purple'/>{manager.email}</small>
    </motion.div>
  )
}

export default Profile
