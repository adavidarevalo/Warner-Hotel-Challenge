import React from "react"
import {css} from "@emotion/react"
import {Link} from "gatsby"
import Nav from "./nav"
import styled from "@emotion/styled"

const HeaderLink = styled(Link)`
color:#fff;
text-decoration: none;
font-size: 2rem;
font-family: "Roboto", serif;
font-weight: 700;
letter-spacing: 2px;
&:hover{
    color: #ecebeb;
  }
@media (max-width:500px){
    width: 100%;
    text-align: center;
  }
`

const Footer = () =>{
    const year = new Date().getFullYear()
  return(
    <>
      <footer css={css`
      background: #161616;
      padding: 1rem;
      margin-top: 5rem;
      `}>
        <div css={css`
        max-width: 90%;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        @media (max-width:500px){
          justify-content: center;
        }
        `}>
          <Nav/>
          <HeaderLink 
          to={"/"}
          >Wagner Hotel</HeaderLink>
        </div>
      </footer>
      <p css={css`
      font-family: "Roboto", serif;
      text-align: center;
      margin: 0px;
      background: #161616;
      color:#fff;
      padding-bottom: 1rem;
      font-size: 1.4rem;
      `}>Wagner Hotel All rights reserved {year}&copy;</p>
    </>
  )
}

export default Footer