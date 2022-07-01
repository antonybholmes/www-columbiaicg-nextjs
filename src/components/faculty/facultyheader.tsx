import React from "react"
import ContactInfo from "../people/contactinfo"

import useContextName from "../../hooks/contextname"
import HideSmall from "../hidesmall"
import Row from "../row"
import ShowSmall from "../showsmall"

type FacultyHeaderProps = {
  person?: any
  title?: string
  heading?: string
  subHeading?: string
  headshot?: any
}

const FacultyHeader: React.FC<FacultyHeaderProps> = ({
  person,
  title,
  heading,
  subHeading,
  headshot,
}) => {
  if (heading === null) {
    heading = `${person.frontmatter.name}, ${person.frontmatter.postNominalLetters}`
  }

  if (subHeading === null) {
    subHeading = useContextName("people", person.titleMap) //`${person.frontmatter.title}`
  }

  return (
    <div className="relative bg-cuimc-blue">
      <div
        className="absolute ml-4 md:ml-20 xl:ml-32 2xl:ml-40 3xl:ml-56"
        style={{ transform: "translateY(-21rem)" }}
      >
        {headshot}
      </div>

      <Row size="lg" className="justify-between">
        {/* 
        <div className="w-96 h-96" >
            {headshot}
          </div> */}

        <Row
          isVCentered={true}
          w="w-6/10"
          className="text-white-99 pt-16 pb-4 ml-4 md:ml-20 xl:ml-32 2xl:ml-40 3xl:ml-56"
        >
          {/* <TitleDiv title={title} heading={heading} subHeading={subHeading} /> */}

          <div>
            {title !== "" && <h5 className="uppercase">{title}</h5>}
            {heading !== "" && <h1>{heading}</h1>}
            {subHeading !== "" && <h3>{subHeading}</h3>}
          </div>
        </Row>

        <ShowSmall
          className="mx-4 md:px-20 xl:px-32 2xl:px-40 3xl:px-56 py-4 text-lg"
          size="lg"
        >
          <ContactInfo person={person} color="white" showIcons={true} />
        </ShowSmall>

        <HideSmall
          className="w-full md:w-7/10 lg:w-6/10 xl:w-5/10 2xl:w-4/10 text-lg py-6 pr-4 md:pr-20 xl:pr-32 2xl:pr-40 3xl:pr-56 bg-white-10"
          style={{
            clipPath: "polygon(5rem 0, 0 100%, 100% 100%, 100% 0)",
          }}
          size="lg"
        >
          <Row isVCentered={true} className="lg:justify-end">
            <ContactInfo person={person} color="white" showIcons={true} />
          </Row>
        </HideSmall>
      </Row>
    </div>
  )
}

FacultyHeader.defaultProps = {
  title: "",
  heading: null,
  subHeading: null,
}

export default FacultyHeader
