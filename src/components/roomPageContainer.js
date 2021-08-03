
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import {css} from "@emotion/react"
import styled from "@emotion/styled"

const RoomPageMain = styled.main`
max-width: 1100px;
margin: 0 auto;
margin-top: 5rem;
width:95%;
p{
  line-height: 4rem;
  font-family: "Noto Sans JP", sans-serif;
}
`

export const query = graphql`
    query($slug: String!){
        allDatoCmsBedroom(filter:{slug: {eq: $slug}}){
          nodes{
            title
            content
            image {
              fluid(maxWidth: 1200){
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `
const RoomPageContainer = ({data}) =>{
    const {title, content, image} = data.allDatoCmsBedroom.nodes[0]
    return(
        <Layout>
          <RoomPageMain>
              <h1 css={css`
              text-align: center;
              `}>{title}</h1>
              <p>{content}</p>
              <Image
                fluid={image.fluid}
              />
          </RoomPageMain>
        </Layout>
    )
}

export default RoomPageContainer