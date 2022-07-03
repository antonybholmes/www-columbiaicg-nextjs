import { useState, useEffect, useRef } from "react"
import SlideMenuCloseButton from "./slidemenuclosebutton"
import { gsap } from "gsap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Row from "../row"
import BlueIndexLink from "../buttons/blueindexlink"
import BaseLink from "../buttons/baselink"
import { SHARED_INSTRUMENT_LINK } from "../../constants"

type SiteSearchResultProps = {
  to: string
  text: any
}

const SiteSearchResult = ({ to, text }: SiteSearchResultProps) => {
  return (
    <BaseLink to={to}>
      <Row className="px-4 py-2 cursor-pointer hover:bg-slate-200 trans-ani">
        <div>{text}</div>
      </Row>
    </BaseLink>
  )
}

type MenuItemProps = {
  link: any
  onClick: any
}

const MenuItem: React.FC<MenuItemProps> = ({ link, onClick }) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <li className="inline-block w-1/2">
      <BaseLink to={link.link} onClick={onClick}>
        <Row
          className={`py-3 px-6 font-semibold trans-ani text-slate-500 ${
            hover ? "text-slate-900" : ""
          }`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="w-8">
            <FontAwesomeIcon
              icon={link.icon}
              className={`trans-ani ${
                hover ? "text-cuimc-button-blue" : "text-cuimc-button-blue-50"
              }`}
            />
          </div>
          <div className={`text-sm`}>{link.name}</div>
        </Row>
      </BaseLink>
    </li>
  )
}

type SlideMenuContainerProps = {
  onClick: any
  visible?: boolean
  maxResults?: number
}

const SlideMenuContainer: React.FC<SlideMenuContainerProps> = ({
  onClick,
  visible,
  maxResults,
}) => {
  //const [query, setQuery] = useState("")
  //const [results, setResults] = useState<Array<any>>([])
  //const [showMenu, setShowMenu] = useState(false)
  //const [hover, setHover] = useState(false)
  //const [siteData, setSiteData] = useState(null)

  const menuEl = useRef(null)

  // const search = (q: string, sd: any) => {
  //   const [items, words] = searchTree(sd.tree, q)

  //   // If some links were found, put them in the search
  //   // results
  //   if (items.length > 0) {
  //     let c = 0
  //     let currentSection = ""
  //     const ret: Array<any> = []

  //     for (let item of items) {
  //       const link = sd.links[item]

  //       const name = link[0]
  //       const section = sd.sections[link[1]]

  //       let sectionComp = null

  //       if (section !== currentSection) {
  //         sectionComp = <Heading key={`heading-${c}`} name={section} />
  //         currentSection = section
  //       }

  //       // If we found a match render components
  //       if (sectionComp !== null) {
  //         ret.push(sectionComp)
  //       }

  //       ret.push(
  //         <SiteSearchResult
  //           key={`result-${c}`}
  //           text={<SearchHighlight text={name} words={words} />}
  //           to={link[3]}
  //         />
  //       )

  //       ++c

  //       // limit displayed results for performance
  //       if (c === maxResults) {
  //         break
  //       }
  //     }

  //     setResults(ret)
  //   }
  // }

  // const handleInputChange = (e: any) => {
  //   const q = e.target.value
  //   //const ql = q.toLowerCase()

  //   setQuery(q)

  //   if (q !== "") {
  //     if (siteData !== null) {
  //       search(q, siteData)
  //     } else {
  //       getSiteData().then((data: any) => {
  //         setSiteData(data)
  //         search(q, data)
  //       })
  //     }
  //   }
  // }

  useEffect(() => {
    if (visible) {
      gsap
        .timeline()
        .to(
          menuEl.current,
          {
            duration: 0.3,
            delay: 0,
            opacity: 1,
          },
          0
        )
        .from(
          menuEl.current,
          {
            duration: 0.3,
            delay: 0,
            transform: "translateY(-4rem)",
          },
          0
        )
    }
  }, [visible])

  const links: any[] = []

  let display: Array<any> = links.map((link, index) => {
    return <MenuItem key={index} link={link} onClick={onClick} />
  })

  // if (results.length > 0) {
  //   display = results
  // } else {
  //   display = links.map((link, index) => {
  //     return (
  //       <div key={index}>
  //         <SlideMenuLink
  //           key={index}
  //           to={link.link}
  //           active={link.name === title}
  //         >
  //           {link.name}
  //         </SlideMenuLink>
  //       </div>
  //     )
  //   })
  // }

  return (
    <div
      className={`absolute rounded-md  overflow-hidden z-300 shadow-slide-menu font-medium bg-white-99`}
      style={{
        width: "calc(100% - 1rem)",

        marginTop: "0.5rem",
        marginLeft: "0.5rem",
        visibility: visible ? "visible" : "hidden",
      }}
      ref={menuEl}
    >
      <Row className="py-2 px-4 justify-end">
        {/* <div>
            <img src={logo} className="h-8" alt="ICG logo" />
          </div> */}
        <div>
          <SlideMenuCloseButton onClick={onClick} />
        </div>

        {/* <button
              className="text-cuimc-blue focus:outline-none"
              onClick={onClickHandle}
            >
              Done
            </button> */}
      </Row>
      {/* <div className="mx-4 mb-4">
          <SiteSearchBar
            handleInputChange={handleInputChange}
            text={query}
            placeholder="Search site..."
          />
        </div> */}
      <nav>
        {/* <Row wrap={true}> */}
        <ul className="inline">{display}</ul>
        {/* </Row> */}

        <Row className="px-6 py-5 mt-4 font-normal text-sm">
          <BlueIndexLink
            aria-label={`Goto Booking`}
            to={SHARED_INSTRUMENT_LINK}
            onClick={onClick}
          >
            {SHARED_INSTRUMENT_LINK}
          </BlueIndexLink>
        </Row>
      </nav>
    </div>
  )
}

SlideMenuContainer.defaultProps = {
  maxResults: 5,
  visible: false,
}

export default SlideMenuContainer
