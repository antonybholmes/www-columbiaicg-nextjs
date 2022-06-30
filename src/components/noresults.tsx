import React from "react"
import FlatCard from "./flatcard"
import MainCard from "./maincard"

type NoResultsProps = {
  text: string
}

const NoResults: React.FC<NoResultsProps> = ({ text }) => (
  <MainCard>
    <h4 className="text-center">{text}</h4>
  </MainCard>
)

NoResults.defaultProps = {
  text: "No results.",
}

export default NoResults
