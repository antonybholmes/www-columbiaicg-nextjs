import ContactInfo from "./contactinfo"
import React, { useState } from "react"
import BlueButtonLink from "../buttons/bluebuttonlink"

type ContactCardProps = {
  person: any
  faculty?: any
}

export const ContactCard: React.FC<ContactCardProps> = ({
  faculty,
  person,
}) => {
  const [hover, setHover] = useState(false)

  //const cardEl = useRef(null)

  // useEffect(() => {
  //   gsap.timeline().to(
  //     cardEl.current,
  //     0.8,
  //     {
  //       backgroundColor: hover
  //         ? "rgba(29, 79, 145, 0.95)"
  //         : "rgba(29, 79, 145, 0)",
  //       ease: "power3.inOut",
  //     },
  //     0
  //   )
  // }, [hover])

  const mouseEnterHandler = (e: any) => {
    setHover(true)
  }

  const mouseLeaveHandler = (e: any) => {
    setHover(false)
  }

  return (
    //  {/* <SectionCard
    //   padding="p-6"
    //   className="w-full"
    //   showShadow={false}
    //   autoHide={false}
    //   rounded={true}
    //   ref={cardEl}
    //   onMouseEnter={mouseEnterHandler}
    //   onMouseLeave={mouseLeaveHandler}
    // > */}

    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <div>
        <ContactInfo
          person={person}
          showIcons={true}
          showUrl={false}
          hoverColor={hover ? "text-columbia-secondary-blue" : "text"}
          color="text"
          size="text-sm xl:text-base"
          twitter={faculty !== null ? faculty.frontmatter.twitter : null}
        />
      </div>
      {/* {faculty !== null && faculty.frontmatter.url !== "" && (
        <div className="mt-12 mb-4 lg:mb-0">
          <BlueButtonLink to={faculty.frontmatter.url} className="px-6 py-3">
            {strings.labWebSite}
          </BlueButtonLink>
        </div>
      )} */}
    </div>

    //*  </Card> */
  )
}

ContactCard.defaultProps = {
  faculty: null,
}

export default ContactCard
