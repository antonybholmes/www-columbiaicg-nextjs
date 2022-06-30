// const API = "https://api.columbiaicg.org/v1/images/people"

// const usePersonImageURL = (person: any, format: string = "jpg") => {
//   return `${API}?id=${person.frontmatter.personId}&format=${format}`
// }

const API = "https://files.columbiaicg.org/api/v5/images/people"

const usePersonImageURL = (person: any) => {
  return `${API}/${person.frontmatter.personId}.jpg`
}

export default usePersonImageURL
