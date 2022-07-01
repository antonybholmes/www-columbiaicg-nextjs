import React from "react"
import { FACULTY_PATH } from "../../constants"
import BlueLink from "../buttons/bluelink"
import WhiteLink from "../buttons/whitelink"
//import WhiteLink from "../whitelink"

type LinkProps = {
  person: any
  color?: string
}

const FacultyLink: React.FC<LinkProps> = ({ person, color = "blue" }) => {
  const name = `${person.frontmatter.name}${
    person.frontmatter.postNominalLetters !== ""
      ? `, ${person.frontmatter.postNominalLetters}`
      : ""
  }`

  switch (color) {
    case "white":
      return (
        <WhiteLink to={`${FACULTY_PATH}/${person.frontmatter.personId}`}>
          {name}
        </WhiteLink>
      )
    default:
      return (
        <BlueLink to={`${FACULTY_PATH}/${person.frontmatter.personId}`}>
          {name}
        </BlueLink>
      )
  }
}

export default FacultyLink
