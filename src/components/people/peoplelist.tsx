/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { IMAGEKIT_URL } from "../../constants"
import Person from "./person"

type PeopleListProps = {
  peopleList: any[]
}

const PeopleList: React.FC<PeopleListProps> = ({ peopleList }) => (
  <>
    {peopleList.map((person, index) => (
      <Person
        key={index}
        person={person}
        src={`${IMAGEKIT_URL}/people/${person.fields.personId}`}
      />
    ))}
  </>
)

export default PeopleList
