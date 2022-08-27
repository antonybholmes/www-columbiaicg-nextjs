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

type HeaderLayoutProps = {
  crumbs?: ICrumb[]
  title: string
  path?: string
  headerContent?: any
  onSearch?: any
  search?: string
  placeholder?: string
  bgColorClass?: string
  index?: boolean
  children?: ReactNode
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  crumbs,
  title,
  path,
  headerContent,
  onSearch,
  search,
  placeholder,
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
      <Header
        title={title}
        content={headerContent}
        onSearch={onSearch}
        search={search}
        placeholder={placeholder}
        onMenuButtonClick={handleMenuButtonClick}
        menuVisible={menuVisible}
      />

      <main>{children}</main>
    </MenuLayout>
  )
}

HeaderLayout.defaultProps = {
  crumbs: [],
  headerContent: null,
  onSearch: null,
  search: "",
  placeholder: "Search",
  bgColorClass: "bg-white",
  index: true,
}

export default HeaderLayout
