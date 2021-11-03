import React from "react"
import {css} from "@emotion/react"
import {Link} from "gatsby"
import Nav from "./nav"
import styled from "@emotion/styled"
import {keyframes} from "@emotion/react"

const HeaderLink = styled(Link)`
color:#fff;
text-decoration: none;
font-size: 3rem;
font-family: "Roboto", serif;
font-weight: 700;
letter-spacing: 2px;
width: 294px;
&:hover{
  color: #ecebeb;
}
@media (max-width:500px){
  width: 100%;
  text-align: center;
}
`
const fadeInDown = keyframes`
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
`
const Header = () =>{
  return(
    <header css={css`
    background: #ff9f19;
    padding: 1rem;
    `}>
      <div css={css`
      max-width: 90%;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      animation: ${fadeInDown} 1s both;
      @media (max-width:500px){
        justify-content: center;
      }
      `}>
        <HeaderLink 
        to={"/"}
        >Wagner Hotel</HeaderLink>
        <Nav/>
      </div>
    </header>
  )
}

export default Header