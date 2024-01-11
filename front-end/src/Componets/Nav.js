import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <ul className='nav-li'>
        <li><Link to={"/product"}>Products</Link></li>
        <li><Link to={"/addproducts"}>Add Products</Link></li>
        <li><Link to={"/updateproduct"}>Update Product</Link></li>
        <li><Link to={"/logout"}>Logout</Link></li>
        <li><Link to={"/profile"}>Profile</Link></li>
        <li><Link to={"/singUp"}>singUp</Link></li>
      </ul>
    </>
  )
}

export default Nav
