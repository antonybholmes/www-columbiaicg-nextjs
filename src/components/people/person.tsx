/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import ContactInfo from "./contactinfo"
import BlueLink from "../buttons/bluelink"
import { personUrl } from "../../utils/urls"
import { personName } from "../../utils/personname"
import Row from "../row"
import BaseImage from "../images/baseimage"

type PersonProps = {
  person?: any
  image?: any
  generic?: any
}

const Person: React.FC<PersonProps> = ({ person, image, generic }) => {
  let im: any

  if (image !== null) {
    im = (
      <BaseImage
        image={image}
        className="w-full shadow rounded"
        alt={person.frontmatter.title}
      />
    )
  } else {
    im = (
      <BaseImage
        image={generic}
        className="w-full shadow rounded"
        alt={person.frontmatter.title}
      />
    )
  }

  return (
    <div className="w-full mb-6">
      <Row>
        <Row w="w-2/12" className="mr-8">
          {im !== null && im}
        </Row>
        <Row w="w-10/12">
          <div className="w-full">
            <h1>
              <BlueLink to={personUrl(person)}>{personName(person)}</BlueLink>
            </h1>

            <h2 className="gray mb-2">{person.frontmatter.title}</h2>

            <ContactInfo person={person} />
          </div>

          {/* <Row>
            <Row w={6}>
              <div>
                <h3>
                  <BlueLink to={personUrl(person)}>
                    {personName(person)}
                  </BlueLink>
                </h3>

                <div className="gray mb-4">{person.frontmatter.title}</div>
              </div>
            </Row>
            <Row w={6}>
            <FlatCard>
              <ContactInfo person={person} />
              </FlatCard>
            </Row>
          </Row> */}
        </Row>
      </Row>
    </div>
  )
}

Person.defaultProps = {
  image: null,
  generic: null,
}

export default Person
