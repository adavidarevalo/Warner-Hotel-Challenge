import React from "react"
import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet"
import {Global, css} from "@emotion/react"
import UseSeo from "../hooks/useSeo"


const Layout = (props) =>{
  const DataContainer = UseSeo();
  const { fallbackSeo: {title, description}} = DataContainer
  return(
    <>
      <Global
      styles={css`
      html{
        font-size: 62.5%;
      }
      body{
        font-size: 1.6rem;
        line-height: 1.5;
      }
      h1, h2, h3{
        margin: 0px;
        line-height: 1.5;
      }
      h1, h2{
        font-family: "Roboto", serif;
      }
      h3{
        font-family: "Noto Sans JP", sans-serif;
      }
      ul{
        list-style: none;
        margin:0;
        padding:0;
      }
      `}
      />
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400&family=Roboto:wght@100;300;700&display=swap" rel="stylesheet"/>
    </Helmet>
    <Header/>
      {props.children}
    <Footer/>
    </>
  )
}

export default Layout