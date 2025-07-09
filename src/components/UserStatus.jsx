import React from 'react'

const UserStatus = ({isloggedIn , isAdmin}) => {
  return (
    <>
    {
        isloggedIn && isAdmin && (
            <h1>Welcome Admin!</h1>
        )}
    {
        isloggedIn && !isAdmin && (
            <h1>Welcome User!</h1>
        )
    }
    </>
  )
}

export default UserStatus