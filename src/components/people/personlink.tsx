import React from "react"
import BlueLink from "../buttons/bluelink"
import WhiteLink from "../buttons/whitelink"
import useSiteMetadata from "../../hooks/sitemetadata"
//import WhiteLink from "../whitelink"

type PersonLinkProps = {
  person: any
  color?: string
}

const PersonLink: React.FC<PersonLinkProps> = ({ person, color }) => {
  const { paths } = useSiteMetadata()

  const name = `${person.frontmatter.name}${
    person.frontmatter.postNominalLetters !== ""
      ? `, ${person.frontmatter.postNominalLetters}`
      : ""
  }`

  switch (color) {
    case "white":
      return (
        <WhiteLink to={`${paths.peoplePath}/${person.frontmatter.personId}`}>
          {name}
        </WhiteLink>
      )
    default:
      return (
        <BlueLink to={`${paths.peoplePath}/${person.frontmatter.personId}`}>
          {name}
        </BlueLink>
      )
  }
}

PersonLink.defaultProps = {
  color: "blue",
}

export default PersonLink
