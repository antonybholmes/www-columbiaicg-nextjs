import React, { useEffect, useRef } from "react"
import Row from "../row"
import { gsap } from "gsap"

type CheckBoxProps = {
  selected: boolean
  onChange: any
}

const ToggleSwitch: React.FC<CheckBoxProps> = ({
  selected,
  onChange,
  children,
}) => {
  const buttonEl = useRef(null)

  useEffect(() => {
    gsap.timeline().to(buttonEl.current, {
      duration: 0.5,
      transform: selected ? `translateX(calc(0.95rem - 2px))` : `translateX(0)`,
      ease: "power3.out",
    })
  }, [selected])

  return (
    <Row
      onClick={() => onChange(!selected)}
      className={`cursor-pointer trans-ani justify-between w-full`}
    >
      <div>{children}</div>

      <div
        className={`relative rounded-full trans-ani ${
          selected ? "bg-cuimc-button-blue-80" : "bg-slate-300"
        } `}
        style={{ width: "2.6rem", height: "1.8rem" }}
      >
        <div
          ref={buttonEl}
          className="absolute rounded-full bg-white"
          style={{
            left: "2px",
            top: "2px",
            width: "calc(1.8rem - 4px)",
            height: "calc(1.8rem - 4px)",
          }}
        ></div>
      </div>
    </Row>
  )
}

ToggleSwitch.defaultProps = {
  onChange: null,
  selected: false,
}

export default ToggleSwitch
