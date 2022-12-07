import React from 'react'
import {AiOutlineBarChart, AiOutlineFolderView} from 'react-icons/ai'
// This line will import react-icons - Library downloaded from https://react-icons.github.io/react-icons

const Nav = ({sub}) => {
  return (
    <>
    <AiOutlineBarChart className='icon bar-icon'/>
    <AiOutlineFolderView className = 'icon folder-icon'/>
    <div className = 'title'>YouTube Data Api using React</div>
    <span className='subscribeCount'>Subscribers <br/><span className='emphasis'>{sub}</span></span>
    </> // this empty tag in react is called a fragment
  )
}

export default Nav