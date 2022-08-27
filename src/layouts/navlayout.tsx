/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode, useState } from "react"

import Header from "../components/header/header"
import ICrumb from "../types/crumb"
import MenuLayout from "./menulayout"

const H = "12rem"
const SKEW = "skewY(-4deg)"

export const CoreBackground = () => (
  <div
    className="w-full h-full overflow-hidden absolute top-0"
    style={{
      // transform: SKEW,
      transformOrigin: 0,
      background:
        "linear-gradient(180deg, rgba(29, 79, 145, 1) 0%, rgba(0, 142, 224, 0.6) 100%)",
      zIndex: -1,
    }}
  >
    <div
      className="absolute"
      style={{
        left: 0,
        top: "60%",
        width: "30%",
        height: "60%",
        transformOrigin: 0,
        transform: "skewY(-5deg)",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    />

    <div
      className="absolute"
      style={{
        left: "30%",
        top: "90%",
        width: "30%",
        height: "80%",
        transformOrigin: 0,
        transform: "skewY(-5deg)",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    />

    <div
      className="absolute"
      style={{
        left: "30%",
        top: "-30%",
        width: "40%",
        height: "60%",
        transformOrigin: 0,
        transform: "skewY(-5deg)",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    />

    <div
      className="absolute"
      style={{
        left: "60%",
        top: "-10%",
        width: "100%",
        height: "60%",
        transformOrigin: 0,
        transform: "skewY(-5deg)",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)",
      }}
    />

    <div
      className="absolute"
      style={{
        left: "80%",
        top: "90%",
        width: "100%",
        height: "60%",
        transformOrigin: 0,
        transform: "skewY(-5deg)",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)",
      }}
    />
  </div>
)

type BackgroundProps = {
  bgColorClass?: string
}

export const Background: React.FC<BackgroundProps> = ({ bgColorClass }) => (
  <div
    className={`w-full h-full absolute top-0 left-0 overflow-hidden ${bgColorClass}`}
    style={{ zIndex: -2 }}
  >
    {/* <CoreBackground /> */}

    {/* <div
      className="w-full absolute bg-black-5"
      style={{
        // transform: SKEW,
        // transformOrigin: 0,
        top: "0",
        height: "30%",
        zIndex: -2,
        clipPath: "polygon(0 0, 0 100%, 100% calc(100% - 15rem), 100% 0)",
      }}
    /> */}

    <div
      className="w-full absolute bg-white-50"
      style={{
        // transform: SKEW,
        // transformOrigin: 0,
        top: "30rem",
        height: "100rem",
        zIndex: -2,
        clipPath: "polygon(0 15rem, 0 100%, 100% calc(100% - 15rem), 100% 0)",
      }}
    />
  </div>
)

type NavLayoutProps = {
  nav?: string
  title: string
  path?: string
  crumbs?: ICrumb[]
  headerContent?: any
  onSearch?: any
  search?: string
  placeholder?: string
  showLogo?: boolean
  bgColorClass?: string
  index?: boolean
  children?: ReactNode
}

const NavLayout: React.FC<NavLayoutProps> = ({
  nav,
  title,
  path,
  crumbs,
  headerContent,
  onSearch,
  search,
  placeholder,
  showLogo,
  bgColorClass,
  index,
  children,
}) => {
  const [menuVisible, setMenuVisible] = useState(false)

  const handleMenuButtonClick = (e: any) => {
    setMenuVisible(true)
  }

  const handleSlideMenuClick = (e: any) => {
    setMenuVisible(false)
  }

  return (
    <MenuLayout
      title={title}
      path={path}
      crumbs={crumbs}
      menuVisible={menuVisible}
      onSlideMenuClick={handleSlideMenuClick}
      index={index}
    >
      <div className={`relative min-h-full`}>
        <Header
          title={title}
          crumbs={crumbs}
          content={headerContent}
          onSearch={onSearch}
          search={search}
          placeholder={placeholder}
          showLogo={showLogo}
          onMenuButtonClick={handleMenuButtonClick}
          menuVisible={menuVisible}
        />

        {/* <Content className={`${bgColorClass}`}>{children}</Content> */}
        <main>{children}</main>

        {/* <div className="w-full absolute top-0" style={{transform: "skewY(-12deg)", transformOrigin: 0, background: "linear-gradient(150deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%)", height: "calc(100% / 3)", zIndex: -10}}/> */}

        {/* {bgColorClass !== "bg-white" && (
          <Background bgColorClass={bgColorClass} />
        )} */}
      </div>
    </MenuLayout>
  )
}

NavLayout.defaultProps = {
  title: "",
  nav: "",
  path: "",
  crumbs: [],
  headerContent: null,
  onSearch: null,
  search: "",
  placeholder: "Search",
  showLogo: true,
  bgColorClass: "",
}

export default NavLayout
