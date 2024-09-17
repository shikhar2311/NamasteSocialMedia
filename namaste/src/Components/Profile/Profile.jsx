import React from 'react'
import './Profile.css'

import Following from './Following/Following.jsx'
import ProfileCard from '../Profile/Profile_Card/Profile_card.jsx'
import Search from './Search/Search'

const Profile = ({ ProfilePage, user }) => {
  return (
    <div className='profile'>
      <Search/>
      <ProfileCard ProfilePage={ProfilePage}/>
      <Following user={user} />
    </div>
  )
}

export default Profile