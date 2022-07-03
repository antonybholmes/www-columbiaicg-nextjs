/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Person from "./person"

type PeopleListProps = {
  peopleList: Array<any>
  showLabLink?: boolean
  imageMap?: any
}

const PeopleList: React.FC<PeopleListProps> = ({
  peopleList,
  showLabLink,
  imageMap,
}) => (
  <>
    {peopleList.map((person, index) => (
      <Person
        key={index}
        person={person}
        image={
          person.fields.personId in imageMap
            ? imageMap[person.fields.personId]
            : null
        }
        generic={imageMap["generic"]}
      />
    ))}
  </>
)

PeopleList.defaultProps = {
  showLabLink: true,
  imageMap: {},
}

export default PeopleList
