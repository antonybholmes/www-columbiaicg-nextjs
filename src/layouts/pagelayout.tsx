/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { ReactNode } from "react"
import Breadcrumb from "../components/breadcrumb"
import Container from "../components/container"
import HideSmall from "../components/hidesmall"
import ICrumb from "../types/crumb"
import ICrumbs from "../types/crumbs"
import Layout from "./layout"

type LayoutProps = {
  title: string
  path?: string
  nav?: string
  crumbs?: ICrumb[]
  crumbLocation?: string
  index?: boolean
  children?: ReactNode
}

const PageLayout = ({
  title,
  path,
  nav = "",
  crumbs = [],
  crumbLocation = "top",
  index = true,
  children,
}: LayoutProps) => {
  return (
    <Layout title={title} path={path} index={index}>
      {crumbLocation === "top" && crumbs !== null && crumbs.length > 0 && (
        <HideSmall>
          <Container className="py-5">
            <Breadcrumb
              crumbs={crumbs}
              color="gray"
              color2="blue"
              fontSize="text-xs"
            />
          </Container>
        </HideSmall>
      )}

      <div className={`relative min-h-screen pb-16`}>{children}</div>

      {crumbLocation === "bottom" && (
        <Container>
          <Breadcrumb
            crumbs={crumbs}
            className="border-t border-solid border-slate-200 py-5"
          />
        </Container>
      )}
    </Layout>
  )
}

export default PageLayout
