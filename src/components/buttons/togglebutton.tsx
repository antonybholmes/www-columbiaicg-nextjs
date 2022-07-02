import React, { useEffect, useRef } from "react"
import Row from "../row"
import { gsap } from "gsap"

type CheckBoxProps = {
  selected: boolean
  onChange: any
}

const ToggleButton: React.FC<CheckBoxProps> = ({
  selected,
  onChange,
  children,
}) => {
  const buttonEl = useRef(null)

  useEffect(() => {
    gsap.timeline().to(buttonEl.current, {
      duration: 0.5,
      transform: selected ? `translateX(calc(0.8rem - 1px))` : `translateX(0)`,
      ease: "power3.out",
    })
  }, [selected])

  return (
    <div
      onClick={() => onChange(!selected)}
      className={`cursor-pointer trans-ani px-4 py-2 rounded-full border border-solid ${
        selected
          ? "bg-cuimc-button-blue-20 border-transparent"
          : "border-slate-200 hover:bg-slate-100"
      }`}
    >
      {children}
    </div>
  )
}

ToggleButton.defaultProps = {
  onChange: null,
  selected: false,
}

export default ToggleButton
