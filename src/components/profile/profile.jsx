import React from 'react'

function Profile() {
  return (
    <>
    profile
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
        <li>
          <a className="dropdown-item" href="#">My profile</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Settings</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Logout</a>
        </li>
      </ul>
    </>
  )
}

export default Profile