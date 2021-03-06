import React from "react"

const SearchSummary = ({ count, single, plural }) => (
  <div className="text-slate-500">
    {count} {count === 1 ? single : plural} found
  </div>
)

export default SearchSummary
