
import {graphql, useStaticQuery} from "gatsby"

const UseSeo = () =>{
    const dataContainer = useStaticQuery(graphql`
    query{
        datoCmsSite {
          globalSeo{
            siteName
            fallbackSeo{
              title
              description
              image{
                fluid(maxWidth: 1200){
                    ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `)
    return dataContainer.datoCmsSite.globalSeo
}

export default UseSeo