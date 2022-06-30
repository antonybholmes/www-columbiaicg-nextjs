import { useStaticQuery, graphql } from "gatsby"
import useFlattenEdges from "./flattenedges"

const useFooterLinks2 = () => {
  const data = useStaticQuery(graphql`
    query {
      allFooterlinks2Json {
        edges {
          node {
            name
            link
          }
        }
      }
    }
  `)

  return useFlattenEdges(data.allFooterlinks2Json.edges)
}

export default useFooterLinks2
