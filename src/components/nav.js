import React from "react"
import {Link} from "gatsby"
import styled from "@emotion/styled"

const NavLink = styled(Link)`
color:#fff;
font-size: 1.3rem;
font-weight: 700;
font-family: "Noto Sans JP", sans-serif;
text-decoration: none;
padding: 5px;
letter-spacing: 1px;
margin-right: 15px;
&:last-of-type{
  margin-right: 0px;
}
&.activePage{
  border-bottom: 2px solid #fff;
}
&:hover{
  color: #ecebeb;
}
`

const Nav = () =>{
  return(
    <nav>
      <NavLink 
      to={"/"}
      activeClassName="activePage"
      >Main</NavLink>
      <NavLink 
      to={"/AboutUs"}
      activeClassName="activePage"
      >About Us</NavLink>
    </nav>
  )
}

export default Nav