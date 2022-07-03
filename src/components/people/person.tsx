/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import ContactInfo from "./contactinfo"
import BlueLink from "../buttons/bluelink"
import { personUrl } from "../../utils/urls"
import { personName } from "../../utils/personname"
import Row from "../row"
import BaseImage from "../images/base-image"

type PersonProps = {
  person?: any
  src?: any
  generic?: string
}

const Person = ({ person, src, generic }: PersonProps) => {
  let im: any = null

  if (src) {
    im = (
      <BaseImage
        src={src}
        className="w-full shadow rounded"
        alt={person.fields.title}
      />
    )
  } else if (generic) {
    im = (
      <BaseImage
        src={generic}
        className="w-full shadow rounded"
        alt={person.fields.title}
      />
    )
  }

  return (
    <div className="w-full mb-6">
      <Row>
        <Row w="w-2/12" className="mr-8">
          {im && im}
        </Row>
        <Row w="w-10/12">
          <div className="w-full">
            <h1>
              <BlueLink to={personUrl(person)}>{personName(person)}</BlueLink>
            </h1>

            <h2 className="gray mb-2">{person.fields.title}</h2>

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

                <div className="gray mb-4">{person.fields.title}</div>
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

export default Person
