import React from "react"

const DropShadowFrame = ({ children, className }) => (
  <div
    className={`bg-white shadow-card hover:shadow-card-xl trans-ani overflow-hidden ${className}`}
  >
    {children}
  </div>
)

DropShadowFrame.defaultProps = {
  className: "",
}

export default DropShadowFrame
