import { useEffect, useState } from "react"

import getPublications from "../../hooks/publications"
import PublicationsPage from "../../components/pages/publications-page"
import PageLayout from "../../layouts/pagelayout"
import { PUBLICATIONS_PATH } from "../../constants"

const Page = () => {
  const [publications, setPublications] = useState<any[]>([])

  useEffect(() => {
    getPublications(setPublications)
  }, [])

  return (
    <PageLayout
      title={"Publications"}
      path={"/research-areas/publications"}
      crumbs={[["Publications", PUBLICATIONS_PATH]]}
      nav={"Publications"}
    >
      <PublicationsPage publications={publications} />
    </PageLayout>
  )
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
