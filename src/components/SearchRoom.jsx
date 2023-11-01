import React from 'react'
import {FaSearch} from 'react-icons/fa'
const SearchRoom = () => {
  return (
    <div className='search-room w-100 mx-2 opacity-50 d-flex justify-content-between align-items-center py-2 px-4' style={{backgroundColor:'#F9F9F9'}}>
      <input type="text" />
      <FaSearch/>
    </div>
  )
}

export default SearchRoom
