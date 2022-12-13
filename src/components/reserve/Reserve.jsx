import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './reserve.css'

const reserve = ({setOpen,hotelId}) => {
    return (
        <div className='reserve'>
            <div className='rContainer'>
                <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)} />
            </div>
            <span className=''>Select your rooms: </span>
        </div>
    )
}

export default reserve