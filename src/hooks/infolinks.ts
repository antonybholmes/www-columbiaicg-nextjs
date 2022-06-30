import { useStaticQuery, graphql } from "gatsby"
import useFlattenEdges from "./flattenedges"

const useInfoLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allInfolinksJson {
        edges {
          node {
            name
            link
          }
        }
      }
    }
  `)

  return useFlattenEdges(data.allInfolinksJson.edges)
}

export default useInfoLinks
