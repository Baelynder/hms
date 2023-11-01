import React from 'react'
import {FaHome, FaHotel, FaUpload, FaRestroom, FaReply} from 'react-icons/fa'
const Navigation = () => {
  return (
    <div className='topbar d-flex flex-column align-items-center bg-lighter'>
      <div className="image d-flex flex-column align-items-center justify-content-center my-4"><img src="../public/logo.png" alt=""/></div>
      <div className="icon text-center custom-shadow w-75 my-2 d-flex flex-column align-items-center justify-content-center py-3">
    <FaHome/>
    <small>Home page</small>
      </div>
      <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" className="icon text-center custom-shadow w-75 my-2 d-flex flex-column align-items-center justify-content-center py-3">
    <FaUpload/>
    <small>Upload Room</small>
      </div>
      <div className="icon text-center custom-shadow w-75 my-2 d-flex flex-column align-items-center justify-content-center py-3">
    <FaRestroom/>
    <small>All Rooms</small>
      </div>
      <div className="icon text-center  custom-shadow w-75 my-2 d-flex flex-column align-items-center justify-content-center py-3">
    <FaReply/>
    <small>Feedback</small>
      </div>
    </div>
  )
}

export default Navigation
