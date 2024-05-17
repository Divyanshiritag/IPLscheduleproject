import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import InPageNavigation from './InPageNavigation'

function Navbar() {
  return (
   
      <div className='w-full min-h-screen mx-auto bg-gray-900 text-white '>
      {/* <div className='flex gap-1'> */}
      <InPageNavigation teams={[{title: "MATCHES", path: "/"},{title: "NEWS", path: "/news"},{title: "TABLE", path: "/pointsTable"}]}>

      </InPageNavigation>
        {/* <Link to={'/'}><h1>MATCHES</h1></Link>
        <Link to={'/pointsTable'}><h1>TABLE</h1></Link> */}

      {/* </div> */}
      <Outlet/>
      </div>
   
  )
}

export default Navbar
