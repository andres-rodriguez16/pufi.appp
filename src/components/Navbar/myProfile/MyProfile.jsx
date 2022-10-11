import React from 'react'
import { FiChevronDown} from "react-icons/fi";


function MyProfile() {
  return (
    <div className="container">
      <p>MI CUENTA   <FiChevronDown style={{color: "white", fontSize: 15, }}/></p> 
      <p className='p__miCuanta'>MI COMPRA</p> 
    </div>
  )
}

export default MyProfile