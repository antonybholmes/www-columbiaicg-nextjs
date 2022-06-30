/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Layout from "./layout"
import SlideMenu from "../components/slidemenu/slidemenu"

type MenuLayoutProps = {
  title: string
  path?: string
  crumbs?: Array<[string, string]>
  menuVisible?: boolean
  onSlideMenuClick?: any
  bgColorClass?: string
  index?: boolean
}

const MenuLayout: React.FC<MenuLayoutProps> = ({
  title,
  path,
  crumbs,
  menuVisible,
  onSlideMenuClick,
  bgColorClass,
  index,
  children,
}) => (
  <Layout title={title} path={path} crumbs={crumbs} index={index}>
    <SlideMenu visible={menuVisible} onSlideMenuClick={onSlideMenuClick} />

    <main className={`relative ${bgColorClass}`}>{children}</main>
    {/* <main className={`relative`}>{children}</main> */}
  </Layout>
)

MenuLayout.defaultProps = {
  title: "",
  path: "",
  crumbs: [],
  bgColorClass: "",
  menuVisible: false,
  onSlideMenuClick: null,
  index: true,
}

export default MenuLayout
