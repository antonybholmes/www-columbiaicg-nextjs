/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component, useState } from "react"
import FilterItem from "../filter/filteritem"

type YearsFilterProps = {
  handleClick?: any
  top?: number
}

const YearsFilter = ({ handleClick }) => {
  const [selectedYears, setSelectedYears] = useState(new Set())

  const _handleClick = data => {
    const years = new Set(selectedYears)

    if (data.selected) {
      years.add(data.text)
    } else {
      years.delete(data.text)
    }

    setSelectedYears(years)
    handleClick(selectedYears)
  }

  const years = new Set()

  for (const publication of this.props.publications) {
    if (publication.year !== -1) {
      years.add(publication.year)
    }
  }

  return (
    <div className="col">
      {Array.from(years)
        .sort()
        .reverse()
        .slice(0, this.props.top)
        .map((year, index) => {
          return <FilterItem key={index} onClick={handleClick} text={year} />
        })}
    </div>
  )
}

YearsFilter.defaultProps = {
  handleClick: null,
  top: 5,
}

export default YearsFilter
