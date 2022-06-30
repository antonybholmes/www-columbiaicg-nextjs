import { useStaticQuery, graphql } from "gatsby"
import useFlattenEdges from "./flattenedges"

const useHeaderLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allHeaderlinksJson {
        edges {
          node {
            name
            link
          }
        }
      }
    }
  `)

  return useFlattenEdges(data.allHeaderlinksJson.edges)
}

export default useHeaderLinks
