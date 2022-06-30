/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import CrumbLayout from "./crumblayout"

type CrumbTitleLayoutProps = {
  title: string
  path?: string
  crumbs?: Array<any>
  crumbLocation?: string
  nav?: string
  subTitle?: string
  headerContent?: any
  onSearch?: any
  search?: string
  placeholder?: string
  crumbContent?: any
  floatMode?: string
  showLogo?: boolean
  bgColorClass?: string
  index?: boolean
}

const CrumbTitleLayout: React.FC<CrumbTitleLayoutProps> = ({
  nav,
  title,
  path,
  crumbs,
  crumbLocation,
  subTitle,
  headerContent,
  onSearch,
  search,
  placeholder,
  showLogo,
  crumbContent,
  floatMode,
  bgColorClass,
  index,
  children,
}) => (
  <CrumbLayout
    title={title}
    path={path}
    nav={nav}
    headerContent={headerContent}
    onSearch={onSearch}
    search={search}
    placeholder={placeholder}
    crumbContent={crumbContent}
    index={index}
    // titleContent={
    //   <H
    //     title={nav}
    //     heading={title}
    //     subHeading={subTitle}
    //     path={path}
    //     className="py-2"
    //   />
    // }
    // titleContent={
    //   title !== "" ? (
    //     <div className="py-3">
    //       <Container>
    //         <h2 className="text-white" style={{ fontWeight: "normal" }}>
    //           {title}
    //         </h2>
    //       </Container>
    //     </div>
    //   ) : null
    // }
    crumbs={crumbs}
    crumbLocation={crumbLocation}
    floatMode={floatMode}
    showLogo={showLogo}
    bgColorClass={bgColorClass}
  >
    {children}
  </CrumbLayout>
)

CrumbTitleLayout.defaultProps = {
  path: "",
  crumbs: [],
  floatMode: "none",
  showLogo: true,
  crumbLocation: "top",
  title: "",
  nav: "",
  subTitle: "",
  headerContent: null,
  crumbContent: null,
  bgColorClass: "",
  index: true,
}

export default CrumbTitleLayout
