/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

type SEOProps = {
  title?: string
  description?: string
  path?: string
  lang?: string
  index?: boolean
}

const SEO: React.FC<SEOProps> = ({ title, description, path, lang, index }) => {


  // const metaTitle = title !== "" ? `${title} | ${SITE_NAME}` : siteTitle
  // const metaDescription =
  //   description !== "" ? description : title == "Home" ? siteDescription : ""
  // const url = `${siteUrl}${path}`

  return (
    <></>
    // <GatsbySeo
    //   title={metaTitle}
    //   description={metaDescription}
    //   canonical={url}
    //   noindex={!index}
    //   nofollow={!index}
    //   language="en_US"
    //   metaTags={[
    //     {
    //       name: "keywords",
    //       content: keywords.join(", "),
    //     },
    //   ]}
    //   openGraph={{
    //     url: url,
    //     title: metaTitle,
    //     description: metaDescription,
    //     locale: "en_US",
    //     site_name: siteTitle,
    //     type: "website",
    //   }}
    // />

    /*
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          property: `og:site_title`,
          content: siteTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: author,
        },
        {
          name: "keywords",
          content: keywords.join(", "),
        },
        {
          name: "robots",
          content: "all, index, follow",
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:email`,
          content: email,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          name: `og:locality`,
          content: `New York City`,
        },
        {
          name: `og:region`,
          content: `NY`,
        },
        {
          name: `og:postal-code`,
          content: `10032`,
        },
        {
          name: `og:country-name`,
          content: `USA`,
        },
        // {
        //   name: `twitter:card`,
        //   content: `summary`,
        // },
        // {
        //   name: `twitter:creator`,
        //   content: author,
        // },
        // {
        //   name: `twitter:title`,
        //   content: title,
        // },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
      ]}
    />
    */
  )
}

SEO.defaultProps = {
  lang: "en",
  title: "",
  description: "",
  path: "",
  index: true,
}

export default SEO
