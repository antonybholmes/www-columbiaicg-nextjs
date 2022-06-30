import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"
import Row from "../row"

type HamburgerProps = {
  menuVisible: boolean
}

const Hamburger: React.FC<HamburgerProps> = ({ menuVisible }) => {
  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       "#line1",
  //       {
  //         duration: 0.3,
  //         delay: 0,
  //         transform: menuVisible ? "translateY(4px) skewY(45deg)" : "skewY(0)",
  //       },
  //       0
  //     )
  //     .to(
  //       "#line1",
  //       {
  //         duration: 0.3,
  //         delay: 0,
  //         width: menuVisible ? "17px" : "24px",
  //       },
  //       0
  //     )
  //     .to(
  //       "#line1",
  //       {
  //         duration: 0.3,
  //         delay: 0,
  //         left: menuVisible ? "8px" : "4px",
  //       },
  //       0
  //     )
  //     .to(
  //       "#line3",
  //       {
  //         duration: 0.3,
  //         delay: 0,
  //         transform: menuVisible
  //           ? "translateY(-4px) skewY(-45deg)"
  //           : "skewY(0)",
  //       },
  //       0
  //     )
  //     .to(
  //       "#line3",
  //       {
  //         duration: 0.3,
  //         delay: 0,
  //         width: menuVisible ? "17px" : "24px",
  //       },
  //       0
  //     )
  //     .to(
  //       "#line3",
  //       {
  //         duration: 0.3,
  //         delay: 0,
  //         left: menuVisible ? "8px" : "4px",
  //       },
  //       0
  //     )
  // }, [menuVisible])

  return (
    <Row isCentered={true} className="relative rounded-md w-10 h-10">
      <div>
        <div
          id="line1"
          className="bg-cuimc-blue w-6"
          style={{ height: "3px" }}
        />
        <div
          id="line2"
          className="bg-cuimc-blue w-6"
          style={{ height: "3px", marginTop: "2px" }}
        />
        <div
          id="line3"
          className="bg-cuimc-blue w-6"
          style={{ height: "3px", marginTop: "2px" }}
        />
      </div>
    </Row>
  )
}

type SlideMenuButtonProps = {
  menuVisible: boolean
  onClick: any
}

const SlideMenuButton: React.FC<SlideMenuButtonProps> = ({
  menuVisible,
  onClick,
}) => {
  return (
    <button
      aria-label="Open Menu"
      onClick={onClick}
      className="cursor-pointer p-4"
    >
      {/* <FontAwesomeIcon icon="bars" className={`text-lg`} /> */}
      <Hamburger menuVisible={menuVisible} />
    </button>
  )
}

export default SlideMenuButton
