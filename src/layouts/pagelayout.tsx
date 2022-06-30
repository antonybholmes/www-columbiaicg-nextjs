/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import Breadcrumb from "../components/breadcrumb"
import Container from "../components/container"
import HideSmall from "../components/hidesmall"
import SEO from "../components/seo"
import Layout from "./layout"

type LayoutProps = {
  title: string
  path?: string
  nav?: string
  crumbs?: [string, string][]
  crumbLocation?: string
  index?: boolean
  children?: ReactNode
}

const PageLayout  = ({
  title,
  path,
  nav,
  crumbs = [],
  crumbLocation,
  index,
  children,
} : LayoutProps) => {
  return (
    <Layout title={title} path={path}>
    

      {crumbLocation === "top" && crumbs !== null && crumbs.length > 0 && (
        <HideSmall>
          <Container className="border-t border-solid border-gray-200 py-4">
            <Breadcrumb
              crumbs={crumbs}
              color="gray"
              color2="blue"
              fontSize="text-xs"
            />
          </Container>
        </HideSmall>
      )}

      <div className={`relative min-h-screen`}>{children}</div>

      {crumbLocation === "bottom" && (
        <Container>
          <Breadcrumb
            crumbs={crumbs}
            className="border-t border-solid border-gray-200 py-5"
          />
        </Container>
      )}
    </Layout>
  )
}

PageLayout.defaultProps = {
  title: "",
  path: "",
  nav: "",
  crumbs: [],
  crumbLocation: "top",
  index: true,
}

export default PageLayout
