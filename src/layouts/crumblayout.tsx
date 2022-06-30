/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import Breadcrumb from "../components/breadcrumb"
import HideSmall from "../components/hidesmall"
import HeaderLayout from "./headerlayout"
import Header from "../components/header/header"
import MenuLayout from "./menulayout"
import Container from "../components/container"
import HeaderLinksNav from "../components/header/headerlinksnav"
import NavLayout from "./navlayout"
import Content from "../components/content"

type FloatingHeaderProps = {
  title?: string
  crumbs?: Array<[string, string]>
  headerContent?: any
  onSearch?: any
  search?: string
  placeholder?: string
  onMenuButtonClick?: any
  animateHeader?: boolean
}

export const FloatingHeader: React.FC<FloatingHeaderProps> = ({
  title,
  crumbs,
  headerContent,
  onSearch,
  search,
  placeholder,
  onMenuButtonClick,
  animateHeader,
  children,
}) => (
  <div className={`w-full absolute z-10`}>
    {/* <CoreBackground /> */}
    <Header
      title={title}
      crumbs={crumbs}
      content={headerContent}
      onSearch={onSearch}
      search={search}
      placeholder={placeholder}
      onMenuButtonClick={onMenuButtonClick}
      animateHeader={animateHeader}
    />

    {children}
  </div>
)

FloatingHeader.defaultProps = {
  crumbs: [],
  headerContent: null,
  animateHeader: false,
  onMenuButtonClick: null,
}

type CrumbLayoutProps = {
  title: string
  path?: string
  nav?: string
  crumbs?: Array<any>
  crumbLocation?: string
  headerContent?: any
  onSearch?: any
  search?: string
  placeholder?: string
  titleContent?: any
  crumbContent?: any
  floatMode?: string
  showLogo?: boolean
  animateHeader?: boolean
  bgColorClass?: string
  index?: boolean
}

const CrumbLayout: React.FC<CrumbLayoutProps> = ({
  title,
  path,
  nav,
  crumbs,
  crumbLocation,
  headerContent,
  onSearch,
  search,
  placeholder,
  titleContent,
  crumbContent,
  floatMode,
  showLogo,
  animateHeader,
  bgColorClass,
  index,
  children,
}) => {
  const [menuVisible, setMenuVisible] = useState(false)

  const onMenuButtonClick = (e: any) => {
    setMenuVisible(true)
  }

  const onSlideMenuClick = (e: any) => {
    setMenuVisible(false)
  }

  switch (floatMode) {
    case "header":
      return (
        <MenuLayout
          title={title}
          path={path}
          crumbs={crumbs}
          menuVisible={menuVisible}
          onSlideMenuClick={onSlideMenuClick}
          index={index}
        >
          <FloatingHeader
            title={nav !== "" ? nav : title}
            crumbs={crumbs}
            headerContent={headerContent}
            onSearch={onSearch}
            search={search}
            placeholder={placeholder}
            onMenuButtonClick={onMenuButtonClick}
            animateHeader={animateHeader}
          >
            {titleContent}

            {crumbLocation === "top" &&
              crumbs !== null &&
              crumbs.length > 0 && (
                <Breadcrumb crumbs={crumbs} content={crumbContent} />
              )}
          </FloatingHeader>

          <div className={`relative`}>
            <div className={`min-h-screen`}>{children}</div>
            {crumbLocation === "bottom" && (
              <Breadcrumb crumbs={crumbs} content={crumbContent} />
            )}

            {/* <Background bgColorClass={bgColorClass} /> */}
          </div>
        </MenuLayout>
      )
    case "header-links":
      return (
        <MenuLayout
          title={title}
          path={path}
          crumbs={crumbs}
          menuVisible={menuVisible}
          onSlideMenuClick={onSlideMenuClick}
          index={index}
        >
          <Header
            content={headerContent}
            onSearch={onSearch}
            search={search}
            placeholder={placeholder}
            onMenuButtonClick={onMenuButtonClick}
            menuVisible={menuVisible}
          />

          <HideSmall className="w-full absolute shadow-md" size="lg">
            <div className="pt-2 bg-cuimc-blue-90">
              <HeaderLinksNav
                title={title}
                onSearch={onSearch}
                search={search}
                placeholder={placeholder}
              />
            </div>

            {titleContent}

            {crumbLocation === "top" &&
              crumbs !== null &&
              crumbs.length > 0 && (
                <Breadcrumb crumbs={crumbs} content={crumbContent} />
              )}
          </HideSmall>

          <div className={`${bgColorClass}`}>
            <div className={`relative min-h-screen`}>{children}</div>

            {crumbLocation === "bottom" && (
              <Breadcrumb crumbs={crumbs} content={crumbContent} />
            )}
          </div>
        </MenuLayout>
      )
    case "crumb":
      return (
        <HeaderLayout
          title={title}
          path={path}
          headerContent={headerContent}
          onSearch={onSearch}
          search={search}
          placeholder={placeholder}
          bgColorClass={bgColorClass}
          index={index}
        >
          <HideSmall className="w-full absolute z-50 shadow" size="lg">
            {crumbLocation === "top" &&
              crumbs !== null &&
              crumbs.length > 0 && (
                <Breadcrumb crumbs={crumbs} content={crumbContent} />
              )}
          </HideSmall>

          {titleContent}

          <div className={`relative`}>
            <div className={`relative min-h-screen`}>{children}</div>

            {crumbLocation === "bottom" && (
              <Breadcrumb crumbs={crumbs} content={crumbContent} />
            )}
          </div>
        </HeaderLayout>
      )
    default:
      return (
        <NavLayout
          nav={nav}
          title={title}
          path={path}
          crumbs={crumbs}
          headerContent={headerContent}
          onSearch={onSearch}
          search={search}
          placeholder={placeholder}
          bgColorClass={bgColorClass}
          showLogo={showLogo}
          index={index}
        >
          {crumbLocation === "top" && crumbs !== null && crumbs.length > 0 && (
            <HideSmall>
              <Container className="border-t border-solid border-gray-200 py-4">
                <Breadcrumb
                  crumbs={crumbs}
                  content={crumbContent}
                  color="gray"
                  color2="blue"
                  fontSize="text-xs"
                />
              </Container>
            </HideSmall>
          )}

          {titleContent}

          {/* <Content className={`relative min-h-screen`}>{children}</Content> */}

          <div className={`relative min-h-screen`}>{children}</div>

          {crumbLocation === "bottom" && (
            <Container>
              <Breadcrumb
                crumbs={crumbs}
                content={crumbContent}
                className="border-t border-solid border-gray-200 py-5"
              />
            </Container>
          )}
        </NavLayout>
      )
  }
}

CrumbLayout.defaultProps = {
  crumbs: [],
  floatMode: "none",
  showLogo: true,
  crumbLocation: "none",
  title: "",
  nav: "",
  onSearch: null,
  search: "",
  placeholder: "Search",
  headerContent: null,
  titleContent: null,
  crumbContent: null,
  animateHeader: false,
  bgColorClass: "",
  index: true,
}

export default CrumbLayout
