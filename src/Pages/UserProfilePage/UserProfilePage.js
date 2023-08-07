import React from 'react'
import UserProfile from '../../Components/UserProfile/UserProfile'
import TopNav_student from '../../Components/TopNav-student-portal/TopNav_student';


const UserProfilePage = () => {
  return (
    <div>
      <TopNav_student/>
      <UserProfile />
    </div>
  )
}
export default UserProfilePage;
