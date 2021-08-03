
import {graphql, useStaticQuery} from "gatsby"

const UseBedroom = () =>{
  const data = useStaticQuery(graphql`
    query{
    allDatoCmsBedroom{
      nodes{
        title
        content
        id
        slug
        image {
          fluid(maxWidth: 1200){
            ...GatsbyDatoCmsFluid
          }
        } 
      }
    }
  }
  `)

  return data.allDatoCmsBedroom.nodes
}

export default UseBedroom