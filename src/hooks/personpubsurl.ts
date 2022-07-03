import useSiteMetadata from "./sitemetadata"

const usePersonPubsUrl = (person: any): string => {
  if (person === null) {
    return ""
  }

  const { api } = useSiteMetadata()

  return `${api.publications}/${person.fields.personId}`
}

export default usePersonPubsUrl
