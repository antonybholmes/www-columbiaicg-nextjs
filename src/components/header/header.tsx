import React, { useRef, useState } from "react"
import Container from "../container"
import SlideMenuButton from "../slidemenu/slidemenubutton"
import Logo from "./logo"
import HeaderLinksNav from "./headerlinksnav"
import AltView from "../altview"
import Row from "../row"
import useHeaderLinks from "../../hooks/headerlinks"
import { gsap } from "gsap"
import { useEffect } from "react"
import BaseLink from "../buttons/baselink"
//import SmallContainer from "../smallcontainer"
//import LogoSvg from "../../../assets/images/svg/icg-logo-4.svg"

const TAB_PADDING = "24px"
const TABS_MARGIN = `-${TAB_PADDING}`

type HeaderLinkProps = {
  link: any
  selected: boolean
  index: number
  tabHighlightRef: any
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
  ref: any
}

const HeaderLink = React.forwardRef<HeaderLinkProps, any>(
  (
    {
      link,
      selected,
      index,
      tabHighlightRef,
      onClick,
      onMouseEnter,
      onMouseLeave,
    },
    ref?: any
  ) => {
    const _ref = useRef(null)

    //const selected = link.name === title

    // useEffect(() => {
    //   if (selected) {
    //     click()
    //   }
    // }, [])

    // const handleClick = (event: any) => {
    //   click()
    // }

    // const click = () => {
    //   console.log("sss")

    //   if (ref.current === null || tabHighlightRef.current === null) {
    //     return
    //   }

    //   console.log("cuu", ref.current.offsetLeft, ref.current.clientWidth)

    //   //const target = event.target

    //   //const isSelected = target.id === title

    //   gsap.killTweensOf(tabHighlightRef.current)

    //   const tl = gsap.timeline()

    //   tl.to(
    //     tabHighlightRef.current,
    //     {
    //       duration: 0,
    //       opacity: 1,
    //       ease: "power3.out",
    //     },
    //     "+=0.0"
    //   )
    //     .to(
    //       tabHighlightRef.current,
    //       { duration: 0, width: ref.current.clientWidth, ease: "power3.out" },
    //       "+=0.0"
    //     )
    //     .to(
    //       tabHighlightRef.current,
    //       { duration: 0.3, x: ref.current.offsetLeft, ease: "power3.out" },
    //       "+=0.0"
    //     )
    // }

    return (
      <li key={index} className={`block`}>
        <BaseLink to={link.link}>
          <Row
            id={link.name}
            isCentered={true}
            className={`trans-ani h-full border-transparent ${
              selected
                ? "text-cuimc-button-blue"
                : "text-default-gray hover:text-cuimc-button-blue hover:bg-cuimc-button-blue-8"
            }`}
            style={{
              paddingLeft: TAB_PADDING, //selected ? 0 : TAB_PADDING,
              paddingRight: TAB_PADDING, //selected ? 0 : TAB_PADDING,
              //marginLeft: selected ? TAB_PADDING : 0,
              //marginRight: selected ? TAB_PADDING : 0,
            }}
            //onClick={handleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={ref}
          >
            {link.name}
          </Row>
        </BaseLink>
      </li>
    )
  }
)

type HeaderLinksProps = {
  location: any
}

const HeaderLinks = ({ location }: HeaderLinksProps) => {
  const [selectedTarget, setSelectedTarget] = useState(null)

  //const [path, setPath] = useState(location.pathname)

  const tabHighlightRef = useRef(null)

  const links = useHeaderLinks()

  const linkRefMap: any = {}

  // const handleMouseEnter = (event: any) => {
  //   const target = event.target
  //   //target.left = 0
  // }

  // const handleMouseLeave = (event:any) => {
  //   const target = event.target

  //   gsap.killTweensOf("#tab-highlight")

  //   const tl = gsap.timeline()
  //   tl.to("#tab-highlight", {duration: 0.1, width: 0, ease: "none"})
  //   //tl.to("#tab-highlight", {duration: 0.1, x: 0, ease: "none"}, "+=0.0")
  // }

  useEffect(() => {
    gsap.killTweensOf(tabHighlightRef.current)

    let p = "home" //location.pathname

    // strip address to see if we can find something
    // in the links array

    while (p !== "") {
      if (p in linkRefMap) {
        break
      }

      p = p.replace(/\/([^\/]*$)/, "")
    }

    if (p in linkRefMap) {
      gsap
        .timeline()
        .to(
          tabHighlightRef.current,
          {
            duration: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "+=0.0"
        )
        .to(
          tabHighlightRef.current,
          {
            duration: 0,
            width: linkRefMap[p].current.clientWidth,
            ease: "power3.out",
          },
          "+=0.0"
        )
        .to(
          tabHighlightRef.current,
          {
            duration: 0.3,
            x: linkRefMap[p].current.offsetLeft,
            ease: "power3.out",
          },
          "+=0.0"
        )
    } else {
      gsap.timeline().to(
        tabHighlightRef.current,
        {
          duration: 0,
          opacity: 0,
          ease: "power3.out",
        },
        "+=0.0"
      )
    }
  }, [location])

  // useEffect(() => {
  //   gsap.killTweensOf("#tab-highlight")
  //   const tl = gsap.timeline()

  //   if (selectedTarget === null || selectedTarget.current === null) {
  //     tl.to(
  //     "#tab-highlight",
  //     {
  //       duration: 0,
  //       opacity: 0,
  //       ease: "power3.out",
  //     },
  //     "+=0.0"
  //   )
  //   } else {

  //   // to(
  //   //   "#tab-highlight",
  //   //   {
  //   //     duration: isSelected ? 0.3 : 0,
  //   //     opacity: isSelected ? 0 : 1,
  //   //     ease: "power3.out",
  //   //   },
  //   //   "+=0.0"
  //   // )

  //   tl.to(
  //     "#tab-highlight",
  //     {
  //       duration: 0,
  //       opacity: 1,
  //       ease: "power3.out",
  //     },
  //     "+=0.0"
  //   )
  //     .to(
  //       "#tab-highlight",
  //       { duration: 0, width: selectedTarget.clientWidth, ease: "power3.out" },
  //       "+=0.0"
  //     )
  //     .to(
  //       "#tab-highlight",
  //       { duration: 0.3, x: selectedTarget.offsetLeft, ease: "power3.out" },
  //       "+=0.0"
  //     )
  //   }
  // }, [selectedTarget])

  const handleClick = (event: any, link: any, ref: any) => {
    //const target = event.target
    //setPath(link.link)
    //setSelectedTarget(ref)
    //setSelectedTarget(target)
    // const isSelected = target.id === title
    // gsap.killTweensOf("#tab-highlight")
    // const tl = gsap.timeline()
    // tl.to(
    //   "#tab-highlight",
    //   {
    //     duration: isSelected ? 0.3 : 0,
    //     opacity: isSelected ? 0 : 1,
    //     ease: "power3.out",
    //   },
    //   "+=0.0"
    // )
    //   .to(
    //     "#tab-highlight",
    //     { duration: 0, width: target.clientWidth, ease: "power3.out" },
    //     "+=0.0"
    //   )
    //   .to(
    //     "#tab-highlight",
    //     { duration: 0.3, x: target.offsetLeft, ease: "power3.out" },
    //     "+=0.0"
    //   )
  }

  // const handleLinkMouseEnter = (event: any) => {
  // }

  // const handleMouseLeave = (event: any) => {
  //   // const target = event.target

  //   // gsap.killTweensOf("#tab-highlight")

  //   // const tl = gsap.timeline()
  //   // tl.to(
  //   //   "#tab-highlight",
  //   //   { duration: 0.2, opacity: 0, ease: "power3.out" },
  //   //   "+=0.0"
  //   // )
  //   //tl.to("#tab-highlight", {duration: 0.5, height: 0, ease: "none"}, "+=0.1")
  // }

  links.map((link: any, i: number) => {
    linkRefMap[link.link] = useRef(null)
  })

  return (
    <nav
      className="relative h-full"
      style={{
        height: "3.2rem",
        marginBottom: 0,
        //marginLeft: TABS_MARGIN,
        //marginRight: TABS_MARGIN,
      }}
    >
      <div
        id="tab-highlight"
        className="absolute opacity-0 border-cuimc-button-blue border-b-3 border-solid h-full"
        style={{ width: "0px", top: 0 }}
        ref={tabHighlightRef}
      />

      <ul className="absolute flex flex-row h-full">
        {links.map((link: any, i: number) => {
          return (
            <HeaderLink
              link={link}
              index={i}
              selected={link.link === location.pathname}
              key={i}
              tabHighlightRef={tabHighlightRef}
              onClick={handleClick}
              ref={linkRefMap[link.link]}
            />
          )
        })}
      </ul>
    </nav>
  )
}

type HeaderProps = {
  title: string
  location: any
  content?: any
  onSearch?: any
  search?: string
  placeholder?: string
  onMenuButtonClick?: any
  animateHeader?: boolean
  showLogo?: boolean
  crumbs?: [string, string][]
  menuVisible?: boolean
}

const Header = ({
  title,
  location,
  content,
  onSearch,
  search,
  placeholder,
  onMenuButtonClick,
  animateHeader = false,
  showLogo = true,
  crumbs = [],
  menuVisible = false,
}: HeaderProps) => {
  return (
    <div className="relative">
      <AltView size="lg" className="w-full z-10">
        <nav
          aria-label="Navigation"
          className="row items-center justify-between p-2 bg-white"
        >
          <BaseLink to="/">
            <img
              src={"/assets/images/svg/icg.svg"}
              className="w-72 ml-4"
              alt="Institute for Cancer Genetics logo"
            />
          </BaseLink>

          <SlideMenuButton
            menuVisible={menuVisible}
            onClick={onMenuButtonClick}
          />
        </nav>

        <div className="bg-white">
          {showLogo && (
            <Container>
              <Row className="items-center justify-between my-2">
                <BaseLink to="/" className="mr-8">
                  <img
                    src={"/assets/images/svg/icg.svg"}
                    className="w-96"
                    alt="Institute for Cancer Genetics logo"
                  />
                </BaseLink>

                {content && content}
              </Row>
            </Container>
          )}

          <HeaderLinksNav
            title={title}
            crumbs={crumbs}
            onSearch={onSearch}
            search={search}
            placeholder={placeholder}
            showLogo={showLogo}
          />

          {/* {!showLogo && <Breadcrumb crumbs={crumbs} />} */}

          {!showLogo && (
            <Container className="ml-16 ">
              <Row className="">
                <HeaderLinks location={location} />
              </Row>
            </Container>
          )}
        </div>
      </AltView>
      {/* <CoreBackground /> */}
    </div>
  )
}

export default Header
