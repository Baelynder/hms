import React, {useContext} from 'react'
import DataContext from '../utils/DataContext'
const BookingStatistics = () => {
    let {rooms} = useContext(DataContext)
  return (
    <div className='px-3 py-3'>
      <p>Accomodation</p>
      <div className='d-flex align-items-center '>
      <div className="statistics p-2 rounded">
        <small>Total</small>
        <p>{rooms.length}</p>
      </div>
      <div className="statistics p-2 rounded">
        <small>Fully Booked</small>
        <p>{(rooms.filter(room=>room.capacity-room.occupants === 0)).length}</p>
      </div>
      <div className="statistics p-2 rounded">
        <small>Partially</small>
        <p>{(rooms.filter(room=>room.capacity-room.occupants !== 0 && room.occupants !==0)).length}</p>
      </div>
      <div className="statistics p-2 rounded">
        <small>Empty</small>
        <p>{(rooms.filter(room=>room.occupants === 0)).length}</p>
      </div>
      </div>
    </div>
  )
}

export default BookingStatistics
