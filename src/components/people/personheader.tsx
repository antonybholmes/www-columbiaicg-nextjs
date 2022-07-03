import React, { useRef } from "react"
import useContextName from "../../hooks/contextname"
import HeadShot from "./headshot"
import FullDiv from "../fulldiv"
import Row from "../row"
import usePersonNameTitle from "../../hooks/person-title"

type PersonHeaderProps = {
  person: any
  imageMap: any
  showImage?: boolean
  style?: any
}

const PersonHeader = ({
  person,
  imageMap,
  style,
  showImage,
}: PersonHeaderProps) => {
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
  //         <h2 className="font-medium">{`${person.fields.name}${
  //           person.fields.postNominalLetters !== ""
  //             ? `, ${person.fields.postNominalLetters}`
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
    <FullDiv className="mb-4 text-center">
      {showImage && (
        <Row isCentered={true} className="mb-8">
          <HeadShot person={person} imageMap={imageMap} className="w-60 h-60" />
        </Row>
      )}
      <div className="w-full">
        <Row isCentered={true} className="w-full">
          <div ref={cardEl}>
            <h1 className="m-0">{usePersonNameTitle(person)}</h1>
          </div>
        </Row>
        <div className="w-full pb-4">
          {titles.map((title: string, index: number) => {
            return (
              <h4
                className="text-center m-0 font-light text-slate-600"
                key={index}
              >
                {title}
              </h4>
            )
          })}
        </div>
        {/* <div className="mt-4 border border-solid border-slate-400 w-3/10 h-0 mx-auto"/> */}
      </div>
    </FullDiv>
  )
}

PersonHeader.defaultProps = {
  showImage: true,
  style: {},
  imageMap: {},
}

export default PersonHeader
