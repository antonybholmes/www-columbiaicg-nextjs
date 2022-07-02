import { useEffect, useState } from "react"

import usePublications from "../../hooks/publications"
import PublicationsPage from "../../components/pages/publications-page"

const Page = () => {
  const [publications, setPublications] = useState<any[]>([])

  useEffect(() => {
    usePublications(setPublications)
  }, [])

  return <PublicationsPage publications={publications} />
}

export default Page

// type Params = {
//   params: {
//     slug: string
//   }
// }

// export async function getStaticProps({ params }: Params) {
//   const pubs = getPublicationsBySlug("all")

//   return {
//     props: {
//       pubs:pubs,
//     },
//   }
// }
