import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import {keyframes} from "@emotion/react"
const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

const ImageBackground = styled(BackgroundImage)`
min-height: 95vh;
`
const TextContainer = styled.div`
background: rgb(14 14 14 / 57%);
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
min-height: 95vh;
h1, p{
  color:white;
  animation: ${fadeIn} 1s both;
}
h1{
  text-align: center;
  font-size: 3rem;
}
p{
  font-size: 1.8rem;
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
}
@media  (min-width: 750px){
  h1{
    font-size:5rem;
  }
  p{
    font-size:2.1rem;
  }
}
`

const ImageHotel = () =>{
  const {image} = useStaticQuery(graphql`
     query{
     image: file(relativePath: {eq: "1.jpg"}){
       sharp: childImageSharp{
         fluid{
           srcSet
         }
       }
     }
   }
  `)
  return(
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextContainer>
        <h1>Welcome to Wagner Hotel</h1>
        <p>The best hotel for your holidays</p>
      </TextContainer>
    </ImageBackground>
  )
}

export default ImageHotel
