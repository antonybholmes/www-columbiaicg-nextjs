import { PEOPLE_PATH } from "../../constants"
import BlueLink from "../buttons/bluelink"
import WhiteLink from "../buttons/whitelink"

type PersonLinkProps = {
  person: any
  color?: string
}

const PersonLink = ({ person, color = "blue" }: PersonLinkProps) => {
  const name = `${person.fields.firstName} ${person.fields.lastName}${
    person.fields.postNominalLetters !== ""
      ? `, ${person.fields.postNominalLetters}`
      : ""
  }`

  switch (color) {
    case "white":
      return (
        <WhiteLink to={`${PEOPLE_PATH}/${person.fields.personId}`}>
          {name}
        </WhiteLink>
      )
    default:
      return (
        <BlueLink to={`${PEOPLE_PATH}/${person.fields.personId}`}>
          {name}
        </BlueLink>
      )
  }
}

export default PersonLink
