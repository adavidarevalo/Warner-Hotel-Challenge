import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import {css} from "@emotion/react"
import {Link} from "gatsby"
const RoomContainerLink = styled(Link)`
text-transform: uppercase;
text-decoration: none;
font-size: 1.6rem;
color: white;
position: absolute;
bottom: 9px;
background: #ff9f19;
padding: 5px 15px;
border-radius: 2px;
font-family: "Noto Sans JP", sans-serif;
&:hover{
  background: #ce8013;
}
`


const RoomContainer = ({data}) =>{
  const {title, image, content, slug} = data
  return(
    <li css={css`
    border: 1px solid #a7a7a7;
    box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 22%);
    position: relative;
    @media  (max-width: 800px){
      margin-bottom: 20px;
    }
    `}>
      <Image fluid={image.fluid}/>
      <div css={css`
      margin-top: 3rem;
      padding: 0px 1rem;
      margin-bottom: 6rem;
      `}>
        <h2>{title}</h2>
        <p css={css`
        line-height: 3rem;
        font-family: "Noto Sans JP", sans-serif;
        `}>{content}</p>
      </div>
      <div css={css`
       display: flex;
       justify-content: center;
      `}>
        <RoomContainerLink to={slug}>See Room</RoomContainerLink>
      </div>
    </li>
  )
}

export default RoomContainer