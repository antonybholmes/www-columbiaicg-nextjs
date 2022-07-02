import React, { useRef } from "react"
import useContextName from "../../hooks/contextname"
import HeadShot from "./headshot"
import Row from "../row"
import usePersonName from "../../hooks/personname"

type PersonHeaderProps = {
  person: any
  faculty?: any
  imageMap: any
  showImage?: boolean
  style?: any
}

const PersonHeaderHoz: React.FC<PersonHeaderProps> = ({
  person,
  faculty,
  imageMap,
  style,
  showImage,
}) => {
  const picEl = useRef(null)
  const cardEl = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       cardEl.current,
  //       0,
  //       {
  //         x: "4rem",
  //       },
  //       0
  //     )
  //     .to(
  //       [cardEl.current],
  //       0,
  //       {
  //         opacity: 0,
  //       },
  //       0
  //     )
  //     .to(
  //       cardEl.current,
  //       0.5,
  //       {
  //         x: 0,
  //         ease: "power3.inOut",
  //       },
  //       1.1
  //     )
  //     .to(
  //       cardEl.current,
  //       1,
  //       {
  //         opacity: 1,
  //         ease: "power3.inOut",
  //       },
  //       1.2
  //     )
  // }, [])

  // return (
  //   <Row isVCentered={true} className="mb-16" style={{ style }}>
  //     {showImage && (
  //       <div className="md:pr-8 mb-4" ref={picEl}>
  //         <HeadShot data={data} />
  //       </div>
  //     )}
  //     <div>
  //       <div ref={cardEl} className="text-center md:text-left">
  //         <h2 className="font-medium">{`${person.frontmatter.name}${
  //           person.frontmatter.postNominalLetters !== ""
  //             ? `, ${person.frontmatter.postNominalLetters}`
  //             : ""
  //         }`}</h2>
  //         <div className="text-xl">
  //           {useContextName("people", person.titleMap)}
  //         </div>
  //       </div>
  //     </div>
  //   </Row>
  // )

  const titles = useContextName("", person.titleMap).split(";")

  return (
    <Row className="w-full">
      {showImage && (
        <div className="mb-4 mr-8" ref={picEl}>
          <HeadShot person={person} imageMap={imageMap} className="w-72 h-72" />
        </div>
      )}
      <div>
        <div ref={cardEl}>
          <h1 className="m-0">{usePersonName(person)}</h1>
        </div>
        <div className="pb-4">
          {titles.map((title: string, index: number) => {
            return (
              <h4 className="m-0 font-light text-slate-600" key={index}>
                {title}
              </h4>
            )
          })}
        </div>
        {/* <HideSmall size="2xl" className="pb-4">
          <ContactCard faculty={faculty} person={person} />
        </HideSmall> */}

        {/* {faculty.frontmatter.url !== "" && (
          <div className="mt-4">
            <BlueButtonLink
              to={faculty.frontmatter.url}
              className="px-6 py-3"
            >
              {strings.labWebSite}
            </BlueButtonLink>
          </div>
        )} */}
      </div>
    </Row>
  )
}

PersonHeaderHoz.defaultProps = {
  faculty: null,
  showImage: true,
  style: {},
  imageMap: {},
}

export default PersonHeaderHoz
