import React, { Component } from 'react'

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      Active Counters: <span className='badge badge-pill badge-secondary' />
      {totalCounters}
    </nav>
  )
}

export default NavBar
