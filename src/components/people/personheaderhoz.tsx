import { useRef } from "react"
import getContextName from "../../hooks/contextname"
import HeadShot from "./headshot"
import Row from "../row"
import usePersonNameTitle from "../../hooks/person-title"

interface PersonHeaderProps {
  person: any
  showImage?: boolean
}

const PersonHeaderHoz = ({ person, showImage = true }: PersonHeaderProps) => {
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
  //           {getContextName("people", person.titleMap)}
  //         </div>
  //       </div>
  //     </div>
  //   </Row>
  // )

  const titles = getContextName("", person.titleMap).split(";")

  return (
    <Row isVCentered={true}>
      {showImage && (
        <div
          className="relative mb-4 mr-8 min-w-72 w-72 h-72 overflow-hidden"
          ref={picEl}
        >
          <HeadShot person={person} />
        </div>
      )}

      <div>
        <div ref={cardEl}>
          <h1 className="m-0">{usePersonNameTitle(person)}</h1>
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
      </div>
    </Row>
  )
}

export default PersonHeaderHoz
