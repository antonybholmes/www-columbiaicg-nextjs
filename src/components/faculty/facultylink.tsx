import { FACULTY_PATH } from "../../constants"
import { getPersonName } from "../../lib/people"
import BlueLink from "../buttons/bluelink"
import WhiteLink from "../buttons/whitelink"
//import WhiteLink from "../whitelink"

interface LinkProps {
  person: any
  color?: string
}

const FacultyLink = ({ person, color = "blue" }: LinkProps) => {
  const name = `${getPersonName(person)}${
    person.fields.postNominalLetters !== ""
      ? `, ${person.fields.postNominalLetters}`
      : ""
  }`

  switch (color) {
    case "white":
      return (
        <WhiteLink to={`${FACULTY_PATH}/${person.fields.personId}`}>
          {name}
        </WhiteLink>
      )
    default:
      return (
        <BlueLink to={`${FACULTY_PATH}/${person.fields.personId}`}>
          {name}
        </BlueLink>
      )
  }
}

export default FacultyLink
