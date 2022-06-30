import React, { useState } from "react"
import Row from "../row"

type TopPubProps = {
  journal: any
  onClick: any
}

const TopPub: React.FC<TopPubProps> = ({ journal, onClick }) => {
  const [hover, setHover] = useState(false)

  const mouseEnterHandler = (e: any) => {
    setHover(true)
  }

  const mouseLeaveHandler = (e: any) => {
    setHover(false)
  }
  return (
    <Row
      className={`justify-between text-sm  cursor-pointer trans-ani mb-1 border border-solid rounded-full px-3 py-1 ${
        hover
          ? " border-cuimc-button-blue bg-cuimc-button-blue-5"
          : "border-gray-200 "
      }`}
      onClick={onClick}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div>{journal[0]}</div>
      <div>{journal[1]}</div>
    </Row>
  )
}

type TopPubsProps = {
  topPubs: Array<[string, number]>
  onPubClick: any
}

const TopPubs: React.FC<TopPubsProps> = ({ topPubs, onPubClick }) => (
  <div>
    {/* <div>
      <h6 className="font-medium">Top Journals</h6>
    </div> */}
    <div>
      {topPubs.map((journal: any, index: number) => {
        return (
          <TopPub
            journal={journal}
            key={index}
            onClick={() => onPubClick(`"${journal[0]}"[journal]`)}
          />
        )
      })}
    </div>
  </div>
)

export default TopPubs
