/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import  { ReactNode } from "react"
import Breadcrumb from "../components/breadcrumb"
import Container from "../components/container"
import HideSmall from "../components/hidesmall"
import Layout from "./layout"

type LayoutProps = {
  title: string
  path?: string
  crumbs?: [string, string][]
  crumbLocation?: string
  index?: boolean
  children?: ReactNode
}


const PageLayout  = ({
  title,
  path,
  crumbs = [],
  crumbLocation = "top",
  index = true,
  children,
} : LayoutProps) => {
  return (
    <Layout title={title} path={path} index={index}>
    

      {crumbLocation === "top" && crumbs !== null && crumbs.length > 0 && (
        <HideSmall>
          <Container className="py-4">
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



export default PageLayout
