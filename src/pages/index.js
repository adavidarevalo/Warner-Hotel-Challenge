import React from "react"
import Layout from "../components/layout"
import ImageHotel from "../components/imageHotel"
import MainContent from "../components/mainContent"
import UseBedroom from "../hooks/useBedrooms"
import RoomContainer from "../components/roomContainer"
import styled from "@emotion/styled"
import {css} from "@emotion/react"

const IndexUl = styled.ul`
max-width: 1100px;
margin: 0 auto;
margin-top: 4rem;
width:95%;
@media  (min-width: 800px){
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
}
`


const IndexPage = () => {
  const roomsContainer = UseBedroom()

  return (
    <Layout>
      <ImageHotel/>
      <MainContent/>
      <h2 css={css`
        text-align: center;
        margin-top: 8rem;
        font-size: 3rem;
      `}>Our Rooms</h2>
      <IndexUl>
        {roomsContainer.map(data=>(
          <RoomContainer
          key={data.id}
          data={data}/>
        ))}
      </IndexUl>
    </Layout>
  )
}

export default IndexPage
