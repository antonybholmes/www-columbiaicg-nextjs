import React, { useState, useEffect, useRef } from "react"
import Container from "../container"
import Row from "../row"
import useHeaderLinks from "../../hooks/headerlinks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"
//import Logo from "./logo"
//import ShortLogo from "../../../assets/images/svg/icg-logo-vert.svg"
//simport LogoSvg from "../../../assets/images/svg/icg-logo-white-4.svg"
import SearchBar4 from "../search/searchbar4"
import HideSmall from "../hidesmall"
import BaseLink from "../buttons/baselink"
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"

const H = "h-20"

type HeaderLinkProps = {
  link: any
  title: string
  index: number
}

const HeaderLink = ({ link, title, index }: HeaderLinkProps) => {
  return (
    <li key={index} className={`inline`}>
      <BaseLink
        to={link.link}
        className={`relative inline-block py-2 border-t-3 border-b-3 border-solid border-transparent font-semibold px-3 lg:px-4 ${
          link.name === title
            ? " border-b-columbia-tertiary-blue text-columbia-tertiary-blue"
            : "hover:border-b-slate-400 trans-ani"
        }`}
      >
        {link.name}
      </BaseLink>
    </li>
  )
}

type HeaderLinksNavProps = {
  title: string
  onSearch?: any
  search?: string
  placeholder?: string
  showLogo?: boolean
  crumbs?: [string, string][]
}

const HeaderLinksNav = ({
  title,
  onSearch,
  search = "",
  placeholder = "Search...",
  showLogo = true,
  crumbs = [],
}: HeaderLinksNavProps) => {
  const [showSearch, setShowSearch] = useState(false)
  const menuEl = useRef(null)
  const links = useHeaderLinks()

  useEffect(() => {
    gsap.timeline().to(
      menuEl.current,
      {
        duration: showSearch ? 0.3 : 0,
        delay: 0,
        opacity: showSearch ? 1 : 0,
      },
      0
    )
  }, [showSearch])

  useEffect(() => {
    if (search !== "") {
      setShowSearch(true)
    }
  }, [search])

  const handleOnSearch = (text: string, clicked: boolean) => {
    if (onSearch !== null) {
      onSearch(text, clicked)
    }
  }

  return (
    <nav aria-label="Navigation" className={`relative bg-white`}>
      <Container
        className={`h-full trans-ani bg-slate-100 ${
          showSearch ? "opacity-0" : "opacity-100"
        }`}
      >
        <Row className="w-full justify-between">
          {!showLogo && (
            <div className="w-100">
              <BaseLink to="/">
                {/* <Crown
                    className="w-full trans-ani"
                    color={`rgba(29, 79, 145, 0.95)`}
                  /> */}

                <img
                  src={"/assets/images/svg/icg.svg"}
                  className="w-full"
                  alt="Institute for Cancer Genetics logo"
                />
                {/* <Logo /> */}
              </BaseLink>
            </div>
          )}
          {showLogo && (
            <Row>
              <Row
                className={`justify-end text-sm xl:text-base ${
                  showLogo ? "" : "ml-6"
                }`}
              >
                <ul className="inline">
                  {links.map((link: any, i: number) => {
                    return (
                      <HeaderLink link={link} index={i} title={title} key={i} />
                    )
                  })}
                </ul>
              </Row>

              {onSearch && (
                <HideSmall size="xl" className="row justify-end w-8 ml-8">
                  <button
                    onClick={() => setShowSearch(!showSearch)}
                    className={`trans-ani`}
                  >
                    <Row>
                      <FontAwesomeIcon
                        icon={faSearch}
                        className={`text-lg trans-ani ${
                          showSearch
                            ? "text-default-blue"
                            : "text-slate-300 hover:text-default-blue"
                        }`}
                      />
                    </Row>
                  </button>
                </HideSmall>
              )}
            </Row>
          )}
          {/* {menuContent !== null && (
          <RightDiv className="w-4/10">{menuContent}</RightDiv>
        )} */}
        </Row>
      </Container>

      <div
        className={`absolute left-0 top-0 w-full z-10 ${H}`}
        style={{ opacity: 0, visibility: showSearch ? "visible" : "hidden" }}
        ref={menuEl}
      >
        <Container className="h-full">
          <Row className="justify-between h-full">
            <div className="w-8" />
            <div className="w-1/2">
              <SearchBar4
                onSearch={handleOnSearch}
                placeholder={placeholder}
                text={search}
              />
            </div>
            <Row w="w-8" className="justify-end">
              <button onClick={() => setShowSearch(false)}>
                <Row>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={`trans-ani text-2xl text-slate-400 hover:text-slate-600`}
                  />
                </Row>
              </button>
            </Row>
          </Row>
        </Container>
      </div>
    </nav>
  )
}

export default HeaderLinksNav
