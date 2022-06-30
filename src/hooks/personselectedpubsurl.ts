import useSiteMetadata from "./sitemetadata"
import usePersonPubsUrl from "./personpubsurl"

const usePersonSelectedPubsUrl = (person: any): string => {
  if (person === null) {
    return ""
  }

  const { api } = useSiteMetadata()

  return `${usePersonPubsUrl(person)}/selected`
}

export default usePersonSelectedPubsUrl
