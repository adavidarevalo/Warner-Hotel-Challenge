import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Image from "gatsby-image"
import {css} from "@emotion/react"
import styled from "@emotion/styled"

const AboutUsDiv = styled.div`
max-width: 1100px;
margin: 0 auto;
margin-top: 5rem;
width:95%;
p{
  line-height: 4rem;
  font-family: "Noto Sans JP", sans-serif;
}
@media  (min-width: 800px){
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}
`

const AboutUsContent =() =>{
  const container = useStaticQuery(graphql`
  query{
  allDatoCmsPage(filter: {slug: {eq: "AboutUs"}}){
    nodes{
      title
      content
      image {
        fluid{
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
  }
  `)
  const {title, content, image} = container.allDatoCmsPage.nodes[0]
  return(
    <>
      <h2 css={css`
      margin-top: 5rem;
      text-align: center;
      font-size: 4rem;
      `}>{title}</h2>
      <AboutUsDiv>
        <p>{content}</p>
        <Image fluid={image.fluid}/>
      </AboutUsDiv>
    </>    
  )
}

export default AboutUsContent