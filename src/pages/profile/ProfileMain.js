import React from 'react'
import MyProfile from './profileView/MyProfile'
import OrderHistory from './profileView/OrderHistory'
import TrackOrder from './profileView/TrackOrder'

const ProfileMain = () => {
  return (
    <div>
     <MyProfile />
    <TrackOrder />
    <OrderHistory />
    </div>
  )
}

export default ProfileMain