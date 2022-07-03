const API = "https://files.columbiaicg.org/api/v5/images/faculty/header"

const useFacultyHeaderImageURL = (person: any, format: string = "jpg") => {
  return `${API}/${person.fields.personId}.jpg`
}

export default useFacultyHeaderImageURL
