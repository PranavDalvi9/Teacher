import React from 'react'
import "./myApp.css"
import ProfileDetails from './ProfileDetails'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <div className='Home'>
        <div className='sideBar'><ProfileDetails/></div>
        <div className='toDo'>ToDo</div>
        <div className='inProgress'>Inprogress</div>
        <div className='done'>Done</div>
      </div>
    </div>
  )
}
