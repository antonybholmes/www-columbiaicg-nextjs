const flattenEdges = (edges: Array<any>): Array<any> => {
  let ret: Array<any> = []

  edges.forEach(({ node }) => {
    ret.push(node)
  })

  return ret
}

export default flattenEdges
