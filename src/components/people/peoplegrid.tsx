import { useState } from "react"
import ContactInfo from "./contactinfo"
import FacultyLink from "../faculty/facultylink"
import PersonLink from "./personlink"
import useContextName from "../../hooks/contextname"
import ShowSmall from "../showsmall"
import HideSmall from "../hidesmall"
import Row from "../row"
import BWImage from "../images/bwimage"
import AltView from "../altview"
import Circle from "../circle"

// const PersonCard = ({ person, smallView }) => (
//   <div
//     className={`w-full trans-ani shadow-lg hover:shadow-xl rounded-md bg-white mb-12 p-8 overflow-hidden`}
//   >
//     <div>
//       <h3>
//         <PersonLink person={person} />
//       </h3>

//       <h4>{person.fields.title}</h4>
//     </div>
//     {!smallView && (
//       <div className="mt-4">
//         <ContactInfo person={person} />
//       </div>
//     )}
//   </div>
// )

// const PersonCard = ({ person, smallView }) => (
//   <div
//     className={`w-full trans-ani border-t-4 border-b-4 border-solid border-slate-400 hover:border-cuimc-blue bg-white mb-12 py-4 overflow-hidden`}
//   >
//     <div>
//       <h3>
//         <PersonLink person={person} />
//       </h3>

//       <h4>{person.fields.title}</h4>
//     </div>
//     {!smallView && (
//       <div className="mt-4">
//         <ContactInfo person={person} />
//       </div>
//     )}
//   </div>
// )

// const PersonCard = ({ person, smallView }) => (
//   <div
//     className={`w-full trans-ani border border-solid border-slate-300 hover:shadow rounded-md bg-white mb-12 px-8 py-6 overflow-hidden`}
//   >
//     <div>
//       <h3>
//         <PersonLink person={person} />
//       </h3>

//       <h4>{person.fields.title}</h4>
//     </div>
//     {!smallView && (
//       <div className="mt-4">
//         <ContactInfo person={person} />
//       </div>
//     )}
//   </div>
// )

type PersonCardProps = {
  person: any
  imageMap?: any
  smallView?: boolean
  context?: string
  isFaculty?: boolean
  showUrl?: boolean
  photoMode?: string
  showLetters?: boolean
  showPhone?: boolean
}

const PersonCard = ({
  person,
  imageMap,
  smallView,
  context,
  showUrl = true,
  photoMode = "show,generic",
  showLetters = false,
  showPhone = false,
}: PersonCardProps) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  let link

  const isFaculty = person.fields.groups.includes("Faculty")

  if (isFaculty) {
    link = <FacultyLink person={person} />
  } else {
    if (showUrl || person.fields.tagList.includes("personal-page::true")) {
      link = <PersonLink person={person} />
    } else {
      // link = `${person.fields.name}${
      //   person.fields.postNominalLetters !== ""
      //     ? `, ${person.fields.postNominalLetters}`
      //     : ""
      // }`
      link = `${person.fields.firstName} ${person.fields.lastName}${
        showLetters && person.fields.postNominalLetters !== ""
          ? `, ${person.fields.postNominalLetters}`
          : ""
      }`
    }
  }

  let fluid = null

  if (photoMode.includes("show")) {
    fluid =
      person.fields.personId in imageMap
        ? imageMap[person.fields.personId]
        : imageMap["generic"]
  }

  const titles = useContextName(context, person.titleMap).split(";")

  return (
    <div
      className="w-full h-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <AltView size="md">
        <div>
          {photoMode.includes("generic") && (
            <Row isCentered={true}>
              {/* <Circle className="border border-solid border-cuimc-gray"> */}
              <BWImage
                image={fluid}
                extZoom={hover}
                alt={person.fields.name}
                className={`w-64 mb-4`}
              />
              {/* </Circle> */}
              {/* <BWImage2
                  src={usePersonImageURL(person)}
                  extZoom={hover}
                  alt={person.fields.name}
                /> */}
            </Row>
          )}

          {/* <div
              className={`${center ? "text-center" : ""} ${
                showCard ? "p-4" : "pt-4"
              }`}
            > */}
          <p>{link}</p>
          <p className="text-sm">{titles[0]}</p>
          {!smallView && (
            <ContactInfo
              person={person}
              showIcons={false}
              showUrl={showUrl}
              showRoom={false}
              showPhone={false}
              className="text-xs"
              isCentered={false}
            />
          )}
          {/* </div> */}
        </div>

        <div>
          {photoMode.includes("generic") && (
            <Row isCentered={true}>
              <BWImage
                image={fluid}
                extZoom={hover}
                alt={person.fields.name}
                className={`w-64 mb-4`}
              />
            </Row>
          )}

          <p className="font-medium">{link}</p>
          <p className="text-sm">{titles[0]}</p>
          {!smallView && !isFaculty && (
            <ContactInfo
              person={person}
              showIcons={false}
              showUrl={showUrl}
              showRoom={false}
              showPhone={showPhone}
              className="text-xs"
              isCentered={false}
            />
          )}
        </div>
        {/* </div> */}
      </AltView>
    </div>
  )
}

type PeopleGridProps = {
  name: string
  imageMap?: any
  people: any[]
  colWidth?: string
  smallView?: boolean
  faculty?: any
  photoMode?: string
  showHeadings?: boolean
  showUrl?: boolean
  showPhone?: boolean
  headingColor?: string
  context?: string
  gridBg?: string
  outline?: boolean
  showLetters?: boolean
  className?: string
}

// PeopleGrid.defaultProps = {
//   colWidth: "w-full sm:w-1/3 md:w-1/4 xl:w-1/5 3xl:w-16/100", //"w-full md:w-3/10 3xl:w-1/5",
//   className: "",
//   smallView: false,
//   faculty: null,
//   photoMode: "show,generic",
//   showHeadings: true,
//   showUrl: false,
//   headingColor: "text-slate-700 md:text-slate-500",
//   context: "",
//   gridBg: "",
//   showLetters: false,
//   showPhone: false,
// }

const PeopleGrid = ({
  name,
  imageMap,
  people,
  smallView = false,
  faculty = null,
  photoMode = "show,generic",
  showHeadings = true,
  showUrl = false,
  showLetters = false,
  showPhone = false,
  context,
  className,
}: PeopleGridProps) => {
  let found = false

  const ret: any[] = []

  people.map((person: any, index: number) => {
    if (faculty === null || faculty.fields.id !== person.fields.personId) {
      ret.push(
        <li key={`person-${index}`}>
          <PersonCard
            person={person}
            imageMap={imageMap}
            smallView={smallView}
            context={context}
            showUrl={showUrl}
            // photoMode={
            //   photoMode.includes("all") ||
            //   name.includes("Faculty") ||
            //   name.includes("Director")
            //     ? "show,generic"
            //     : "none"
            // }
            photoMode={photoMode}
            showLetters={showLetters}
            showPhone={showPhone}
          />
        </li>
      )

      found = true
    }
  })

  if (found) {
    return (
      // <Card showCard={false}>
      <>
        {showHeadings && (
          <>
            <ShowSmall className="mb-8" size="lg">
              <h2 className={`text-center`}>{name}</h2>
            </ShowSmall>
            <HideSmall className="mb-8" size="lg">
              <h2 className={``}>{name}</h2>
            </HideSmall>
          </>
        )}

        <ul className={`grid grid-cols-1 lg:grid-cols-5 ${className}`}>
          {ret}
        </ul>
      </>
      // </Card>
    )
  } else {
    return <></>
  }
}

export default PeopleGrid
