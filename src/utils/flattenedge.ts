const flattenEdges = (edges: any[]): any[] => {
  let ret: any[] = []

  edges.forEach(({ node }) => {
    ret.push(node)
  })

  return ret
}

export default flattenEdges
