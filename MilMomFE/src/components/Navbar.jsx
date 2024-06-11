import React from 'react'
import { navbarData } from '../data/data'
import { Link } from 'react-router-dom'
import MilMomBtn from './MilMomBtn'

export default function Navbar() {
  return (
    <div className='flex items-center'>
        <div className='w-1/6 flex items-center'>

        </div>
        <div className='w-3/6 flex items-center justify-evenly'>
        {navbarData.map(data => <Link to={data.link} className='block text-center text-wrap font-medium'>
        {data.content}
        </Link>)}
        </div>
        <div className='w-2/6 flex items-center justify-around'>
        <Icon icon="mdi:cart" />
        <Icon icon="tabler:bell-ringing-2-filled" />
        <MilMomBtn />
        </div>
    </div>
  )
}
