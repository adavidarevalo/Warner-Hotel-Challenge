import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Image from "gatsby-image"
import {css} from "@emotion/react"
import styled from "@emotion/styled"

const MainContentDiv = styled.div`
max-width: 1100px;
margin: 0 auto;
margin-top: 4rem;
width:95%;
p{
  line-height: 4rem;
  font-family: "Noto Sans JP", sans-serif;
}
@media  (min-width: 800px){
  display:grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
}
`

const MainContent = () => {
  const container = useStaticQuery(graphql`
      query{
      allDatoCmsPage(filter: {slug: {eq: "main"}}){
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
      <MainContentDiv>
        <p>{content}</p>
        <Image fluid={image.fluid}/>
      </MainContentDiv>
    </>
  )
}

export default MainContent