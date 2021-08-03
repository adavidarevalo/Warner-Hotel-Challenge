

exports.createPages = async({actions, graphql, reporter})=>{
  const result = await graphql(`
    query{
    allDatoCmsBedroom{
      nodes{
        slug
      }
    }
  }
  `)
  if(result.error){
    reporter.panic("There wasn`t a Error", result.error)
  }
  const roomsContainer = result.data.allDatoCmsBedroom.nodes
  roomsContainer.forEach(info =>{
    actions.createPage({
      path: info.slug,
      component: require.resolve("./src/components/roomPageContainer.js"),
      context: {
        slug: info.slug
      }
    })
  })
}