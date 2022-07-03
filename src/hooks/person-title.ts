import { getPersonName } from "../lib/people"

const usePersonNameTitle = (person: any) => {
  return `${getPersonName(person)}${
    person.fields.postNominalLetters !== ""
      ? `, ${person.fields.postNominalLetters}`
      : ""
  }`
}

export default usePersonNameTitle
