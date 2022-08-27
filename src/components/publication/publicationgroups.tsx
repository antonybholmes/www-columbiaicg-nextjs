/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useState } from "react"
import PublicationList from "./publicationlist"

import Row from "../row"
import HideSmall from "../hidesmall"

type GroupMarkerProps = {
  group: any
  onClick?: any
}

// const YearMarker: React.FC<YearMarkerProps> = ({ year, onClick }) => {
//   const [hover, setHover] = useState(false)

//   const markerEl = useRef(null)

//   const mouseEnterHandler = (
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     setHover(true)
//   }

//   const mouseLeaveHandler = (
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     setHover(false)
//   }

//   const _handleClick = (year: number) => {
//     if (onClick != null) {
//       onClick(year.toString())
//     }
//   }

//   useEffect(() => {
//     gsap.timeline().to(
//       markerEl.current,
//       0.5,
//       {
//         x: hover ? "-1.5rem" : "-1.1rem",
//         ease: "bounce.out",
//       },
//       0
//     )
//   }, [hover])

//   return (
//     <div
//       ref={markerEl}
//       onMouseEnter={mouseEnterHandler}
//       onMouseLeave={mouseLeaveHandler}
//       onClick={() => _handleClick(year)}
//       className="absolute w-full bg-cuimc-blue-90 text-white-95 text-center py-2 pl-2 z-10 cursor-pointer"
//       style={{
//         clipPath: "polygon(1.1rem 0, 0 50%, 1.1rem 100%, 100% 100%, 100%  0)",
//       }}
//     >
//       <h4 className="font-medium">{year}</h4>
//     </div>
//   )
// }

const GroupMarker = ({ group, onClick }: GroupMarkerProps) => {
  const [hover, setHover] = useState(false)

  const markerEl = useRef(null)

  const mouseEnterHandler = (e: any) => {
    setHover(true)
  }

  const mouseLeaveHandler = (e: any) => {
    setHover(false)
  }

  const _handleClick = (year: number) => {
    if (onClick != null) {
      onClick(year.toString())
    }
  }

  return (
    <Row className="justify-start">
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={() => _handleClick(group)}
        className="text-slate-500 hover:text-default-blue trans-ani cursor-pointer"
      >
        <h5>{group}</h5>
      </div>
    </Row>
  )
}

type PublicationGroupsProps = {
  publications: any[]
  showLabLink?: boolean
  showIndices?: boolean
  reverse?: boolean
  onPubClick?: any
}

const PublicationGroups = ({
  publications,
  showLabLink = false,
  reverse = false,
  onPubClick,
}: PublicationGroupsProps) => {
  let keys: any[] = Object.keys(publications).sort()

  if (reverse) {
    keys = keys.reverse()
  }

  return (
    <>
      {keys.map((key, index) => {
        return (
          <Row
            className="mb-8 border-b border-solid border-slate-300"
            key={index}
            size="lg"
          >
            {/* <div className="w-full lg:w-1/12 my-8">
                <ShowSmall
                  className="w-full bg-cuimc-blue-90 text-white-95 text-center py-2 z-10"
                  size="lg"
                >
                  <h4 className="font-medium">{year}</h4>
                </ShowSmall>

                <HideSmall className="relative w-full" size="lg">
                  <YearMarker year={year} />
                </HideSmall>
              </div> */}

            <HideSmall size="xl" className="relative lg:w-1/20 mr-8">
              <GroupMarker group={key} onClick={onPubClick} />
            </HideSmall>

            <div key={key} className="w-full lg:w-19/20 pb-4 mb-4">
              {/* <Card key={year} className="w-full lg:w-11/12"> */}
              <PublicationList
                publications={publications[key]}
                showLabLink={showLabLink}
                showIndices={false}
                onPubClick={onPubClick}
              />
              {/* </Card> */}
            </div>
          </Row>
          // <div className="mb-8">
          //   <h3 className={`text-slate-700 mb-2`} key={`header-${year}`}>
          //     {year}
          //   </h3>
          //   <Card className="p-4 md:p-8">
          //     <PublicationList
          //       publications={yearMap.get(year)}
          //       showLabLink={showLabLink}
          //     />
          //   </Card>
          // </div>
        )
      })}
    </>
  )
}

export default PublicationGroups
