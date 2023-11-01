import React, {useContext} from 'react'
import DataContext from '../utils/DataContext'
const HostelCard = () => {
    let {hostel} = useContext(DataContext)
  return (
  <div>
    <div className="opacity-50 py-1 px-3 ">Hostel images</div>
     <div className="d-flex px-3">
    <img src={hostel.image0} alt="" style={{height:140, marginRight:5}} className='rounded'/>
    <img src={hostel.image1} alt="" style={{height:140, marginRight:5}} className='rounded'/>
   </div>
  </div>
  )
}

export default HostelCard
