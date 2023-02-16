import React from 'react'
import JobCard from './JobCard'
import OpeningCard from './OpeningCard'
import Sort from './Sort'

const Openings = () => {
  return (
    <div className='openings' id='openings'>
        <Sort />
        <h2>Job Openings @ Manipal</h2>
        <OpeningCard />
    </div>
  )
}

export default Openings