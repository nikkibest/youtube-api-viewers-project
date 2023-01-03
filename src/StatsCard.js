import React from 'react'
import Nav from './Nav'

const StatsCard = ({sub,view,video}) => {
  return (
    <div className='container'>
      <Nav sub = {sub} />
      <div className='side right-side'>
        <span className='info'>Videos Uploaded <br/> <span className='emphasis'>{video}</span></span>
      </div>

      <div className='side left-side'>
        <span className='info'>Videos Views <br/> <span className='emphasis'>{view}</span></span>
      </div>
    </div>
  )
}

export default StatsCard