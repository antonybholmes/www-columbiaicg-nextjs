const toImageMap = (images: any) => {
  let ret: any = {}

  images.edges.map(({ node }) => {
    ret[node.name] = node
  })

  return ret
}

export default toImageMap
