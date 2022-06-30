import React from "react"

type SlideMenuCanvasProps = {
  onClick: any
  visible: boolean
}

const SlideMenuCanvas: React.FC<SlideMenuCanvasProps> = ({
  onClick,
  visible,
}) => (
  <div
    className={`slide-menu-canvas ${
      visible ? "slide-menu-canvas-visible" : ""
    }`}
    onClick={onClick}
  />
)

export default SlideMenuCanvas
